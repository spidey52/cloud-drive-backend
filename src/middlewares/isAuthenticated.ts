import { Request, Response, NextFunction } from "express";

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
 try {
  const token = req.headers.authorization?.split(" ")[1]?.trim();
  if (!token) return res.status(401).send({ message: "token not found" });

  const user = await verifyToken(token);
  if (!user) return res.status(401).send({ message: "Unauthorized" });

  // req.user = user;
  next();
 } catch (error) {
  return res.status(401).send({ message: "Unauthorized" });
 }
};

async function verifyToken(token: string) {
 //  throw new Error("Function not implemented.");
 console.log(token);
 return true;
}

export default isAuthenticated;
