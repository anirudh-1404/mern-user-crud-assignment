import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectdb } from "./utils/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use("/api", userRoutes);

connectdb();
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
