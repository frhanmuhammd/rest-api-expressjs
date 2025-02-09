import profilePenggunaModel from "../model/profilePengguna.model.js";
import kelasModel from "../model/kelas.model.js";
import { Op } from "sequelize";
import { getToken } from "../middleware/jwt.js";

export const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await profilePenggunaModel.findOne({ where: { [Op.and]: { username, password } } });

    if (!result) {
      return res.status(404).json({ message: "username or password is invalid", data: null });
    }

    const token = getToken({
      username: result.username,
    });

    res.cookie("token", token, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false,
    });

    return res.status(201).json({ message: "berhasil login", data: token });
  } catch (error) {
    return res.status(500).json({ message: "gagal login", data: null });
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await profilePenggunaModel.findAll({ include: kelasModel });

    return res.status(200).json({ message: "berhasil mendapatkan profile pengguna", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan profile pengguna", data: null });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await profilePenggunaModel.findByPk(id, { include: kelasModel });

    return res.status(200).json({ message: "berhasil mendapatkan profile pengguna", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan profile pengguna", data: null });
  }
};

export const createData = async (req, res) => {
  const { nama_lengkap, username, password, tanggal_lahir, status, id_kelas } = req.body;
  try {
    const result = await profilePenggunaModel.create({
      nama_lengkap,
      username,
      password,
      tanggal_lahir,
      status,
      id_kelas,
    });

    return res.status(201).json({ message: "berhasil membuat profile pengguna", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan profile pengguna", data: null });
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const { nama_lengkap, username, password, tanggal_lahir, status, id_kelas } = req.body;
  try {
    const findprofilePengguna = await profilePenggunaModel.findByPk(id, { include: kelasModel });

    if (!findprofilePengguna) {
      return res.status(404).json({ message: "gagal mendapatkan profile pengguna ", data: null });
    }

    const result = await findprofilePengguna.update({
      nama_lengkap,
      username,
      password,
      tanggal_lahir,
      status,
      id_kelas,
    });

    return res.status(200).json({ message: "berhasil update profile pengguna", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan profile pengguna", data: null });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const findprofilePengguna = await profilePenggunaModel.findByPk(id);

    if (!findprofilePengguna) {
      return res.status(404).json({ message: "gagal mendapatkan profile pengguna", data: null });
    }
    const result = findprofilePengguna.destroy();

    return res.status(200).json({ message: "berhasil menghapus profile pengguna", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan profile pengguna", data: null });
  }
};
