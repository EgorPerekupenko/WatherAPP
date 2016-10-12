(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['weatherFactory'];                 // injecting factory into a controller

    /* @ngInject */
    function WeatherController(weatherFactory) {					
        var vm = this;
        vm.title='WeatherController'; 
      
           
        
         vm.getWeather=getWeather;
         vm.searchHistory=[];
         vm.searchTerm='';
        
        function getWeather(cityName){                                              // getWeather function
           
        	weatherFactory.getWeather(cityName).then(

        				function(data){ 				  // Resolve function
        					vm.weatherInformation=data;

                            vm.searchHistory.push({                         // pushing data to "search history table "
                                name : data.data.name,
                                timestamp: new Date
                            })
                             if (vm.searchHistory.length > 5) {             // clearing search field  once search list over 5 items
                                  vm.searchHistory=[];
                             }


        				},
                            function(err){
                                     toastr.error('Error');                 // Reject Func
                            }
                        )
        					
        				
        		
        }
    }
})();	