app.controller('HardlineFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:''},
    {name:'PC'},
    {name:'PS4'},
    {name:'PS3'},
    {name:'Xbox One'},
    {name:'Xbox 360'}
  ];

  $scope.gameModes = [
    {name:''},
    {name:'Rescue'},
    {name:'Blood Money'},
    {name:'Heist'},
    {name:'Hotwire'},
    {name:'Conquest'},
    {name:'Crosshair'},
    {name:'Team Deathmatch'},
    {name:'Bounty Hunter'}
  ];

  postSocket.on('post hardline', function(data){
    $scope.post = data;
  });

  postSocket.on('append hardline', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/hardlineFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
