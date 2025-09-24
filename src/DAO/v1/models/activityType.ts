import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class ActivityType extends Model {}
sequelize.then((sequelize: Sequelize) => {
  ActivityType.init({
    ActivityTypeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ActivityTypeName: {
      type: DataTypes.STRING(100),
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
    modelName: 'ActivityType',
    tableName: 'ActivityTypes',
    timestamps: false
  });
});

export default ActivityType;
