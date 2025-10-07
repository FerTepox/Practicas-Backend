import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class User extends Model {}
sequelize.then((sequelize: Sequelize) => {
  User.init({
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RoleID: {
      type: DataTypes.INTEGER,
      defaultValue: false
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    DateInsert: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW
    },
    DateUpdate: {
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: false
  });
});

export default User;
