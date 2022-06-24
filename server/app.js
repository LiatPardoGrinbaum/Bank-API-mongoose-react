import express from "express";
import { userRouter } from "./routes/user.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const app = express();

const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);
const publicDirPath = path.join(__dirname, "../client/build");
// console.log(publicDirPath);
app.use(cors());
app.use(express.static(publicDirPath));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});

//for post and put
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
export { app };
