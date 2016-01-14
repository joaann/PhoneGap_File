(function(){
	var module = angular.module('file-controllers', ['ngCordova']);
	module.controller('FileCtrl',['$scope', '$cordovaFile' ,function($scope, $cordovaFile){
	$scope.output = '';
	var dataTestFile = $.get('files/test1mb.txt'); // 1mb testfile (test1mb) or 512kb testfile(test512kb)
		document.addEventListener('deviceready', function(){
			
			$scope.writeTestFile = function() {
			var wTFStart = new Date().getTime(); //timestamp for start of writing file
			console.log('writeFile started at ' + wTFStart);
				$cordovaFile.writeFile(cordova.file.dataDirectory , "test.txt", dataTestFile, true).then(function(success){
				//console.log("Wrote " + dataTestFile + " to test.txt");
				}, function(err){	
					console.log('write error '+err.code)
				});
			};
			
			$scope.readTestFile = function(){ 
			var rTFStart = new Date().getTime(); //timestamp for start reading of file
			console.log('readFile started at '+rTFStart);
				$cordovaFile.readAsText(cordova.file.dataDirectory, 'test.txt')
				.then(function (success) {
					//console.log(success);
					$scope.output = JSON.parse(success).responseText;
				}, function (err) {
					console.log('Read error '+err.code);
				});
			};
		});
	}]);
	
})();