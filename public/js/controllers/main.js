'use strict';

angular.module('blogCartApp')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

    $scope.createPost = function() {
    	$location.path('/new');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	$location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  });

 angular.module('blogCartApp')
  .controller('theCartCtrl', function ($scope, $location, theCartSvc) {

    $scope.createCart = function() {
      $location.path('/newcart');
    };
    $scope.newCart = function(cart) {
      theCartSvc.create(cart)
      $location.path('/cart');
    };
    $scope.carts = theCartSvc.query();
  })
  .controller('theCartCtrl', function($scope, $location, $routeParams, theCartSvc) {

    $scope.product = theCartSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      theCartSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.edit = function() {
    theCartSvc.edit($scope.cart);
      $location.path('/cart');
    };
  });
