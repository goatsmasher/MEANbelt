var mongoose = require("mongoose");
var user = mongoose.model("User");

module.exports = (function () {
    return {
        login: function (req, res) {
            user.findOne({ username: req.body.username }, function (err, data) {
                if (data == null) {
                    var newuser = new user({
                        username: req.body.username
                    });
                    newuser.save(function (err, data) {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            req.session.user = data;
                            req.session.save();
                            res.json(data);
                        }
                    });
                }
                else {
                    req.session.user = data;
                    req.session.save();
                    res.json(data);
                }
            });
        },
        checkSession: function (req, res) {
            if (req.session.user) {
                res.json(req.session.user);
            }
            else {
                res.json(null);
            }
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect("/");
        },
        allUsers: function (req, res) {
            user.find({}, function (err, data) {
                res.json(data);
            });
        },
    };
})();