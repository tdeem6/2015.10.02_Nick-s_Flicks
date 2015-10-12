nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scope.ReviewsFactory = ReviewsFactory;

  $scope.displayParticularReview = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId);

});
