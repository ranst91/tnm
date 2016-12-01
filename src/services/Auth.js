module.exports = function ($http, $httpParamSerializer, $localStorage) {
    /**
     * Exposed functions available from this service
     * @type {{login: login, logout: logout, getUserInfo: getUserInfo}}
     */
    let authService = {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };

    let endpoint_login = 'https://api.test.thenewmotion.com/oauth2/access_token';
    let endpoint_info = 'https://api.test.thenewmotion.com/v1/me';
    return authService;
    ///////////////////

    /**
     * Upon a login request:
     *  - Post the request to the server
     *  - if a token is received:
     *      - save a localstorage entry with the token and basic user info
     *      - set default headers to use the token on every request
     *      - return a feedback to the LoginController
     *  - if a token is not received:
     *      - The login is counted as unsuccessful and therefore a false response is returned.
     * @param email
     * @param password
     * @returns {*|Promise.<TResult>}
     */
    // Email: programming-assignment@thenewmotion.com
    // Password:Zea2E5RA

        function login(email, password) {
        return $http({
            method: 'POST',
            url: endpoint_login,
            headers: {
                "Authorization": "Basic dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0=",
                "content-type": "application/x-www-form-urlencoded"
            },
            data: $httpParamSerializer({
                grant_type: "password",
                username: email,
                password: password
            })
        }).then(res => {
            let response = res.data;
            if (response.access_token){
                $localStorage.currentUser = {
                    access_token: response.access_token,
                    refresh_token: response.refresh_token
                };
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.access_token;
                $rootScope.isAuthenticated = true;
                return true;
            } else
                return false;
        });
    }

    /**
     * Contact the user info url to request info about the authenticated user
     * @returns {*|Promise.<TResult>}
     */
    function getUserInfo() {
        return $http({
            method: 'GET',
            url: endpoint_info,
        }).then(user => {
            return user;
        });
    }

    /**
     * Logout method that cleans localstorage and the default token headers for http requests
     */
    function logout() {
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
    }
};