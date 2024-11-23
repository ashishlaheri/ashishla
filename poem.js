angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, album: 'Time Will Show You The Path', artist: '"We all have the wrong and right but the ultimate truth is time"', image: 'img/time will.png' },
    { id: 2, album: 'Fantasy Seek Ahead', artist: '"As a child we all grew up how our world would be!"', image: 'img/fantasy.png' },
    { id: 3, album: 'poem3', artist: 'Subtitle', image: '' },
    { id: 4, album: 'poem4', artist: 'Subtitle', image: '' },
    { id: 5, album: 'poem5', artist: 'Subtitle', image: 'img/poems.png' }
  ];
  
});