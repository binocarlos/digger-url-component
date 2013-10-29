var template = require('./template');

$digger.directive('urlComponent', function(){
	return {
    restrict:'EA',
    template:template,
    replace:true,
    controller:function($scope){

			function setname(name){
				$scope.warehouseurl = $digger.config.protocol + '://' + $digger.config.host + '/' + $digger.user.username + '/' + name;
				$scope.apiurl = $digger.config.diggerurl + '/' + $digger.user.username + '/' + name;
			}

			$scope.model = $scope.container.get(0);

			$scope.$watch('model.name', function(name){

				if(!name){
					setname('');
					$scope.error = false;
					return;
				}

				if(name.match(/^[\w-]+$/)){
					setname(name);
					$scope.error = false;
				}
				else{
					setname('');
					$scope.error = true;
				}
				
			})
			
    }
  }
})

module.exports = '<url-component />';