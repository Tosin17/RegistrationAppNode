(function () {

   angular.module('studentsApp').controller('StudentsController', [
       '$scope','$log', 'studentsFactory',function ($scope, $log, studentsFactory) {

        $scope.pageName = 'Students List';
        $scope.students_list = [];
        $scope.sortBy = '';

        studentsFactory.getStudents().then(function (response) {

            $scope.students_list = response.data;
            // $log.log(($scope.students_list));

        }, function (data, status) {
            // $log.error(data +' '+status);
        })


       $scope.doSort = function(sortVal) {

            $log.log(sortVal);
            $scope.sortBy = sortVal;

       }


   }])

})()