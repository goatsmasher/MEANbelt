(function () {
    "use strict";

    angular
        .module("app")
        .controller("userController", userController);

    userController.$inject = ["$scope", "userFactory", "$routeParams", "moment"];


    function userController($scope, userFactory, $routeParams, moment) {
        var uC = $scope;
        uC.currentUser = {};
        uC.errors = [];
        uC.login = login;
        uC.sessionCheck = sessionCheck;
        uC.thisUser = {};
        uC.allUsers = [];

        sessionCheck();
        allUsers();


        if ($routeParams.user != undefined) {
            uC.thisUser.username = $routeParams.user;
        }

        function allUsers() {
            userFactory.allUsers(function (output) {
                uC.allUsers = output;
            });
        }
        function login() {
            if (!$scope.username || !$scope.username.username || $scope.username.username.length < 3) {
                uC.errors.push("Please enter a valid username");
            }
            else {
                userFactory.login(uC.username);
            }
        }
        function sessionCheck() {
            userFactory.checkSession(function (output) {
                uC.currentUser = output;
            });
        }
    }
})();