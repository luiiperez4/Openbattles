app.controller('HardlinePostCtrl', ['$scope', 'postSocket', 'Flash', function($scope, postSocket, Flash){

  $scope.consoles =[
    {name:'PS4', value:'ps4'},
    {name:'PS3', value:'ps3'},
    {name:'Xbox One', value:'xone'},
    {name:'Xbox 360', value:'xbox'}
  ];

  $scope.gameModes = [
    {name:'Rescue', players:'5'},
    {name:'Blood Money', players:'16'},
    {name:'Heist', players:'16'},
    {name:'Hotwire', players:'16'},
    {name:'Conquest', players:'32'},
    {name:'Crosshair', players:'5'},
    {name:'Team Deathmatch', players:'16'},
    {name:'Bounty Hunter', players:'16'}
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

    postSocket.emit('send hardline', data);

    $scope.consoleType = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.numberOfPlayers = "";
    $scope.rules = "";
    $scope.hasServer = false;
    $scope.serverTrue = false;
    $scope.serverName = "";

    var message = '<strong>Your post was successfully entered.  Good luck on your battle!</strong>';
    Flash.create('success', message, 'custom-class');
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/hardlinePostView.html'
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
