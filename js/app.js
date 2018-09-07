document.addEventListener("deviceready", function(){
    // au demarrage de l'appli
}, false);

var app = angular.module('app', ["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
        .when("/home", {templateUrl: "partials/home.html"})
        .when("/about", {templateUrl: "partials/about.html"})
        .when("/choixMatiere", {templateUrl: "partials/choixMatiere.html"})
        .otherwise({redirectTo: "/home"})
})
