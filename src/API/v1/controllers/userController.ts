import { Request, Response } from "express";
import { UserService } from '../../../BL/v1/services/userService';


export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const userData = req.body;
            const user = await this.userService.createUser(userData);
            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al obtener roles' });
        }
    }

    //ESTE CONTROLLER ES PARA LOS ROLES
    public async getAllRoles(req: Request, res: Response): Promise<void> {
        try {
            const userRoles = await this.userService.getAllRoles();
            console.log("obteniendo Roles: ")
            res.json(userRoles);
            console.log(userRoles)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al obtener roles' });
        }
    }

    public async getRolesByID(req: Request, res: Response): Promise<void> {
        try {
            const RoleID = req.params.RoleID;
            const userRoles = await this.userService.getRole(RoleID);
            console.log("obteniendo Roles: ")
            res.json(userRoles);
            console.log(userRoles)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Error al obtener roles' });
        }
    }

}