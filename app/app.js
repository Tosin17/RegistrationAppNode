(function () {

    var app = angular.module('studentsApp', ['ngRoute']);


    app.config(function ($routeProvider) {
        $routeProvider.when('/', {

            controller: 'SubmitController',
            templateUrl: 'app/views/home.html'

        }).when('/students-list', {

            controller: 'StudentsController',
            templateUrl: 'app/views/students-list.html'

        }).when('/students-list/:studentId', {

            controller: 'StudentController',
            templateUrl: 'app/views/student.html'

        })
        .otherwise({redirectTo: '/'})
    })


})()
