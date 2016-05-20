(function(){
	var module = angular.module('file-controllers', ['ngCordova']);
	module.controller('FileCtrl',['$scope', '$cordovaFile' ,function($scope, $cordovaFile){
		var output = "test.txt";
		$scope.output = output;
		$scope.inputfile="files/test512kb.txt";
		var dataTestFile = $.get($scope.inputfile); // 1mb testfile (test1mb) or 512kb testfile(test512kb)
		$scope.Wtime = 0; //Write measure
		$scope.Rtime = 0;// read measure
		document.addEventListener('deviceready', function(){

			$scope.writeTestFile = function() {
				var start = new Date().getTime(); //timestamp for start of writing file
				console.log('writeFile started at ');
				$cordovaFile.writeFile(cordova.file.dataDirectory , output, dataTestFile, true)
				.then(function(success){
					var end = new Date().getTime();
					$scope.Wtime = end - start;
					//console.log("Wrote " + dataTestFile + " to test.txt");
				}, function(err){
					console.log('write error '+err.code)
				});
			};

			$scope.readTestFile = function(){
				var start = new Date().getTime(); //timestamp for start reading of file
				console.log('readFile started at ');
				$cordovaFile.readAsText(cordova.file.dataDirectory, output)
				.then(function (success) {
					//console.log(success);
					//$scope.output = JSON.parse(success).responseText;
					var end = new Date().getTime();
					$scope.Rtime = end - start;
				}, function (err) {
					console.log('Read error '+err.code);
				});
			};
		});
	}]);

})();
