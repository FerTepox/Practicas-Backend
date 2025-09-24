import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class ActivityLevel extends Model {}
sequelize.then((sequelize: Sequelize) => {
  ActivityLevel.init({
    LevelID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LevelName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ActivityTypeID: {
      type: DataTypes.INTEGER,
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
    modelName: 'ActivityLevel',
    tableName: 'ActivityLevels',
    timestamps: false
  });
});

export default ActivityLevel;
