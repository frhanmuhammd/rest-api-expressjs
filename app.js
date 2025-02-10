import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import sequelize from "./src/config/database.js";
const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(cookieParser());
app.set("view engine", "ejs");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("berhasil sinkronisasi database");
  })
  .catch((err) => {
    console.log("gagal sinkronisasi database");
  });

import kelasRoutes from "./src/routes/kelas.routes.js";
import profilePenggunaRoutes from "./src/routes/profilePengguna.routes.js";
import { Authentication } from "./src/middleware/authentication.js";

app.use("/api", kelasRoutes);
app.use("/api", profilePenggunaRoutes);

app.listen(3000, (req, res) => {
  console.log("app is listen in ", 3000);
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/kelas", Authentication, (req, res) => {
  res.render("kelas/index.ejs");
});
app.get("/kelas/create", Authentication, (req, res) => {
  res.render("kelas/create.ejs");
});
app.get("/kelas/edit", Authentication, (req, res) => {
  res.render("kelas/edit.ejs");
});
app.get("/profile-pengguna", Authentication, (req, res) => {
  res.render("profile-pengguna/index.ejs");
});
app.get("/profile-pengguna/create", Authentication, (req, res) => {
  res.render("profile-pengguna/create.ejs");
});
app.get("/profile-pengguna/edit", Authentication, (req, res) => {
  res.render("profile-pengguna/edit.ejs");
});
app.get("/login", (req, res) => {
  res.render("auth/login.ejs");
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: false,
    secure: false,
  });

  return res.redirect("/login");
});
