import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../sequalize';

export interface IUserTheme {
  userId: number;
  theme: 'light' | 'dark';
}

export const UserTheme = sequelize.define<Model<IUserTheme>>(
  'UserTheme',
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    theme: {
      type: DataTypes.ENUM('light', 'dark'),
      allowNull: false,
    },
  },
  {
    tableName: 'user_themes',
    timestamps: false,
  },
);
