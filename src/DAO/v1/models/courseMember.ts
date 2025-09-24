import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class CourseMember extends Model {}
sequelize.then((sequelize: Sequelize) => {
  CourseMember.init({
    CourseMemberID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    CourseID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UserID: {
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
    modelName: 'CourseMember',
    tableName: 'CourseMembers',
    timestamps: false
  });
});

export default CourseMember;