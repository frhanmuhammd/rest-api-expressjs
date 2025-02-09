import { Sequelize } from "sequelize";

const sequelize = new Sequelize("relasi-database", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
