(function () {
    "use strict";

    angular
        .module("app")
        .factory("answerFactory", answerFactory);

    answerFactory.$inject = ["$http", "$location"];

    function answerFactory($http, $location) {
        var factory = {
            newAnswer: newAnswer,
            allAnswers: allAnswers,
            like: like,
        };
        return factory;
        //////////////
        function newAnswer(answer, question_id) {
            answer._question = question_id;
            $http.post("/answer/new", answer).then(function () {
                $location.url("/dashboard");
            });
        }
        function allAnswers(callback) {
            $http.get("/answer/all").then(function (output) {
                callback(output.data);
            });
        }
        function like(id, callback) {
            $http.post("/answer/like", { id: id }).then(function (output) {
                callback();
            });
        }
    }

})();