import express from "express";

const router = express.Router();

import { getAll, getOne, createData, updateData, deleteData, Login } from "../controller/profilePengguna.controller.js";
import { Authentication } from "../middleware/authentication.js";

router.post("/auth/login", Login);
router.get("/profile-pengguna", Authentication, getAll);
router.get("/profile-pengguna/:id", Authentication, getOne);
router.post("/profile-pengguna", Authentication, createData);
router.put("/profile-pengguna/:id", Authentication, updateData);
router.delete("/profile-pengguna/:id", Authentication, deleteData);

export default router;
