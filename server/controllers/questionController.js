var mongoose = require("mongoose");
var user = mongoose.model("User");
var question = mongoose.model("Question");

module.exports = (function () {
    return {
        new: function (req, res) {
            var newQuestion = new question(req.body);
            newQuestion.save(function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(data);
                }
            });
        },
        all: function (req, res) {
            question.find({}).populate("_answers").exec(function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(data);
                }
            });
        }
    };
})();