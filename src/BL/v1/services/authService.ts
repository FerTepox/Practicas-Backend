import bcrypt from 'bcryptjs';
import { UserService } from '../../../BL/v1/services/userService';
import * as Forge from 'node-forge';
import { config } from "dotenv";

config();

export class AuthService {
    private userService: UserService;
    private privateKey: string = process.env.PRIVATE_KEY!
    
    constructor() {
        this.userService = new UserService();
    }

    async login(req: { username: string, password: string }) {
        try {
            // Desencriptar las credenciales
            const decryptedUsername = this.decrypt(req.username);
            const decryptedPassword = this.decrypt(req.password);

            const user = await this.userService.getOneUser(decryptedUsername);
            if (!user) throw new Error('Usuario no encontrado');

            // Comparar la contraseña usando bcrypt
            const isPasswordRight = await bcrypt.compare(decryptedPassword, user.Password);
            if (!isPasswordRight) throw new Error('Contraseña incorrecta');

            const role = await this.userService.getRole(user.RoleID);
            
            return { userId: user.UserID, Email: user.Email, roleId: user.RoleID, roleName: role.RoleName };
        } catch (error) {
            throw new Error("Error al iniciar sesion: " + error);
        }
    }

    private decrypt(encryptedData: string): string {
        const privateKey = Forge.pki.privateKeyFromPem(this.privateKey);
        const decrypted = privateKey.decrypt(Forge.util.decode64(encryptedData));
        return decrypted;
    }
}
