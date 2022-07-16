const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const orderSchema = new Schema({
    name: String,
    email: String,
    phone:String,
    adress:String,
    amount:Number,
   });
   
  
  const Mac = mongoose.model("Mac", macSchema);
  module.exports = Mac;