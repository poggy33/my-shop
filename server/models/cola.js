const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const colaSchema = new Schema({
    id: String,
    title: String,
    price:Number,
    img:String,
    amount:Number,
   });
   
  
  const Cola = mongoose.model("Cola", colaSchema);
  module.exports = Cola;