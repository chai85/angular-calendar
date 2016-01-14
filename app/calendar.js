angular.module('CalendarApp', [])
    .directive('calendar', function () {
        return {
            restrict: 'E',
            template: "<span class='glyphicon glyphicon-calendar calendar-size'></span>"
        }
    });
