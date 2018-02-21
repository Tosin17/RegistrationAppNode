(function () {

    angular.module('studentsApp').controller('StudentController', ['$scope','$routeParams', '$log','studentsFactory', function ($scope, $routeParams,$log, studentsFactory) {

        var studentId = $routeParams.studentId;

        studentsFactory.getStudent(studentId).then(function (response) {

            $scope.student = response.data;

            $scope.pageName = $scope.student.first_name;
            $log.log((studentId), $scope.student);

        }, function (data, status) {
            $log.error(data +' '+status);
        })


    }])

})()