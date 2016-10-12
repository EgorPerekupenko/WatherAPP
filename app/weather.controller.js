(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['weatherFactory','toastr'];

    // injecting factory into a controller
    function WeatherController(weatherFactory,toastr) {					
        var vm = this;
        vm.title='WeatherController'; 
      
           
        
         vm.getWeather=getWeather;
         vm.searchHistory=[];
         vm.searchTerm='';
        // getWeather function
        function getWeather(cityName){                                              
           
        	weatherFactory.getWeather(cityName).then(
// Resolve function
        				function(data){ 				
        					vm.weatherInformation=data;

                            vm.searchHistory.push({
                                name : data.data.name,
                                timestamp: new Date
                            })
                             if (vm.searchHistory.length > 5) {
                                  vm.searchHistory=[];
                             }
                             toastr.sucsess('Its working');

        				},
                        // Reject Func
                            function(error){
                            toastr.error('Error'); 
                            }
                        )
        					
        				
        		
        }
    }
})();	
//SA,CW,BS,EP,VZ