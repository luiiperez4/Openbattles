app.controller('CodBO3FeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

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
