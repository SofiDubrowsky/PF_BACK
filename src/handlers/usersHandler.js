const { postUser, deleteOneUser } = require("../controllers/usersController");

const createUser = async (req, res) => {
  const { id, name, email, password, phone } = req.body;
  try {
    const response = await postUser({ id, name, email, password, phone });

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteOneUser({ id });

    return res.status(200).json({ message: "Usario eliminado exitosamente"});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  deleteUser,
};
