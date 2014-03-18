'use strict';

angular.module('kvmApply.controllers').controller('infoCtrl', function($scope) {
	$scope.incomeOptions = [
		{id: 1, name: "hello"},
		{id: 2, name: "asdf"}
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