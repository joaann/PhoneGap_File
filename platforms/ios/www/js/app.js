angular.module('app',[
					'ngCordova',
                      'ui.router',
                      'file-controllers',
                      //'file-service'
                      ])
					  //.run(['FileService', function(FileService){
                    //	  
                      //}])
                      .config(['$stateProvider', '$urlRouterProvider',
                                 function($stateProvider,$urlRouterProvider){

                    	  $urlRouterProvider
                    	  .when('','/file')
                    	  .when('/','/file')
                    	  .otherwise('/file');

                    	  $stateProvider
                    	  .state('file',{
                    		  url: '/file',
                    		  templateUrl: 'partials/file.html',
							  controller: 'FileCtrl',
                    		  onEnter: function(){
                    			  console.log("enter filectrl");
                    		  }
                    	  })
                      }
                      ]);
