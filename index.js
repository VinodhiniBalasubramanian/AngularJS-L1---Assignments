
	var app = angular.module('main', ['ngRoute']);

	
	app.config(function ($routeProvider) {
	    $routeProvider

	        .when('/', {
	            templateUrl: 'home.html',
	            controller: 'mainController'
	        })

	       
	        .when('/allcds', {
	            templateUrl: 'allcds.html',
	            controller: 'allController'
	        })

	       
	        .when('/newcds', {
	            templateUrl: 'newcds.html',
	            controller: 'newController'
	        });
	});

	
	app.controller('mainController', function ($scope) {
	   
	    $scope.name = 'Sarigama CD World';
	    $scope.headOffice = "Plot No:123-09,4th cross,Wilson Garden,Bangalore,Karnataka";

	    $scope.getDetails = function () {
	        return [
	            {
	                title: 'Spyder',
	                language: 'Telugu',
	                price: 999
            },
	            {
	                title: 'Thupaki',
	                language: 'Tamil',
	                price: 898
            },
	            {
	                title: 'DarkKnight',
	                language: 'ENGLISH',
	                price: 1223
            },
	            {
	                title: 'Interstellar',
	                language: 'ENGLISH',
	                price: 811
            },
	            {
	                title: 'Largo Winch',
	                language: 'FRENCH',
	                price: 908
            }
                ]
	    }
	});

	app.controller('allController', function ($scope) {
	      $scope.name = 'Sarigama CD World';
	    $scope.headOffice = "Plot No:123-09,4th cross,Wilson Garden,Bangalore,Karnataka";


	    $scope.getDetails = function () {
	        return [
	            {
	                title: 'Spyder',
	                language: 'Telugu',
	                price: 999
            },
	            {
	                title: 'Thupaki',
	                language: 'Tamil',
	                price: 898
            },
	            {
	                title: 'DarkKnight',
	                language: 'ENGLISH',
	                price: 1223
            },
	            {
	                title: 'Interstellar',
	                language: 'ENGLISH',
	                price: 811
            },
	            {
	                title: 'Largo Winch',
	                language: 'FRENCH',
	                price: 908
            },   {
	                title: 'PK',
	                language: 'Hindi',
	                price: 1035
            },
	            {
	                title: 'Dangal',
	                language: 'HINDI',
	                price: 1633
            },
	              {
	                title: 'Kirik Party',
	                language: 'Kannada',
	                price: 1016
            }

                ]
	    }
	});

	app.controller('newController', function ($scope) {
	      $scope.name = 'Sarigama CD World';
	    $scope.headOffice = "Plot No:123-09,4th cross,Wilson Garden,Bangalore,Karnataka";

	    $scope.getDetails = function () {
	        return [
	         {
	                title: 'Spyder',
	                language: 'Telugu',
	                price: 999
            },
	            {
	                title: 'Thupaki',
	                language: 'Tamil',
	                price: 898
            },
	            {
	                title: 'DarkKnight',
	                language: 'ENGLISH',
	                price: 1223
            }
	            ]
	    }
	});
