import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class CourseActivity extends Model {}
sequelize.then((sequelize: Sequelize) => {
  CourseActivity.init({
    CourseActivityID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ActivityID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Score: {
      type: DataTypes.DOUBLE
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
    modelName: 'CourseActivity',
    tableName: 'CourseActivities',
    timestamps: false
  });
});

export default CourseActivity;
