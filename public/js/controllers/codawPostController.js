app.controller('CodAWPostCtrl', ['$scope', 'postSocket', 'Flash', function($scope, postSocket, Flash){

  $scope.consoles =[
    {name:'PS4', value:'ps4'},
    {name:'PS3', value:'ps3'},
    {name:'Xbox One', value:'xone'},
    {name:'Xbox 360', value:'xbox'}
  ];

  $scope.gameModes = [
    {name:'Team Deathmatch', players:'6'},
    {name:'Kill Confirmed', players:'6'},
    {name:'Capture the Flag', players:'6'},
    {name:'Search and Destroy', players:'6'},
    {name:'Momentum', players:'6'},
    {name:'Uplink', players:'6'},
    {name:'Hardpoint', players:'6'},
    {name:'Search and Destroy', players:'6'},
    {name:'Domination', players:'6'},
    {name:'Ground War', players:'9'}
  ];

  $scope.insertdata = function(){
    var data = {
      'consoleType':$scope.consoleType,
      'consoleID':$scope.consoleID,
      'gameMode':$scope.gameMode.name,
      'numberOfPlayers':$scope.numberOfPlayers,
      'rules':$scope.rules,
    };

    postSocket.emit('send codaw', data);

    $scope.consoleType = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.numberOfPlayers = "";
    $scope.rules = "";

    var message = '<strong>Your post was successfully entered.  Good luck on your battle!</strong>';
    Flash.create('success', message, 'custom-class');
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/codawPostView.html'
    };
  }).
  filter('range', function(){
    return function(input, min, max){
      min = parseInt(min);
      max = parseInt(max);
      for(var i=min; i<=max; i++)
        input.push(i);
      return input;
    }
  });
