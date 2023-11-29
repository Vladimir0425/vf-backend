import {Schema, model} from 'mongoose'

const customerSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    zipcode: {
        type: String,
    },
    password: {
        type: String,
    },
    cart: {
        type: Object,
    },
    address: {
        type: [Object],
    }
});

export default model("Customer", customerSchema);