app.controller('HardlineFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  postSocket.on('post hardline', function(data){
    $scope.post = data;
  });

  postSocket.on('append hardline', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/hardlineFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
