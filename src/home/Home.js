module.exports = function () {
    let vm = this;
    vm.markers = [
        {lat: -25.363, lng: 131.044},
        {lat: -42.363, lng: 100.044}
    ];
    vm.googleMapsUrl = 'http://maps.google.com/maps/api/js&key=AIzaSyApB3XNRfJq6zXacIKpyauTE-iiolRFYQc';
    // NgMap.getMap().then(map => {
    //     vm.map = map;
    //     console.log(map.getCenter());
    //     console.log('markers', map.markers);
    //     console.log('shapes', map.shapes);
    // });
};
