(function () {
    'use strict';
    angular
        .module('app')
        .component('box', {
            templateUrl: "./src/box.tpl.html",
            controller: boxController,
            bindings: {
                header: '@',
                content: '<'
            }
        });

    boxController.$inject = ['$mdDialog','$element'];
    function boxController($mdDialog,$element) {
        var ctrl = this;
        ctrl.$onChanges = (changes) => {
            ctrl.content = changes.content.currentValue;
            ctrl.header = changes.header.currentValue;
        }
        ctrl.showDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: '$ctrl',
                templateUrl: './src/modal.tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: false,
                locals: {
                    header: ctrl.header,
                    content: ctrl.content
                }
            })
        };

        function DialogController($mdDialog, header, content) {
            var ctrl = this;
            ctrl.closeDialog = () => {
                $mdDialog.hide();
            }
            ctrl.header = header;
            ctrl.content = content;
        }

    }
}());