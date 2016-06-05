var LandingPageController = function ($scope, $http) {
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
        //debugger;
        for (var i = 0; i < 10; i++) {
            $http.post(
              '/Account/Register', {
                  Email: 'soorajkkhere@gmail.com',
                  Password: 'Password1',
                  ConfirmPassword: 'Password1',
                  ResqustIdentifier: i.toString()
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
    }

    $scope.models = {
        helloAngular: 'I work!'
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
}

// The inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$http'];