import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

// https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/ 
// ---> for learning purpose 

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])      
    }
    res.status(200).json({ success: "success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
//   let products = await Product.find();
//   res.status(200).json({ products });
};

export default connectDb(handler);
