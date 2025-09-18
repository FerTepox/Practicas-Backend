import express from 'express';
import cors from 'cors'
/*
import routesAsset from '../../../API/v1/routes/assetRoutes';
import routerInvoiceDetail from '../../../API/v1/routes/invoiceDetailRoutes';
import routesUser from '../../../API/v1/routes/userRoutes';
import routesAuth from '../../../API/v1/routes/authRoutes';
import routerBranch from '../../../API/v1/routes/branchRoutes';
import routerDepartment from '../../../API/v1/routes/departmentRoutes';
import routerJob from '../../../API/v1/routes/jobRoutes';
import routerEmployee from '../../../API/v1/routes/employeeRoutes';
import routerAssigment from '../../../API/v1/routes/assigmentRoutes';
import routerSetting from '../../../API/v1/routes/settingRoutes';
import routeRolePermission from '../../../API/v1/routes/rolePermissionRoutes';
import routerNotification from '../../../API/v1/routes/notificationRoutes';
import routerAssetsByJob from '../../../API/v1/routes/assetByJobRoutes';
import routerRepairs from '../../../API/v1/routes/repairRoutes';
import routerVendors from '../../../API/v1/routes/vendorRoutes';
import routerUserVendors from '../../../API/v1/routes/userVendorRoutes';
import routerSoftware from '../../../API/v1/routes/softwareRoutes';
import routerSoftwareByJob from '../../../API/v1/routes/softwareByJobRoutes';
import routerSoftwareAssigned from '../../../API/v1/routes/softwareAssignedRoutes';
import routerBlobDataFile from '../../../API/v1/routes/blobDataFileRoutes';
import db from '../database/connection';
import dbCFDI from '../database/connectionToCFDI';

import sequelize from '../database/connection';
*/

class App {

    private app: express.Application;
    private port: string; 

    constructor() {
        this.app = express();
        this.port = process.env.PORT!;
        this.app.use(cors());
        
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.listen();
    }

    listen() {
        this.app.listen(process.env.PORT!, () => {
            console.log("aplicación en el puerto: " + process.env.PORT!)
        })
    }
    routes() {

/*
        this.app.use('/api/assets', routesAsset)
        this.app.use('/api/invoiceDetail', routerInvoiceDetail)
        this.app.use('/api/assetsByJob', routerAssetsByJob)
        this.app.use('/api/users', routesUser)
        this.app.use('/api/branches', routerBranch)
        this.app.use('/api/departments', routerDepartment)
        this.app.use('/api/jobs', routerJob)
        this.app.use('/api/auth', routesAuth)
        this.app.use('/api/employees', routerEmployee)
        this.app.use('/api/assigments', routerAssigment)
        this.app.use('/api/settings', routerSetting)
        this.app.use('/api/permission', routeRolePermission)
        this.app.use('/api/notifications', routerNotification)
        this.app.use('/api/repairs', routerRepairs)
        this.app.use('/api/vendors', routerVendors)
        this.app.use('/api/userVendors', routerUserVendors)
        this.app.use('/api/software', routerSoftware)
        this.app.use('/api/softwareByJob', routerSoftwareByJob)
        this.app.use('/api/softwareAssigned', routerSoftwareAssigned)
        this.app.use('/api/blobDataFile', routerBlobDataFile)
*/
    }
    midlewares() {
        this.app.use(express.json());
    }

    public async dbConnect() {
        try {

            //const db = await sequelize
            //await db.authenticate(); // Autenticar conexion a la base
            console.log("conexion a la base establecida")
            
            
        } catch (error) {
            console.log("conexion a la base NO establecida")
            console.error(error);
        }


    }
}

export default App;