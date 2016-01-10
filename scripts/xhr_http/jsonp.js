/**
 * Created by Ryso on 2016/1/11.
 */
'use strict';
var app = angular.module('xhrHttp',[]);
app.controller('getData',function($scope,$http){
    // 跨域请求时，需要给URL指定callback和函数名，函数名为JSON_CALLBACK时，会调用success回调函数，JSON_CALLBACK必须全为大写。
    var url = 'http://weixin.wawaqinqin.com/api/DisL1.aspx?p=1&total=20&callback=JSON_CALLBACK';
    $http.jsonp(url).success(function(data){
        $scope.data = data;
        $scope.items = $scope.data.item;
        console.log($scope.data);
    });
});