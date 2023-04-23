import { Router } from "express";
import { createFolder, deleteFolder, getFolder, getFolders, updateFolder } from "../controllers/folders.controllers";

const folderRouter = Router();

folderRouter.get("/", getFolders);
folderRouter.post("/", createFolder);
folderRouter.delete("/:id", deleteFolder);
folderRouter.get("/:id", getFolder);
folderRouter.put("/:id", updateFolder);

export default folderRouter;
