var app = angular.module('myApp', ["ui.bootstrap.modal"]);

app.controller('myController', function($scope) {

  $scope.pageTitle = 'Angular Store';

  $scope.productsList = [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ];

  $scope.open = function() {
    $scope.showModal = true;
  };

  $scope.update = function(product) {
    $scope.productsList.push(product);
    $scope.showModal = false;
  };

  $scope.cancel = function() {
    $scope.showModal = false;
  };

  $scope.remove = function(productTitle) {

    for(var i = 0; i < $scope.productsList.length; i++) {
      var obj = $scope.productsList[i];

      if(productTitle.indexOf(obj.title) !== -1) {
        $scope.productsList.splice(i, 1);
      }
    }

    // var index = $scope.productsList.indexOf(productTitle);
    // console.log(index);
  };



});