const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const pepsiSchema = new Schema({
    id: String,
    title: String,
    price:Number,
    img:String,
    amount:Number,
   });
   
  
  const Pepsi = mongoose.model("Pepsi", pepsiSchema);
  module.exports = Pepsi;