app.controller('RocketFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:''},
    {name:'PC'},
    {name:'PS4'}
  ];

  $scope.gameModes = [
    {name:''},
    {name:'Duel'},
    {name:'Doubles'},
    {name:'Standard'},
    {name:'Chaos'},
    {name:'Ranked-Solo Duel'},
    {name:'Ranked-Doubles'},
    {name:'Ranked-Standard'}
  ];

  $scope.regions = [
    {name:''},
    {name:'US'},
    {name:'EU'}
  ];

  postSocket.on('post rocket', function(data){
    $scope.post = data;
  });

  postSocket.on('append rocket', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/rocketFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
