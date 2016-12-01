module.exports = {
    templateUrl: 'views/map.component.html',
    bindings: {
        markers: '<',
        center: '<'
    },
    controller: function (MapService) {
        let vm = this;
        vm.googleMapsUrl = 'http://maps.google.com/maps/api/js&key=AIzaSyApB3XNRfJq6zXacIKpyauTE-iiolRFYQc';
        let mapOptions = {
            zoom: 8,
            center: {
                lat: vm.center.lat,
                lng: vm.center.lng
            },
            mapTypeId: 'roadmap'
        };

        MapService.initMap(mapOptions);
        for (let marker of vm.markers){
            MapService.addMarker(marker.lat, marker.lng, marker.title);
        }
    }
};