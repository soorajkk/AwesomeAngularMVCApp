var RegistrationFactory = function ($http, $q) {
    debugger;
    return function (emailAddress, password, confirmPassword) {

        debugger;
        var deferredObject = $q.defer();

        $http.post(
            '/Account/Register', {
                Email: 'soorajkkhere@gmail.com',
                Password: 'Password1',
                ConfirmPassword: 'Password1'
            }
        ).
        success(function (data) {
            debugger;
            if (data == "True") {
                deferredObject.resolve({ success: true });
            } else {
                deferredObject.resolve({ success: false });
            }
        }).
        error(function () {
            debugger;
            deferredObject.resolve({ success: false });
        });

        return deferredObject.promise;
    }
}

RegistrationFactory.$inject = ['$http', '$q'];