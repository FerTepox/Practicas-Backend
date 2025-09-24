import { Op, where } from 'sequelize';
import Role from '../../../DAO/v1/models/role';
import GlobalRepository from '../../../DAO/v1/repositories/globalRepository';
import { RoleDTO } from '../../../DTOs/v1/roleDTO';
import sequelize from '../../../config/connectionDB';

export class UserService {
  private globalRepository: GlobalRepository;

  constructor() {
    this.globalRepository = new GlobalRepository();
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
      throw new Error('No se pudo obtener los roles, '+error);
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
      throw new Error('No se pudo obtener el rol, '+error);
    }
  }



  
}