module.exports = function () {
    /**
     * Exposed functions available from this service
     * @type {{error: error, success: success}}
     */
    let Handler = {
        error: error,
        success: success
    };
    return Handler;
    ////////////////////

    /**
     * Used to dispatch a failure toast for a nice user feedback
     * @param message
     */
    function error(message) {
        toastr.error(message);
    }

    /**
     * Used to dispatch a success toast for a nice user feedback
     * @param message
     */
    function success(message){
        toastr.success(message);
    }
};