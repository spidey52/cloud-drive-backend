import { NextFunction, Request, Response } from "express";

const CheckRequiredBody = (requiredBody: string[]) => (req: Request, res: Response, next: NextFunction) => {
 //  const missingBody = requiredBody.filter((body) => (req.body[body] === undefined));

 const missingBody = requiredBody.filter((body) => {
  if (req.body[body] === undefined) {
    console.log(body);
   return true;
  }
  return false;
 });
 //  console.log(req.body['name'] === undefined)


 if (missingBody.length > 0) {
  return res.status(400).json({
   message: `Missing body: ${missingBody.join(", ")}`,
  });
 }

 next();
};

export default CheckRequiredBody;
