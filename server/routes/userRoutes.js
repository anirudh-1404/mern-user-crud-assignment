import express from "express";
import {
  createUser,
  deleteUser,
  fetchAllUsers,
  updateUser,
} from "../controllers/userController.js";

const route = express.Router();

route.post("/create", createUser);
route.get("/", fetchAllUsers);
route.patch("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);

export default route;
