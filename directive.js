'use strict';

/* Directives */


angular.module('chun-lightbox', ['ngSanitize']).
  directive('chunlightbox', ['$location', '$rootScope', '$http', function($location, $rootScope, $http) {
    return {
    	restrict: 'E',
    	scope: {
            chunBoxId: '@',
            chunText: '@',
            chunTimeout: '@',
            chunCloseOnClick: '@',
            chunLoadData: '@'
        },
    	transclude: true,
        replace: true,
    	templateUrl: 'partials/chunlightbox.html',
    	link: function(scope, element, attrs, controller, transclude) {

            scope.showBox = false;

            if (scope.chunLoadData) {
                $http({ method: 'GET', url: scope.chunLoadData })
                .success(function (data, status, headers, config) {
                    scope.remoteData = data;
                })
                .error(function (data, status, headers, config) {
                    scope.error = 'An error are occurred in remote data fetching.';
                });
            }

            element.on('click', function (e) {
                var target = angular.element(e.target);

                if (!target.attr('class')) return;

                if (target.attr('class').match('chun-show-hide') && scope.chunCloseOnClick)
                    scope.$apply(function() {
                        scope.close();
                    });
            });

            scope.$on('EVT_OPENING', function(event, data) {
                scope.showBox = (data.id == scope.chunBoxId);
            });

            scope.open = function() {
                scope.showBox = true;
                $rootScope.$broadcast('EVT_OPENING', {
                    id: scope.chunBoxId
                });

                if (scope.chunTimeout) {
                    setTimeout(function() {
                        scope.$apply(function() {
                            scope.close();
                        });
                    }, scope.chunTimeout);
                }
            }

            scope.getActive = function() {
                return scope.showBox;
            }

            scope.close = function() {
                scope.showBox = false;
            }
    	},
    };
  }]);