import express from "express";

const router = express.Router();

import { getAll, getOne, createData, updateData, deleteData, Login } from "../controller/profilePengguna.controller.js";
import { Authentication } from "../middleware/authentication.js";

router.post("/auth/login", Login);
router.get("/profile-pengguna", getAll);
router.get("/profile-pengguna/:id", getOne);
router.post("/profile-pengguna", createData);
router.put("/profile-pengguna/:id", updateData);
router.delete("/profile-pengguna/:id", deleteData);

export default router;
