import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class Course extends Model {}
sequelize.then((sequelize: Sequelize) => {
  Course.init({
    CourseID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CourseName: {
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
    modelName: 'Course',
    tableName: 'Courses',
    timestamps: false
  });
});

export default Course;
