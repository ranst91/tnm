module.exports = function (MapService) {
    let vm = this;
    vm.markers = [];
    vm.center = {};
    MapService.getMarkersFromApi().then(res => {
        vm.markers = res;
        vm.center = vm.markers[0];
    });
};
