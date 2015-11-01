app.controller('SiegeFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

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
    {name:'TDM-Bomb'},
    {name:'TDM-Secure Area'}
  ];

  postSocket.on('post siege', function(data){
    $scope.post = data;
  });

  postSocket.on('append siege', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/siegeFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
