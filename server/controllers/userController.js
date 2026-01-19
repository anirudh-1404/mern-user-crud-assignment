import { User } from "../models/userSchema.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({
        message: "All feilds are required!",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(403).json({
        message: "User already exists!",
      });
    }

    const user = await User.create({
      name,
      email,
      age,
    });

    return res.status(201).json({
      message: "User created successfully!",
      data: { id: user._id, name: user.name, email: user.email, age: user.age },
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Unable to create user!",
    });
  }
};

export const fetchAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      return res.status(404).json({
        message: "No user found!",
      });
    }

    return res.status(200).json({
      message: "All users fetched!",
      data: allUsers,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Unable to fetch users!",
    });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      message: "User updated successfully!",
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Unable to update the user!",
    });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    return res.status(200).json({
      message: "User deleted successfully!",
      data: deletedUser,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message || "Unable to delete user!s",
    });
  }
};
