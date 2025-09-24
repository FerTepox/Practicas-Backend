import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class LevelAttribute extends Model {}
sequelize.then((sequelize: Sequelize) => {
  LevelAttribute.init({
    LevelAttributeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    AttributeName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    StrategyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NeedsReply: {
      type: DataTypes.BOOLEAN
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
    modelName: 'LevelAttribute',
    tableName: 'LevelAttributes',
    timestamps: false
  });
});

export default LevelAttribute;
