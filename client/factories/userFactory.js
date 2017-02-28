(function () {
    "use strict";

    angular
        .module("app")
        .factory("userFactory", userFactory);

    userFactory.$inject = ["$http", "$location"];

    function userFactory($http, $location) {
        var factory = {
            allUsers: allUsers,
            checkSession: checkSession,
            login: login,
        };
        return factory;
        //////////////

        function allUsers(callback) {
            $http.get("/allUsers").then(function (output) {
                callback(output.data);
            });
        }
        function checkSession(callback) {
            $http.get("/checkSession").then(function (output) {
                if (output.data === null) {
                    $location.url("/");
                }
                else {
                    callback(output.data);
                }
            });
        }
        function login(user) {
            $http.post("/login", user).then(function (output) {
                if (output.data.length == 0) {
                    alert("There was a problem logging in");
                }
                else {
                    $location.url("/dashboard");
                }
            });
        }
    }

})();