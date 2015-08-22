app.controller('CodAWFeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

  postSocket.on('post codaw', function(data){
    $scope.post = data;
  });

  postSocket.on('append codaw', function(data){
    $scope.post.push(data);
  });

}]).
  directive('showBattles', function(){
    return{
      restrict: 'C',
      templateUrl: '/partials/codawFeedView.html'
    };
  }).
  filter('encodeURIComponent', function(){
    return window.encodeURIComponent;
  });
