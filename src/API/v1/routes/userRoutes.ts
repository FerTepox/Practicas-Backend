import { Router } from 'express';
import { UserController } from '../controllers/userController';
//import { authorize } from '../../../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

//Agregar el middleware para controlar el acceso segun el ROL y el permiso
//authorize("Nombre de la setting")
//Si no aplica ninguna setting a la ruta se puede colocar NotApplicable, lo cual hara que solo se compruebe el token(ROL) y no el permiso
//authorize("NotApplicable")

router.post('/newUser', userController.createUser.bind(userController));

//esta ruta es para mandar los roles que hay 
router.get("/roles", userController.getAllRoles.bind(userController));
router.get("/role/:RoleID", userController.getRolesByID.bind(userController));

/*
// Rutas para el CRUD de users
router.get("/allUsers", authorize("ShowUsersHistory"), userController.getAllUsers.bind(userController));
router.get("/activeUsers", authorize("ShowUsers"), userController.getAllActiveUsers.bind(userController));
router.post('/newUser', authorize("UploadUsers"), userController.createUser.bind(userController));





router.put("/delete", authorize("DeleteUsers"), userController.deleteUser.bind(userController));
router.put("/update", authorize("UpdateUserRole"), userController.updateUser.bind(userController));


//ESTA RUTA DA PROBLEMAS, DEBE IR AL FINAL PARA FUNCIONAR
router.get("/:EmployeeNumber", authorize("ShowUsers"), userController.getUser.bind(userController));
*/

export default router;