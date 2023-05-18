import { Router } from "express";
import { createFolder, deleteFolder, getFolder, getFolders, updateFolder } from "../controllers/folders.controllers";
import CheckRequiredBody from "../utils/requests/CheckRequiredBody";

const folderRouter = Router();

folderRouter.get("/", getFolders);
folderRouter.post("/", CheckRequiredBody(["name", "parent"]), createFolder);
folderRouter.delete("/:id", deleteFolder);
folderRouter.get("/:id", getFolder);
folderRouter.patch("/:id", updateFolder);

export default folderRouter;
