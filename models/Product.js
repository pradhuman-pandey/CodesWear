
const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String, required: true},
    color: {type: String},
    price: {type: String, required: true},
    availability: {type: String, required: true},
    products: [{
            productId: {type: String},
            quatity: {type: Number, default: 1},

        }],
    address:{type: String, require: true},
    amount: {type: Number, required: true},
    status: {type: String, default: 'Pending', required: true},

}, {timestamp: true});

mongoose.models = {}
// export default mongoose.model("Product",ProductSchema);
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);