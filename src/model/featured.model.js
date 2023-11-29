import {Schema, model} from "mongoose"

const featuredSchema = new Schema({
    title: {
        type: String,
    },
    product_name: {
        type: String,
    },
    price: {
        type: String,
    },
    tags: {
        type: [String],
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    }
})

export default model("featured", featuredSchema);