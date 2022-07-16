const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const macSchema = new Schema({
    id: String,
    title: String,
    price:Number,
    img:String,
    amount:Number,
   });
   
  
  const Mac = mongoose.model("Mac", macSchema);
  module.exports = Mac;