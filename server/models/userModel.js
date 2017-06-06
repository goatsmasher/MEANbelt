const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: { type: String, required: true, minlength: 3 },


}, { timestamps: true });

mongoose.model("User", UserSchema);