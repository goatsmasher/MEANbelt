(function () {
    "use strict";

    angular
        .module("app")
        .factory("questionFactory", questionFactory);

    questionFactory.$inject = ["$http", "$location"];

    function questionFactory($http, $location) {
        var factory = {
            newQuestion: newQuestion,
            allQuestions: allQuestions,
        };
        return factory;
        //////////////
        function newQuestion(question) {
            $http.post("/question/new", question).then(function () {
                $location.url("/dashboard");
            });
        }
        function allQuestions(callback) {
            $http.get("/question/all").then(function (output) {
                callback(output.data);
            });
        }
    }

})();