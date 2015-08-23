app.controller('CodBO3FeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:''},
    {name:'PS4'},
    {name:'PS3'},
    {name:'Xbox One'},
    {name:'Xbox 360'}
  ];

  $scope.gameModes = [
    {name:''},
    {name:'Search and Destroy'},
    {name:'Hardpoint'},
    {name:'Team Deathmatch'},
    {name:'Domination'},
    {name:'Demolition'},
    {name:'Kill Confirmed'},
    {name:'Uplink'}
  ];

  postSocket.on('post codbo3', function(data){
    $scope.post = data;
  });

  postSocket.on('append codbo3', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/codbo3FeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
