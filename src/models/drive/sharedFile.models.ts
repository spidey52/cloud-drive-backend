import { Schema, model } from "mongoose";

const SharedFileSchema = new Schema(
 {
  file: { type: String, required: true, ref: "File" },
  short_id: { type: String, required: true },
  shared_with: { type: String, required: true, ref: "User" },
  shared_by: { type: String, required: true, ref: "User" },
  permissions: { type: String, required: true, enum: ["read", "write", "delete", "share"], default: "read" },
  /*
		"read" - can view the file
		"write" -  can read and edit the file
		"delete" - can read, edit and delete the file
		"share" -  can read, edit, delete and share the file
	*/
 },
 {
  timestamps: true,
 }
);

const SharedFileModel = model("SharedFile", SharedFileSchema);

export default SharedFileModel;
