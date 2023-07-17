// const mongoose = require('mongoose');
// const UserSchema = new mongoose.Schema({
//     username: {type: String, required: true},
//     slug: {type: String, required: true, unique: true},
//     desc: {type: String, required: true},
//     img: {type: String, required: true},
//     category: {type: String, required: true},
//     size: {type: String, required: true},
//     price: {type: String, required: true},
//     availability: {type: String, required: true},
//     products: [{
//             productId: {type: String},
//             quatity: {type: Number, default: 1},

//         }],
//     address:{type: String, require: true},
//     amount: {type: Number, required: true},
//     status: {type: String, default: 'Pending', required: true},

// }, {timestamp: true});

// export default mongoose.model("Users",UserSchema);




const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}

}, {timestamp: true});
// mongoose.model = {}
// module.exports = mongoose.model('Loginuser', Loginschema);
// export default mongoose.model("User",UserSchema);
module.exports = (mongoose.models.User || mongoose.model("Users", UserSchema));