angular
    .module("app", ["ngRoute", "angularMoment"])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/login.html",
            controller: "userController",
            controllerAs: "uC"
        })
        .when("/dashboard", {
            templateUrl: "partials/dashboard.html",
            controller: "userController",
            controllerAs: "uC"
        })
        .when("/new_question", {
            templateUrl: "partials/n_question.html",
            controller: "userController",
            controllerAs: "uC"
        })
        .when("/show/:_id", {
            templateUrl: "partials/s_question.html",
            controller: "userController",
            controllerAs: "uC"
        })
        .when("/question/:_id/new_answer", {
            templateUrl: "partials/n_answer.html",
            controller: "userController",
            controllerAs: "uC"
        })
        .otherwise({
            redirectTo: "/"
        });
}
