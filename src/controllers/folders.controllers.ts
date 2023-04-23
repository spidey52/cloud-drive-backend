import { Request, Response } from "express";

export const getFolders = async (req: Request, res: Response) => {
 res.send("getFolders");
};

export const createFolder = async (req: Request, res: Response) => {
 res.send("createFolder");
};

export const deleteFolder = async (req: Request, res: Response) => {
 res.send("deleteFolder");
};

export const getFolder = async (req: Request, res: Response) => {
 res.send("getFolder");
};

export const updateFolder = async (req: Request, res: Response) => {
 res.send("updateFolder");
};
