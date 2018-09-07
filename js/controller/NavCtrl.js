/*
(function(app){
    "use strict";
    app.controller("NavCtrl", function($scope, $http){
      
    });
  
})(app);

function NavCtrl($scope) {
    console.log("fonction appelée");
}
*/

app.controller('NavCtrl', ['$scope', function($scope) {
  $scope.menu = 'home';
}]);

//le caca