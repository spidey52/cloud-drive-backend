import { getFile } from "../controllers/files.controllers";
import { deleteFile, downloadFile, getFiles, updateFile, uploadFiles } from "./../controllers/files.controllers";
import { Router } from "express";

const fileRouter = Router();

fileRouter.get("/", getFiles);
fileRouter.post("/", uploadFiles);
fileRouter.delete("/:id", deleteFile);
fileRouter.get("/:id", getFile);
fileRouter.put("/:id", updateFile);
fileRouter.get("/:id/download", downloadFile);

export default fileRouter;
