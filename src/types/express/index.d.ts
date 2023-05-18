import { HydratedDocument } from "mongoose";
import UserModel from "../../models/auth/user.models";

export {};

declare global {
 namespace Express {
  export interface Request {
   user?: HydratedDocument<typeof UserModel> | null;
  }
 }
}
