module.exports = function (toastr) {
    /**
     * @desc Exposed functions available from this service
     * @type {{error: error, success: success}}
     */
    let service = {
        error: error,
        success: success
    };
    return Handler;
    ////////////////////

    /**
     * @name error
     * @desc Used to dispatch a failure toast for a nice user feedback
     * @param {String} message Message to use for error display
     */
    function error(message) {
        toastr.error(message);
    }

    /**
     * @name success
     * @desc Used to dispatch a success toast for a nice user feedback
     * @param {String} message Message to use for success display
     */
    function success(message){
        toastr.success(message);
    }
};