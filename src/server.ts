import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

dbconn();

import fileRouter from "./routes/files.routes";
import { getMyDashboard } from "./controllers/dashboard.controller";
import dbconn from "./connections/db.conn";
import folderRouter from "./routes/folder.routes";

app.use("/files", fileRouter);
app.use("/folders", folderRouter);

app.get("/dashboard", getMyDashboard);

app.listen(3000, () => {
 console.log("Server started on port 3000");
});
