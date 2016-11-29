module.exports = function (AuthService, MessageService, $state) {
    let vm = this;

    initController();

    /**
     * Reset the login status
     */
    function initController() {
        AuthService.logout();
    }

    /**
     * Submit a login request using email and password.
     * If a response comes as truth:
     *      - Get the user info to use in an upcoming toast
     *      - Send the user a success toast, indicating the successful login, using the info from before
     *      - Redirect to homepage, containing the map
     * If a request comes false:
     *      - Send a feedback to the user about incorrect email or password
     */
    vm.submit = function() {
        AuthService.login(vm.email, vm.password).then(response => {
            if (response === true) {
                //get user info from Auth.getUserInfo
                AuthService.getUserInfo().then(userInfo => {
                    //toastr welcome
                    MessageService.success('Welcome *USERNAME*');
                    //redirect home
                    $state.go('home');
                });
            } else {
                MessageService.error('Email or password is incorrect');
            }
        }).catch(error => {
            //USE $LOG!!!
            MessageService.error('It seems like there was an error logging you in');
        });
    };
};

