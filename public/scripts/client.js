var app = angular.module('giphyApp', ['ngRoute']);
// var route = angular.module('routeApp', ['ngRoute']);

app.controller('giphyController', function(GiphyService) {
  console.log('Giphy Controller loaded!');

  var ctrl = this;


  //random button
  ctrl.randomGiphy = function() {
    GiphyService.randomService().then(function(giphyList) {
      ctrl.giphyObj = giphyList;
    });
  };

  //search field
  ctrl.searchGiphy = function() {
    GiphyService.searchService(ctrl.search).then(function(giphyList){
      ctrl.giphySearchList = giphyList;
    });
  };
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/pages/home.html',
    controller: 'giphyController as giphy'
  }).when('/fav', {
    templateUrl: 'views/pages/fav.html',
    controller: 'giphyController as giphy'
  })
  $locationProvider.html5Mode(true);
})
