var AuthHttpResponseInterceptor = function($q, $location, $injector) {
    return {
        request: function (config) {
           //debugger;
            dtXHRTracerFactory.enterXHR(config.url, config.data.ResqustIdentifier);
            return config;
        },
        response: function (response) {
            dtXHRTracerFactory.leaveHXR(response.config.url, response.data.ResqustIdentifier);
            //debugger;
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        responseError: function (rejection) {
           // debugger;
            dtXHRTracerFactory.leaveHXR(response.config.url);
            if (rejection.status === 401) {
                $injector.get('$state').go('loginRegister', { returnUrl: $location.path() });
            }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location', '$injector'];