(function () {
    "use strict";

    angular
        .module("app")
        .controller("answerController", answerController);

    answerController.$inject = ["$scope", "answerFactory", "$routeParams", "moment"];


    function answerController($scope, answerFactory, $routeParams, moment) {
        $scope.newAnswer = function (answer, question) {
            if (!answer || !question || answer.answer.length < 5) {
                $scope.error = "Your answer needs to be at least 5 characters long";
            }
            else {
                answerFactory.newAnswer(answer, question);
            }
        };
        answerFactory.allAnswers(function (output) {
            $scope.allAnswers = output;
        });
        $scope.like = function (answerId) {
            answerFactory.like(answerId, function () {
                answerFactory.allAnswers(function (output) {
                    $scope.allAnswers = output;
                });
            });
        };
    }
})();