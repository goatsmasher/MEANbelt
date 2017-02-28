var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answer: { type: String, required: true, minlength: 5 },
    details: { type: String, required: false },
    likes: { type: Number, default: 0 },
    author: { type: String, required: true },
    _question: { type: Schema.Types.ObjectId, ref: "Question" },


}, { timestamps: true });

mongoose.model("Answer", AnswerSchema);