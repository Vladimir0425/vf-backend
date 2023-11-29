import { Schema, model } from "mongoose";
const imagrySchema = new Schema({
  hero_image: {
    type: String,
  },
});

export default model("imagry", imagrySchema);
