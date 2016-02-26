angular.module('CollabApp', ['irontec.simpleChat'])
    .controller("ContactsController", ["$scope", "$window", ContactsController])
    .controller("ShellController", ShellController);

function ContactsController($scope, $window) {
    function resize() {
        // to adjust height of widgets
        var height = window.innerHeight - 50 - 250;
        if (height > 600) {
            // main div height
            $(".collab").height(window.innerHeight - 100);
            // contacts list-group height
            $(".contacts .list-group").height(height / 2);
            // events panel-body height
            $(".events .panel-body").height(height / 2);
        }
    }
    resize();
    $(window).on("resize", resize);

    $('.flifoTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
}

function ShellController() {
    var vm = this;
    vm.messages = [
        {
            'username': 'username1',
            'content': 'Hi!'
        }, {
            'username': 'username2',
            'content': 'Hello!'
        }, {
            'username': 'username2',
            'content': 'Hello!'
        }, {
            'username': 'username2',
            'content': 'Hello!'
        }, {
            'username': 'username2',
            'content': 'Hello!'
        }, {
            'username': 'username2',
            'content': 'Hello!'
        }
    ];

    vm.username = 'username1';

    vm.sendMessage = function (message, username) {
        if (message && message !== '' && username) {
            vm.messages.push({
                'username': username,
                'content': message
            });
        }
    };
    vm.visible = true;
    vm.expandOnNew = true;
    vm.title = "Weight Restriction-UA3443";
};
