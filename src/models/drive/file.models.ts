import { Schema, model } from "mongoose";

const fileSchema = new Schema(
 {
  name: { type: String, required: true },
  file_type: { type: String, required: true }, // "image", "video", "audio", "document", "archive", "other"
  file_size: { type: Number, required: true },
  folder: { type: String, ref: "Folder", default: null },
  owner: { type: String, required: true, ref: "User" },
 },
 {
  timestamps: true,
 }
);

const FileModel = model("File", fileSchema);

export default FileModel;
