import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';


class Role extends Model {}
sequelize.then((sequelize: Sequelize) => {
Role.init({
    RoleID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    RoleName: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: true
    },
    DateInsert: {
        type: DataTypes.DATEONLY, 
        allowNull: true, 
        defaultValue: DataTypes.NOW
    },
    DateUpdate: {
        type: DataTypes.DATEONLY, 
        allowNull: true 
    }
}, {
    sequelize,
    modelName: 'Role',
    tableName: 'Roles',
    timestamps: false,
    //schema: 'dbo'
});
})
export default Role;
