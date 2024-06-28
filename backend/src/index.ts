import express from "express";
import cors from "cors";
import envUtil from "./util/env.util";
import router from "./routes"
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", router);

app.listen(envUtil.PORT, async () => {
    await mongoose.connect(envUtil.MONGO_URL);
    console.log("Server started, connected to MongoDB!");
});