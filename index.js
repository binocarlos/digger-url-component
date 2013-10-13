var template = require('./template');

window.$diggercomponents.directive('myTing', function(){

  console.log('testDir is now getting initialized');
  var counter = 0;
  
  return {
    restrict:'EA',
    templateUrl:template,
    controller:function($scope){

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
			
    },
    link:function(scope,element,attrs){
      scope.count = ++counter;
      console.log('a new testDir directive has been created and linked');
    }
  }
});

module.exports = '<my-ting />';