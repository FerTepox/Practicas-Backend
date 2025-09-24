import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class AttributeDetail extends Model {}
sequelize.then((sequelize: Sequelize) => {
  AttributeDetail.init({
    AttributeDetailID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StrategyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LevelAttributeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Value: {
      type: DataTypes.STRING(25)
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
    modelName: 'AttributeDetail',
    tableName: 'AttributeDetails',
    timestamps: false
  });
});

export default AttributeDetail;
