import { Request, Response, NextFunction } from "express";

const CheckRequiredParams = (requiredParams: string[]) => (req: Request, res: Response, next: NextFunction) => {
 const missingParams = requiredParams.filter((param) => req.params[param] === undefined);

 if (missingParams.length > 0) {
  return res.status(400).json({
   message: `Missing params: ${missingParams.join(", ")}`,
  });
 }

 next();
};

export default CheckRequiredParams;
