app.controller('BF4FeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:''},
    {name:'PS4'},
    {name:'PS3'},
    {name:'Xbox One'},
    {name:'Xbox 360'}
  ];

  $scope.gameModes = [
    {name:''},
    {name:'Conquest'},
    {name:'Rush'},
    {name:'Team Deathmatch'},
    {name:'Obliteration'},
    {name:'Defuse'},
    {name:'Domination'},
    {name:'Air Superiority'},
    {name:'Capture the Flag'},
    {name:'Carrier Assault'},
    {name:'Chain Link'}
  ];

  postSocket.on('post bf4', function(data){
    $scope.post = data;
  });

  postSocket.on('append bf4', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/bf4FeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
