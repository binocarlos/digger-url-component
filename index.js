var template = require('./template');

window.$diggercomponents.directive('myTing', function(){
	return {
    restrict:'EA',
    templateUrl:template,
    controller:function($scope){

    	/*
			function setname(name){
				$scope.warehouseurl = $digger.config.protocol + '://' + $digger.config.host + '/' + $digger.user.username + '/' + name;
				$scope.apiurl = $digger.config.diggerurl + '/' + $digger.user.username + '/' + name;
			}

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
			*/

			console.log('-------------------------------------------');
			console.log('controller');

			
    },
    link:function(scope,element,attrs){
      console.log('-------------------------------------------');
      console.log('directive created');
    }
  }
})

module.exports = '<my-ting />';