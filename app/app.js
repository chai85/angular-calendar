angular.module('CalendarApp', [])
    .directive('calendar', function () {
        return {
            restrict: 'E',
            templateUrl: 'calendar.html'
        }
    });
