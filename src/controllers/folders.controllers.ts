import { Request, Response } from "express";
import FolderModel from "../models/drive/folder.models";
import { handleInternalError } from "../utils/error/handleError";

export const getFolders = async (req: Request, res: Response) => {
 res.send("getFolders");
};

export const createFolder = async (req: Request, res: Response) => {
 const { name, parent } = req.body;

 try {
  // FIXME: check owner too later
  const isExists = await FolderModel.findOne({ name, parent });
  if(isExists) return res.status(400).send({ message: "Folder already exists" });
  const folder = await FolderModel.create({
   name,
   parent,
   owner: req.user?._id || null,
  });
  return res.status(201).send(folder);
 } catch (error) {
  handleInternalError(req, res, error);
 }
};

export const deleteFolder = async (req: Request, res: Response) => {
 res.send("deleteFolder");
};

export const getFolder = async (req: Request, res: Response) => {
 res.send("getFolder");
};

export const updateFolder = async (req: Request, res: Response) => {
 const { name, parent } = req.body;

 try {
  res.send("updateFolder");
 } catch (error) {
  return handleInternalError(req, res, error);
 }
};
