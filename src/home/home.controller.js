module.exports = function (mapService) {
    let vm = this;
    vm.markers = [];
    vm.center = {};

    getMarkersFromApi();
    ////////////

    /**
     * Get markers from the charge points API (chargepoints.json)
     */
    function getMarkersFromApi(){
        mapService.getMarkersFromApi().then(res => {
            vm.markers = res;
            vm.center = vm.markers[0];
        });
    }
};
