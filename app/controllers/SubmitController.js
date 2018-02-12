(function () {


    angular.module('studentsApp').controller('SubmitController', ['$scope',function ($scope) {

        $scope.pageName = "Register";


        $scope.student = {};

        $scope.onSubmit = function () {
            console.log($scope.student);
        }

    }])


})()