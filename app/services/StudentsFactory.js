(function () {

    angular.module('studentsApp').factory('studentsFactory',['$http', function ($http) {

        var factory = {};
        
        factory.getStudents = function () {
            return $http.get('/students');
        }

        factory.getStudent = function (studentId) {
            return $http.get('/students/'+ studentId)
        }
        
        return factory;

    }])

})()