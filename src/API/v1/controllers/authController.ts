import { Request, Response } from "express";
import { AuthService } from "../../../BL/v1/services/authService";
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();
export class AuthController {
    private authService: AuthService;
    secret!: string;

    constructor() {
        this.authService = new AuthService();
        this.secret = process.env.SECRET_KEY!;
    }

    async login(req: Request, res: Response){
        try {
            const userInfo = await this.authService.login(req.body);

            const token = jwt.sign({ id: userInfo.Email, role: userInfo.roleName, roleID: userInfo.roleId }, this.secret, { expiresIn: '3h' });

            res.json({ token: token });
        } catch (error) {
            console.log(error)
            res.status(401).send({message: " "+error});
        }
    }

}