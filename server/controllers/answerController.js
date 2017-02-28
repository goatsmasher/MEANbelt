var mongoose = require("mongoose");
var user = mongoose.model("User");
var question = mongoose.model("Question");
var answer = mongoose.model("Answer");

module.exports = (function () {
    return {
        new: function (req, res) {
            var newAnswer = new answer(req.body);
            newAnswer.author = req.session.user.username;
            newAnswer.save(function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    question.findOne({ _id: req.body._question }, function (err, questionObj) {
                        questionObj._answers.push(newAnswer._id);
                        questionObj.save();
                    });
                    res.json(data);
                }
            });
        },
        all: function (req, res) {
            answer.find({}, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(data);
                }
            });
        },
        like: function (req, res) {
            answer.findOne({ _id: req.body.id }, function (err, data) {
                data.likes += 1;
                data.save(function (err, data) {
                    res.json(data);
                });
            });
        }
    };
})();