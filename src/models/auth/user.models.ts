import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
 {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  display_name: { type: String, required: false },
  profile: { type: String, required: false },
 },
 {
  timestamps: true,
 }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
