import sequelize from "../config/database.js";

import { DataTypes } from "sequelize";

const kelasModel = sequelize.define(
  "kelas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_kelas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    semester: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true, freezeTableName: true }
);

export default kelasModel;
