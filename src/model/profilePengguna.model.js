import sequelize from "../config/database.js";
import kelasModel from "./kelas.model.js";

import { DataTypes } from "sequelize";

const profilePenggunaModel = sequelize.define(
  "profile_pengguna",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_lengkap: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("aktif", "tidak-aktif"),
      defaultValue: "tidak-aktif",
    },
    id_kelas: {
      type: DataTypes.INTEGER,
      references: {
        model: kelasModel,
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  { timestamps: true, freezeTableName: true }
);

kelasModel.hasMany(profilePenggunaModel, { foreignKey: "id_kelas" });
profilePenggunaModel.belongsTo(kelasModel, { foreignKey: "id_kelas" });
console.log("profile", profilePenggunaModel.associations);

export default profilePenggunaModel;
