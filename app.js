var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl:'partials/header.html',
        //no controller
      },
      'enter': {
        templateUrl: 'partials/home.html',
        controller: 'ReviewsCtrl'
      }
    }
  });

  $stateProvider.state('reviews', {
    url: "reviews/:reviewId",
    views: {
      'header': {
        templateUrl:'partials/header.html',
      },
      'sideBar': {
        templateUrl: 'partials/sidebar.html',
        controller: 'ReviewsCtrl'
      },
      'review': {
        templateUrl: 'partials/review-content.html',
        controller: 'ReviewsCtrl'
      },
      'newReviewForm': {
        templateUrl: 'partials/add-review.html',
        controller: 'ReviewsCtrl'
      }
    }
  });


});
