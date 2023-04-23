import { Schema, model } from "mongoose";

const SharedFolderSchema = new Schema(
 {
  folder: { type: String, required: true, ref: "Folder" },
  shared_with: { type: String, required: true, ref: "User" },
  shared_by: { type: String, required: true, ref: "User" },
  permissions: { type: String, required: true }, // "read", "write", "delete", "share"
 },
 {
  timestamps: true,
 }
);

const SharedFolderModel = model("SharedFolder", SharedFolderSchema);

export default SharedFolderModel;
