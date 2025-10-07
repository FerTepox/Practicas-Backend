import { Op, where } from 'sequelize';
import Role from '../../../DAO/v1/models/role';
import GlobalRepository from '../../../DAO/v1/repositories/globalRepository';
import { RoleDTO } from '../../../DTOs/v1/roleDTO';
import sequelize from '../../../config/connectionDB';
import { UserDTO } from '../../../DTOs/v1/userDTO';
import User from '../../../DAO/v1/models/user';
import bcrypt from 'bcryptjs/umd/types';
import * as Forge from 'node-forge';
import { config } from "dotenv";
config();

export class UserService {
  private privateKey: string = process.env.PRIVATE_KEY!

  private globalRepository: GlobalRepository;

  constructor() {
    this.globalRepository = new GlobalRepository();
  }

  public async createUser(userData: any): Promise<UserDTO> {
    //transaction
    const t = await (await sequelize).transaction()
    try {
      if (!userData) {
        throw new Error(`Falta información para registrar el usuario`);
      }
      //Obtiene los datos del usuario
      const { Username, Email, Password, RoleID } = userData;
      if (!Username || !Email || !Password || !RoleID) {
        throw new Error(`Falta información para registrar el usuario`);
      }

      //Obtiene los roles de usuario
      const UserRoles = await this.getAllRoles()

      const userByEmail = await this.getOneUser(Email);
      //VALIDA QUE NO HAY UN REGISTRO IGUAL
      if (userByEmail) {
        throw new Error(`El usuario ya existe`);
      }

      const decryptedPassword = this.decrypt(Password);
      const hashedPassword = await bcrypt.hash(decryptedPassword, 10);

      //Se crea el registro en la base de datos
      const user: UserDTO = await this.globalRepository.create(User, UserDTO,
        {
          Username, Email, hashedPassword, RoleID,
          DateInsert: new Date().toLocaleString('sv-SE', { timeZone: 'America/Mexico_City' })
        },
        t
      );

      await t.commit()
      return new UserDTO(user);
    } catch (error) {
      await t.rollback()
      throw new Error("Service: No se logro crear el regsitro, " + error);
    }
  }

  public async getAllUsers(): Promise<UserDTO[]> {
    try {
      const users = await this.globalRepository.findAll(User, UserDTO, {});
      console.log('Usuarios encontrados:', users);
      return users.map(user => new UserDTO(user));
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw new Error('No se pudo obtener los usuarios, ' + error);
    }
  }
  public async getOneUser(id: any): Promise<UserDTO> {
    try {
      // Verifica si id es un número
      const isIdNumeric = !isNaN(id);

      const user = await this.globalRepository.findOne(User, UserDTO,
        {
          where: {
            IsActive: true,
            [Op.or]: [
              // Si es numérico, intenta buscar por Email o userName
              { Email: isIdNumeric ? String(id) : id },
              { Username: isIdNumeric ? String(id) : id },
              // Busca por ID solo si es numérico
              { UserID: isIdNumeric ? Number(id) : null }
            ]

          }
        });

      console.log('Usuario encontrado:', user);
      return user;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw new Error('No se pudo obtener los usuarios' + error);
    }
  }

  /////////////////////ROLES DE USUARIO\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //ESTA PARTE DEL SERVICE ES PARA OBTENER LOS ROLES DE USUARIO
  public async getAllRoles(): Promise<RoleDTO[]> {
    try {
      const userRoles = await this.globalRepository.findAll(Role, RoleDTO, {});
      console.log('Roles encontrados:', userRoles);
      return userRoles.map(userRole => new RoleDTO(userRole));
    } catch (error) {
      console.error('Error al obtener los roles:', error);
      throw new Error('No se pudo obtener los roles, ' + error);
    }
  }

  //Obtener un solo rol
  public async getRole(roleID: any): Promise<RoleDTO> {
    try {
      const userRole = await this.globalRepository.findOne(Role, RoleDTO,
        {
          where: {
            IsActive: true,
            RoleID: roleID
          }
        });
      console.log('Rol encontrado:', userRole);
      return new RoleDTO(userRole);
    } catch (error) {
      console.error('Error al obtener el rol:', error);
      throw new Error('No se pudo obtener el rol, ' + error);
    }
  }



  private decrypt(encryptedData: string): string {
    const privateKey = Forge.pki.privateKeyFromPem(this.privateKey);
    const decrypted = privateKey.decrypt(Forge.util.decode64(encryptedData));
    return decrypted;
  }
}