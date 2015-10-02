nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [
    {
      title:
      description:
      id:
    },
    {
      title:
      description:
      id:
    },
    {
      title:
      description:
      id:
    },
  ];

  factory.addReview = function() {
    factory.reviews.push({
      title: factory.reviewTitle,
      description: factory.reviewDescription,
      id: factory.reviews.length +1
    });
    factory.reviewTitle = null;
    factory.reviewDescription = null;
  }

  return factory;
});
