import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import dbConnect from "./db/dbConnect.js";
import postRouter from "./routes/posts.js";
dotenv.config();

const app = express();

//middlewawres
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
dbConnect();

app.get("/", (req, res) => res.send("Server working"));
app.use("/posts", postRouter);
app.listen(process.env.PORT || 4000, () =>
  console.log("Server is running on port: " + PORT)
);
