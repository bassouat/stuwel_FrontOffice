
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  login:{type: String , required: true },
  password: { type: String, required: true },
  nicename: { type: String , required : true},
  email: { type: String, required: true, unique: true },
  url:{ type: String, required : true},
  registered: {type: String , required :true},
  activation_key :{ type: String , required : true},
  status:{ type:String , required : true},
  display_name :{ type:String , required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);