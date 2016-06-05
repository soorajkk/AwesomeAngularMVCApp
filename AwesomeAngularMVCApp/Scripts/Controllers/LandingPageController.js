var LandingPageController = function ($scope, $http, $q) {
    //debugger;

    //var result = RegistrationFactory('soorajkkhere@gmail.com', 'Password1', 'Password1');
    //result.then(function (result) {
    //    if (result.success) {
    //        $location.path('/routeOne');
    //    } else {
    //        $scope.registerForm.registrationFailure = true;
    //    }
    //});


    $scope.traceClick = function () {
        debugger;
        var result = deferSendData('skk@kk.com', 'Password1', 'Password1');
        result.then(function (result) {
            debugger;
            if (result.success) {
                $location.path('/routeOne');
            } else {
               // $scope.registerForm.registrationFailure = true;
            }
        });
        //debugger;
        //for (var i = 0; i < 10; i++) {

        //    sendData(i);
        //    //(function (index) {
        //    //    setTimeout(function () {
        //    //        // alert(index);

        //    //        sendData(index);

        //    //    }, i * 2000);
        //    //})(i);
        //}
    }

    $scope.models = {
        helloAngular: 'I work!'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };

    function sendData(index) {

        $http.post(
             '/Account/Register', {
                 Email: 'soorajkkhere@gmail.com',
                 Password: 'Password1',
                 ConfirmPassword: 'Password1',
                 ResqustIdentifier: index.toString()
             }
         ).
         success(function (data) {
             // debugger;
             if (data == "True") {
                 //  deferredObject.resolve({ success: true });
             } else {
                 //deferredObject.resolve({ success: false });
             }
         }).
         error(function () {
             // debugger;
             // deferredObject.resolve({ success: false });
         });

    }

    function deferSendData(emailAddress, password, confirmPassword) {

        debugger;
        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register', {
                Email: 'soorajkkhere@gmail.com',
                Password: 'Password1',
                ConfirmPassword: 'Password1',
                ResqustIdentifier: '1'
            }
        ).
        success(function (data) {           
            if (data.ResqustIdentifier !=null) {
                deferredObject.resolve({ success: true, response: data });                
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function (qdd) {            
            deferredObject.resolve({ success: false, exceptionStackTrace: qdd });            
        });

        return deferredObject.promise;
    }
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$http', '$q'];