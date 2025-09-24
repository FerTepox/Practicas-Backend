import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class UserAnswer extends Model {}
sequelize.then((sequelize: Sequelize) => {
  UserAnswer.init({
    UserAnswerID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ActivityID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AttributeDetailID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AnswerValue: {
      type: DataTypes.STRING(50)
    },
    IsCorrect: {
      type: DataTypes.BOOLEAN
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
    modelName: 'UserAnswer',
    tableName: 'UserAnswers',
    timestamps: false
  });
});

export default UserAnswer;
