var app = angular.module('mouse', [])
app.controller('mouseposition', function($scope){
    $scope.doClick = function (event) {

        var x = event.x;
        var y = event.y;
        $scope.offsetX = event.originalEvent.layerX;
        $scope.offsetY = event.originalEvent.layerY;
    };
});