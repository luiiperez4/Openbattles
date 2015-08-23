app.controller('CodAWFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:''},
    {name:'PS4'},
    {name:'PS3'},
    {name:'Xbox One'},
    {name:'Xbox 360'}
  ];

  $scope.gameModes = [
    {name:''},
    {name:'Team Deathmatch'},
    {name:'Kill Confirmed'},
    {name:'Capture the Flag'},
    {name:'Search and Destroy'},
    {name:'Momentum'},
    {name:'Uplink'},
    {name:'Hardpoint'},
    {name:'Search and Destroy'},
    {name:'Domination'},
    {name:'Ground War'}
  ];

  postSocket.on('post codaw', function(data){
    $scope.post = data;
  });

  postSocket.on('append codaw', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/codawFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
