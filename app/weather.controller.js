(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['weatherFactory'];

    /* @ngInject */
    function WeatherController(weatherFactory) {					// injecting factory into a controller
        var vm = this;
        vm.title='WeatherController'; 
      
           // dynamicly populating buttons 
        
         vm.getWeather=getWeather;
         vm.searchHistory=[];
         vm.searchTerm='';
        
        function getWeather(cityName){                                              // getWeather function
           
        	weatherFactory.getWeather(cityName).then(

        				function(data){ 				// Resolve function
        					vm.weatherInformation=data;

                            vm.searchHistory.push({
                                name : data.data.name,
                                timestamp: new Date
                            })
                             if (vm.searchHistory.length > 5) {
                                  vm.searchHistory=[];
                             }


        				},
                            function(err){
                                     console.log('Error'); // Reject Func
                            }
                        )
        					
        				
        		
        }
    }
})();	