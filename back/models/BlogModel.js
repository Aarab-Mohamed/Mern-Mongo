import mongoose from "mongoose";
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
    imagen: { type: String },
  },
  { collection: "blogs" }
);

export default mongoose.model("BlogModel", blogSchema);
