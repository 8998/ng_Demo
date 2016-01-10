/**
 * Created by Ryso on 2016/1/9.
 */
'use strict';
var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});