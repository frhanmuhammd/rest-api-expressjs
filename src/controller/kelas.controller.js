import kelasModel from "../model/kelas.model.js";

export const getAll = async (req, res) => {
  try {
    const result = await kelasModel.findAll();

    return res.status(200).json({ message: "berhasil mendapatkan kelas data", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan kelas data", data: null });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await kelasModel.findByPk(id);

    return res.status(200).json({ message: "berhasil mendapatkan kelas", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan kelas", data: null });
  }
};

export const createData = async (req, res) => {
  const { nama_kelas, semester } = req.body;
  try {
    const result = await kelasModel.create({
      nama_kelas,
      semester,
    });

    return res.status(201).json({ message: "berhasil membuat kelas", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan kelas", data: null });
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const { nama_kelas, semester } = req.body;
  try {
    const findKelas = await kelasModel.findByPk(id);

    if (!findKelas) {
      return res.status(404).json({ message: "gagal mendapatkan kelas", data: null });
    }

    const result = await findKelas.update({
      nama_kelas,
      semester,
    });

    return res.status(200).json({ message: "berhasil update kelas", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan kelas", data: null });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const findKelas = await kelasModel.findByPk(id);

    if (!findKelas) {
      return res.status(404).json({ message: "gagal mendapatkan kelas", data: null });
    }
    const result = findKelas.destroy();

    return res.status(200).json({ message: "berhasil menghapus kelas", data: result });
  } catch (error) {
    return res.status(500).json({ message: "gagal mendapatkan kelas", data: null });
  }
};
