import { Request, Response } from "express";

export const getFiles = async (req: Request, res: Response) => {
 res.send("getFiles");
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
