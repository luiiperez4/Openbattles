app.controller('RocketPostCtrl', ['$scope', 'postSocket', 'Flash', function($scope, postSocket, Flash){

  $scope.consoles =[
    {name:'PC', value:'pc'},
    {name:'PS4', value:'ps4'}
  ];

  $scope.gameModes = [
    {name:'Duel', players:'1'},
    {name:'Doubles', players:'2'},
    {name:'Standard', players:'3'},
    {name:'Chaos', players:'4'},
    {name:'Ranked-Solo Duel', players:'1'},
    {name:'Ranked-Doubles', players:'2'},
    {name:'Ranked-Standard', players:'3'}
  ];

  $scope.regions = [
    {name:'US'},
    {name:'EU'}
  ];

  $scope.insertdata = function(){
    var data = {
      'consoleType':$scope.consoleType,
      'region':$scope.region.name,
      'consoleID':$scope.consoleID,
      'gameMode':$scope.gameMode.name,
      'numberOfPlayers':$scope.gameMode.players,
      'rules':$scope.rules,
    };

    postSocket.emit('send rocket', data);

    $scope.consoleType = "";
    $scope.region = "";
    $scope.consoleID = "";
    $scope.gameMode = "";
    $scope.rules = "";

    var message = '<strong>Your post was successfully entered.  Good luck on your game!</strong>';
    Flash.create('success', message, 'custom-class');
  }

}]).
  directive('battlePost', function(){
    return{
      restrict: 'C',
      templateUrl: 'partials/rocketPostView.html'
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
