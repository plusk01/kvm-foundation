'use strict';

/*** Helper Functions ***/
function getYears(minYear, maxYear) {
	var years = [];
	for (var i=maxYear; i>=minYear; i--) years.push(i);
	return years;
}

function getDays() {
	var days = [];
	for (var i=1; i<=31; i++) days.push(i);
	return days;
}

function getMonths() {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	return months;
}

/*** Directives ***/

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

/*** Controllers ***/

angular.module('kvmApply.controllers').controller('applicationCtrl', function($scope) {
	$scope.incomeOptions = [
		{id: 1, name: "0 - 10,000 Rupees"},
		{id: 2, name: "10,000 - 20,000 Rupees"}
	];

	var d = new Date();
	$scope.years = getYears(1950, d.getFullYear() - 14);
	$scope.days = getDays();
	$scope.months = getMonths();
	$scope.genders = ['M', 'F'];

	$scope.submitApplication = function() {
		console.log("submitting");
	};
});

angular.module('kvmApply.controllers').controller('infoCtrl', function($scope) {
	
});