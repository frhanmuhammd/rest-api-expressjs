import express from "express";

const router = express.Router();

import { getAll, getOne, createData, updateData, deleteData } from "../controller/kelas.controller.js";

router.get("/kelas", getAll);
router.get("/kelas/:id", getOne);
router.post("/kelas", createData);
router.put("/kelas/:id", updateData);
router.delete("/kelas/:id", deleteData);

export default router;
