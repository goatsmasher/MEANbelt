const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const AnswerSchema = new Schema({
	nswer: { type: String, required: true, minlength: 5 },
	details: { type: String, required: false },
	likes: { type: Number, default: 0 },
	author: { type: String, required: true },
	_question: { type: Schema.Types.ObjectId, ref: "Question" },


}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);