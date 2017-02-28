(function () {
    "use strict";

    angular
        .module("app")
        .controller("questionController", questionController);

    questionController.$inject = ["$scope", "questionFactory", "$routeParams", "moment"];


    function questionController($scope, questionFactory, $routeParams, moment) {
        if ($routeParams._id != undefined) {
            $scope.thisQuestion = $routeParams._id;
        }
        $scope.newQuestion = function () {
            if (!$scope.question || !$scope.question || $scope.question.question.length < 10) {
                $scope.error = "Your question must be at least 10 characters long";
            }
            else {
                questionFactory.newQuestion($scope.question);
            }
        };
        questionFactory.allQuestions(function (output) {
            $scope.allQuestions = output;
        });

    }
})();