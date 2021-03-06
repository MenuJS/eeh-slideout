(function (angular) {
    'use strict';
    var SlideoutDirective = function ($timeout) {
        return {
            restrict: 'AE',
            scope: {
                isOpen: "=?",
                panelSelector: "=",
                menuSelector: "=",
                padding: "=?",
                tolerance: "=?"
            },
            link: function (scope, element) {
                if (angular.isUndefined(scope.isOpen)) {
                    scope.isOpen = false;
                }
                if (angular.isUndefined(scope.padding)) {
                    scope.padding = 256;
                }
                if (angular.isUndefined(scope.tolerance)) {
                    scope.tolerance = 70;
                }
                $timeout(function () {
                    var slideout = new Slideout({
                        'panel': element.find(scope.panelSelector)[0],
                        'menu': element.find(scope.menuSelector)[0],
                        'padding': scope.padding,
                        'tolerance': scope.tolerance
                    });
                    scope.$watch('isOpen', function (isOpen) {
                        if (isOpen) {
                            slideout.open();
                        } else {
                            slideout.close();
                        }
                    });
                });
            }
        };
    };
    angular.module('eehSlideout', []).directive('eehSlideout', ['$timeout', SlideoutDirective]);
})(angular);
