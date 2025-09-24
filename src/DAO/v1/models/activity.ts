import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class Activity extends Model {}
sequelize.then((sequelize: Sequelize) => {
  Activity.init({
    ActivityID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ActivityName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ActivityTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CourseID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Deadline: {
      type: DataTypes.DATE
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
    modelName: 'Activity',
    tableName: 'Activities',
    timestamps: false
  });
});

export default Activity;
