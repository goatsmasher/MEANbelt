var users = require("./../controllers/usersController.js");
var questions = require("./../controllers/questionController.js");
var answers = require("./../controllers/answerController.js");
module.exports = function (app) {


    // ********************************** USERS
    app.post("/login", users.login);
    app.get("/checkSession", users.checkSession);
    app.get("/logout", users.logout);
    app.get("/allUsers", users.allUsers);

    // ********************************** QUESTIONS
    app.post("/question/new", questions.new);
    app.get("/question/all", questions.all);
    // ********************************** ANSWERS
    app.post("/answer/new", answers.new);
    app.post("/answer/like", answers.like);
    app.get("/answer/all", answers.all);
};