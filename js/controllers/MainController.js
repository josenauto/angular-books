app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Books';
  $scope.promo = "Promotion";
  $scope.products = [
    {
  	  name: 'Harry Potter and The Deathly Hallows',
  	  price: 19,
  	  pubdate: new Date('2014', '03', '08'),
  	  cover: 'img/harry-potter.jpg',
      likes: 0,
      dislikes: 0
    },
    {
  	  name: 'The Hobbit',
  	  price: 8,
  	  pubdate: new Date('2013', '08', '01'),
  	  cover: 'img/the-hobbit.jpg',
      likes: 0,
      dislikes: 0
  	},
  	{
  		name: 'Robot Dreams',
  		price: 10,
  		pubdate: new Date('1996', '04', '06'),
  		cover: 'img/robot-dreams.jpg',
      likes: 0,
      dislikes: 0
  	},
  	{
  		name: 'Dreams of Terror and Death',
  		price: 13,
  		pubdate: new Date('1888', '06', '06'),
  		cover: 'img/dreams-of-terror-and-death.jpg',
      likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  }
}]);
