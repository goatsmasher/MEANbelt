var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    question: { type: String, required: true, minlength: 9 },
    description: { type: String },
    _answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]


}, { timestamps: true });

mongoose.model("Question", QuestionSchema);