const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

const QuestionSchema = new Schema({
	question: { type: String, required: true, minlength: 9 },
	description: { type: String },
	_answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]


}, { timestamps: true });

mongoose.model("Question", QuestionSchema);