var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{
        type:String
    },
    pwd:{
        type:String
    },
    phone:{
        type:Number
    },
    date:{
      type:Date,
      default:Date.now()
    },
    enable_flag:{
      type:String,
      default:'Y'
    }
});

var  user= mongoose.model("users", userSchema);

module.exports = user;
