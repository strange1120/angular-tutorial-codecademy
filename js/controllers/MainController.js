app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'This Month\'s Bestsellers'; 
    $scope.promo = 'The most popular books this month.';
    $scope.products = [ 
        { 
          name: 'The Book of Trees', 
          price: 19, 
          pubdate: new Date('2014', '03', '08'), 
          cover: 'img/the-book-of-trees.jpg',
          likes: 0
        }, 
        { 
          name: 'Program or be Programmed', 
          price: 8, 
          pubdate: new Date('2013', '08', '01'), 
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0 
        } ,
        {
          name:'Harry Potter and the Order of the Phoenix',
          price: 24,
          pubdate: new Date('2007', '07', '04'),
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0
        },
        {
          name:'The Hunger Games',
          price: 12,
          pubdate: new Date('2009', '08', '23'),
          cover: 'img/program-or-be-programmed.jpg',
          likes: 0
        }
      ];
      $scope.plusOne = function(index) {
          $scope.products[index].likes += 1;
      };
  }]);
  