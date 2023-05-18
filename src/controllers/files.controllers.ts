import { Request, Response } from "express";
import FileModel from "../models/drive/file.models";

type SearchQuery = {
 [key: string]: string | undefined | null | number | boolean | object | object[];
};

export const getFiles = async (req: Request, res: Response) => {
 const folder = req.query.folder;
 const searchQuery: SearchQuery = {};

 if (folder) {
  searchQuery.folder = folder;
 }

 const files = await FileModel.find(searchQuery);
 return res.send(files);
};

export const uploadFiles = async (req: Request, res: Response) => {
 return res.send("uploadFiles");
};

export const deleteFile = async (req: Request, res: Response) => {
 return res.send("deleteFile");
};

export const getFile = async (req: Request, res: Response) => {
 return res.send("getFile");
};

export const updateFile = async (req: Request, res: Response) => {
 return res.send("updateFile");
};

export const downloadFile = async (req: Request, res: Response) => {
 return res.send("downloadFile");
};
