app.controller('BF4PostCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  $scope.consoles =[
    {name:'PS4', value:'ps4'},
    {name:'PS3', value:'ps3'},
    {name:'Xbox One', value:'xone'},
    {name:'Xbox 360', value:'xbox'}
  ];

  $scope.gameModes = [
    {name:'Conquest', players:''},
    {name:'Rush', players:''},
    {name:'Team Deathmatch', players:''},
    {name:'Obliteration', players:''},
    {name:'Defuse', players:''},
    {name:'Domination', players:''},
    {name:'Air Superiority', players:''},
    {name:'Capture the Flag', players:''},
    {name:'Carrier Assault', players:''},
    {name:'Chain Link', players:''}
  ];

  $scope.insertdata = function(){
    var data = {
      'consoleType':$scope.consoleType,
      'consoleID':$scope.consoleID,
      'gameMode':$scope.gameMode.name,
      'numberOfPlayers':$scope.numberOfPlayers,
      'rules':$scope.rules,
      'hasServer':$scope.hasServer,
      'serverName':$scope.serverName,
    };

    postSocket.emit('send bf4', data);

    $scope.consoleType = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.numberOfPlayers = "";
    $scope.rules = "";
    $scope.hasServer = false;
    $scope.serverTrue = false;
    $scope.serverName = "";
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/bf4PostView.html'
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
