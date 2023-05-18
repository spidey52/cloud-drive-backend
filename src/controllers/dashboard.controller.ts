import FileModel from "../models/drive/file.models";
import FolderModel from "../models/drive/folder.models";
import { handleInternalError } from "../utils/error/handleError";
import { Request, Response } from "express";

export const getMyDashboard = async (req: Request, res: Response) => {
 try {
  const { userId } = req.body;

  const files = await FileModel.find({ userId, parent: null });
  const folders = await FolderModel.find({ userId, parent: null });

  return res.status(200).json({ files, folders });
 } catch (error) {
  return handleInternalError(req, res, error);
 }
};

