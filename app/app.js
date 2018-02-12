(function () {

    var app = angular.module('studentsApp', ['ngRoute']);


    app.config(function ($routeProvider) {
        $routeProvider.when('/test',{

            controller: 'SubmitController',
            templateUrl: 'app/views/home.html'

        }).when('/',{

            controller: 'StudentsController',
            templateUrl: 'app/views/students-list.html'

        })
        .otherwise({redirectTo: '/'})
    })


})()
