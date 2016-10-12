(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http','$q'];     				// injecting two services 1- "$http" 2-"$q" in to weatherFactory array 

    /* @ngInject */
    function weatherFactory($http,$q) {                          // injecting two services 1- "$http" 2-"$q" into function  according to John Papa guide  , 
    								               				//	making sure they r in exact same order with  servicies in weaterFactory array .
        var service = {
           getWeather : getWeather
        };	
        return service;

        ////////////////


        function getWeather(city) {

           return $http({                                                           // $http service 
                    method: 'GET',
                    url: 'http://api.openweathermap.org/data/2.5/weather?',
                    params: {
                        APPID: '667b5abeb6612db26e47532ca3dd593f',
                         q: city
                        }
                    }).then(
                        function(data){                 // Resolve function
                             return data;

                        },
                        function(err){
                                 return    console.log('Error'); // Reject Function
                            }
                        )
                
    };
    }
})();