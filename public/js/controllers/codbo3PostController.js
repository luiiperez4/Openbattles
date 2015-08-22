app.controller('CodBO3PostCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:'PS4', value:'ps4'},
    {name:'PS3', value:'ps3'},
    {name:'Xbox One', value:'xone'},
    {name:'Xbox 360', value:'xbox'}
  ];

  $scope.gameModes = [
    {name:'Search and Destroy', players:'6'},
    {name:'Hardpoint', players:'6'},
    {name:'Team Deathmatch', players:'6'},
    {name:'Domination', players:'6'},
    {name:'Demolition', players:'6'},
    {name:'Kill Confirmed', players:'6'},
    {name:'Uplink', players:'6'}
  ];

  $scope.insertdata = function(){
    var data = {
      'consoleType':$scope.consoleType,
      'consoleID':$scope.consoleID,
      'gameMode':$scope.gameMode.name,
      'numberOfPlayers':$scope.numberOfPlayers,
      'rules':$scope.rules,
    };

    postSocket.emit('send codbo3', data);

    $scope.consoleType = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.numberOfPlayers = "";
    $scope.rules = "";
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/codbo3PostView.html'
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
