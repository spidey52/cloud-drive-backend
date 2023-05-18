import { Schema, model } from "mongoose";

const FolderSchema = new Schema(
 {
  name: { type: String, required: true },
  parent: { type: String, required: false, ref: "Folder", default: null },
  owner: { type: String, ref: "User", default: null },
 },
 {
  timestamps: true,
 }
);

const FolderModel = model("Folder", FolderSchema);

export default FolderModel;
