module.exports = function ($http, $localStorage) {
    /**
     * Exposed functions available from this service
     * @type {{login: login, logout: logout, getUserInfo: getUserInfo}}
     */
    let authService = {
        login: login,
        logout: logout,
        getUserInfo: getUserInfo
    };

    let endpoint_login = '/users.json';
    let endpoint_info = '/users.json';
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
    function login(email, password) {
        return $http.post(endpoint_login, { email: email, password: password }).then(response => {
            console.log(response);
            if (response.token){
                //REPLACE USERNAME WITH SOMETHING BACK FROM SERVER
                $localStorage.currentUser = { username: username, token: response.token };
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
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