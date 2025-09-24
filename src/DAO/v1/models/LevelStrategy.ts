import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/connectionDB';

class LevelStrategy extends Model {}
sequelize.then((sequelize: Sequelize) => {
  LevelStrategy.init({
    StrategyID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StrategyName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LevelID: {
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
    modelName: 'LevelStrategy',
    tableName: 'LevelStrategies',
    timestamps: false
  });
});

export default LevelStrategy;
