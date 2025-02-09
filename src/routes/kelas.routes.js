import express from "express";

const router = express.Router();

import { getAll, getOne, createData, updateData, deleteData } from "../controller/kelas.controller.js";
import { Authentication } from "../middleware/authentication.js";

router.get("/kelas", Authentication, getAll);
router.get("/kelas/:id", Authentication, getOne);
router.post("/kelas", Authentication, createData);
router.put("/kelas/:id", Authentication, updateData);
router.delete("/kelas/:id", Authentication, deleteData);

export default router;
