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

angular.module('kvmApply.controllers').controller('applicationCtrl', function($scope, Restangular) {
	$scope.positions = [
		{id: 'E', name: 'Employed'},
		{id: 'U', name: 'Unemployed'},
		{id: 'S', name: 'Student'},
	];

	$scope.mediums = [ {id: 'E', name: 'English'}, {id: 'T', name: 'Telugu'} ];

	$scope.divisions = [
		{id: 'D1', name: '1st'},
		{id: 'D2', name: '2nd'},
		{id: 'D3', name: '3rd'},
		{id: 'D4', name: '4th'},
	];

	$scope.schoolYears = [
		{id: 'Y1', name: '1st Year'},
		{id: 'Y2', name: '2nd Year'},
		{id: 'Y3', name: '3rd Year'},
		{id: 'Y4', name: '4th Year'},
		{id: 'Y5', name: '5th Year'},
	];

	var d = new Date();
	$scope.years = getYears(1950, d.getFullYear() - 14);
	$scope.days = getDays();
	$scope.months = getMonths();
	$scope.genders = ['M', 'F'];
	$scope.passingYears = getYears(1950, d.getFullYear())

	Restangular.all('degree-subjects').getList().then(function(data) {
		$scope.degreeSubjects = data;
	});

	Restangular.all('postgraduate-subjects').getList().then(function(data) {
		$scope.postSubjects = data;
	});

	Restangular.all('incomes').getList().then(function(data) {
		$scope.incomeOptions = data;
	});

	$scope.submitApplication = function() {
		console.log("submitting");

		var application = $scope.apply;

		Restangular.all('applications').customPOST(application).then(function(data) {

		});
	};
});

angular.module('kvmApply.controllers').controller('infoCtrl', function($scope) {
	
});