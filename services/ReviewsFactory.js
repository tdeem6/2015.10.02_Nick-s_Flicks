nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [
    {
      title: "Star Wars: Phantom Menace"
      description: "I loved JarJar binks, he was probably the best thing to ever happen to the Star Wars universe, 5 stars!"
      id: 1
    },
    {
      title: "Indiana Jones: Crystal Skull"
      description: "I love when they add onto a series that was so good and people said it should be left alone, Shia Lebouf definetly outshines Ford in this one."
      id: 2
    },
    {
      title: "Lord of the Rings, The Hobbit"
      description: "I wasn't quite sure how they would split such a small book into so many parts, but I'm glad they didn't follow the book so closely so we got to have a better movie experience!"
      id: 3
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
