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
	var month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	var months = [];

	for (var i=1; i<=12; i++) {
		var m = {
			id: i,
			name: month_names[i - 1]
		};

		months.push(m);
	}
	return months;
}

function getBirthday(day, month, year) {
	if (day === undefined || month === undefined || year === undefined) return undefined;

	var m = (month.toString().length != 2) ? '0' + month : month;
	var d = (day.toString().length != 2) ? '0' + day : day;
	return year + "-" + m + "-" + d;
}

function countWords(s){
    var matches = s.match(/\S+/g) ;
	return matches?matches.length:0;
}

/*** Directives ***/

/**
 * kvmDisable directive
 */
angular.module('kvmApply.directives').directive('kvmDisable', [function(){
	return {
		scope: false,
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			$scope.$watch(iAttrs.kvmDisable, function(value) {
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

/**
 * kvmError directive
 */
angular.module('kvmApply.directives').directive('kvmError', function($compile){
	return {
		scope: false,
		restrict: 'A',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.$watch(iAttrs.kvmError, function(err) {
				var error_text = (err && err.length > 0) ? err[0] : "No error here!";
				var star = '<span class="error-star" tooltip="' +  error_text + '">*</span>';
				var starPos = iElm[0].innerHTML.search(star.substr(0, 19)); // <span class="error-s

				var inputs = ['INPUT', 'SELECT', 'TEXTAREA'];

                if (err) {
                	// there was an error
                	if (inputs.indexOf(iElm[0].tagName) > -1) {
	                    iElm.animate({
	                    	backgroundColor:"#FFF7F7",
	                    	borderColor: "#FF0000"
	                    });
					} else {
						// it's a label, so add a star

						// remove it first, so error_text can be reloaded
						if (starPos !== -1) iElm[0].innerHTML = iElm[0].innerHTML.substr(0, starPos);
						iElm[0].innerHTML += star;

						// compile for the tooltip
						$compile(iElm.contents())($scope);
					}

                } else {
                	// there was no error
                	if (inputs.indexOf(iElm[0].tagName) > -1) {
	                	iElm.animate({
	                		backgroundColor: "#FFF",
	                		borderColor: "#CCC"
	                	});
					} else {
						if (starPos > -1) {
							iElm[0].innerHTML = iElm[0].innerHTML.substr(0, starPos);
						}
					}
                }
            });
		}
	};
});

/**
 * kvmWordCount directive
 */
angular.module('kvmApply.directives').directive('kvmWordCount', function($compile) {
	return {
		scope: true,
		require: 'ngModel',
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			var tpl = "<div style='text-align: right;'>Words left: {{wordsRemaining}}</div>";
			var div = iElm.after(tpl).next();
			$compile(div)($scope);

			// iElm[0].maxLength = 2;

			$scope.$watch(iAttrs.ngModel, function(newVal) {
				var wordCount = (iElm[0].value === '') ? 0 : countWords(iElm[0].value);

				var maxWords = iAttrs.kvmWordCount;
				var wordsRemaining = maxWords - wordCount;

				if (wordsRemaining < 0) {
					iElm[0].maxLength = 0;
					$scope.wordsRemaining = 0;
				} else {
					$scope.wordsRemaining = wordsRemaining;
					iElm[0].maxLength = iElm[0].textLength + 100;
				}
			});
		}
	};
});


/*** Controllers ***/

angular.module('kvmApply.controllers').controller('applicationCtrl', function($scope, Restangular, $location) {
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

	// model init
	$scope.apply = {};

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
		var application = $scope.apply;

		/* Birthday format normalization */
		application.birthday = getBirthday(application.birth_day, application.birth_month, application.birth_year);

		/* position interpretation */



		Restangular.all('applications').customPOST(application).then(function(data) {
			// success!
			$location.path("/thanks");
		}, function(data) {
			$scope.error = data.data;
		});
	};
});