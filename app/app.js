angular.module('CollabApp', [])
    .controller("ContactsController", ["$scope", "$window", function ($scope, $window) {
        function resize() {
            // to adjust height of widgets
            var height = window.innerHeight - 50 - 250;
            // main div height
            $(".collab").height(window.innerHeight - 100);
            // contacts list-group height
            $(".contacts .list-group").height(height / 2);
            // events panel-body height
            $(".events .panel-body").height(height / 2);
        }
        resize();
        $(window).on("resize", resize);

        $('.flifoTabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }]);
