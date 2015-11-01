app.controller('SiegePostCtrl', ['$scope', 'postSocket', 'Flash', function($scope, postSocket, Flash){

  $scope.consoles =[
    {name:'PC', value:'pc'},
    {name:'PS4', value:'ps4'},
    {name:'PS3', value:'ps3'},
    {name:'Xbox One', value:'xone'},
    {name:'Xbox 360', value:'xbox'}
  ];

  $scope.gameModes = [
    {name:'TDM-Bomb', players:'5'},
    {name:'TDM-Secure Area', players:'5'}
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

    postSocket.emit('send siege', data);

    $scope.consoleType = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.numberOfPlayers = "";
    $scope.rules = "";
    $scope.hasServer = false;
    $scope.serverTrue = false;
    $scope.serverName = "";

    var message = '<strong>Your post was successful.  Good luck on your battle!</strong>';
    Flash.create('success', message, 'custom-class');
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/siegePostView.html'
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
