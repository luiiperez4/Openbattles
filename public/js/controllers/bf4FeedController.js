app.controller('BF4FeedCtrl', ['$scope', 'postSocket', function($scope, postSocket){

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
