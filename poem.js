angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope) {
  
  
  $scope.items = [
    { id: 1, album: 'Time Will Show You The Path', artist: '"We all have the wrong and right but the ultimate truth is time"', image: 'img/time will.png' },
    { id: 2, album: 'Fantasy Seek Ahead', artist: '"As a child we all grew up how our world would be!"', image: 'img/fantasy.png' },
    { id: 3, album: "Dreamer's Drift", artist: '"A  person who lost his way in world  of dreams, Dreams are biggest part of a life ot make a person who he is!"', image: 'img/dreamer drift.png' },
    { id: 4, album:"Who's Real You?", artist: '"We humans have a tendency to lie and hide our self in this world of fate"', image: 'img/real you.png' },
    { id: 5, album: 'Reboot Night', artist: '"Some wake up from nigth where he fights in echoes in mind and then again the night started"', image: 'img/reboot night.png' },
    { id: 6, album: 'Reboot Night', artist: '"Some wake up from nigth where he fights in echoes in mind and then again the night started"', image: 'img/reboot night.png' },
    { id: 7, album: 'Reboot Night', artist: '"Some wake up from nigth where he fights in echoes in mind and then again the night started"', image: 'img/reboot night.png' }
  ];
  
});