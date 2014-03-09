'use strict';

angular.module('kvmApply.directives').directive('kvmDisable', [function(){
	return {
		scope: {
			disable: '=kvmDisable'
		},
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			$scope.$watch('disable', function(value) {
                if (value) {
                	if (iElm[0].tagName === 'INPUT' || iElm[0].tagName === 'SELECT') {
	                    iElm.animate({backgroundColor:"#E1E1E1"});
						iElm[0].disabled=true;
					} else {
						iElm.animate({color:"#C5C5C5"});
					}
                } else {
                	if (iElm[0].tagName === 'INPUT' || iElm[0].tagName === 'SELECT') {
	                	iElm.animate({backgroundColor:"#fff"});
						iElm[0].disabled=false;
					} else {
						iElm.animate({color:"#55555F"});
					}
                }
            });
		}
	};
}]);

angular.module('kvmApply.controllers').controller('applicationCtrl', function($scope) {
	$scope.incomeOptions = [
		{id: 1, name: "hello"},
		{id: 2, name: "asdf"}
	];

	$scope.submitApplication = function() {
		console.log("submitting");
	};
});