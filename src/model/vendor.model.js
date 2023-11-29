import {Schema, model} from mongoose

const vendorSchema = new Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
    zipcode: {
        type: String,
    },
    subscription: {
        type: String,
        enum: ["seeding", "sprouting", "budding"],
    },
    business_name: {
        type: String,
    },
    business_owner_name: {
        type: String,
    },
    business_email: {
        type: String,
    },
    business_phone: {
        type: String,
    },
    business_address: {
        type: String,
    },
    business_zipcode: {
        type: String,
    },
    social: {
        type: Object,
    },
    fulfillment_capacity: {
        type: String,
    },
    short_description: {
        type: String,
    },
    long_description: {
        type: String,
    },
    visible_radius: {
        type: String,
    },
    store_tags: {
        type: [String],
    },
    images: {
        type: Object,
    },
    opened: {
        type: Boolean,
        default: false,
    },
    pickup: {
        type: Object,
    },
    delivery: {
        type: Object,
    },
    partner: {
        type: Object,
    },
    shipping_address: {
        type: Object,
    },
    shipping_service: {
        type: [String],
    },
    parcel_size: {
        type: [Object],
    }
});

export default model("Vendor", vendorSchema);