import { Request, Response } from "express";

export const handleInternalError = (req: Request, res: Response, error: any) => {
 return res.status(500).json({ message: error.message });
};
