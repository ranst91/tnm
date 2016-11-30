module.exports = {
    templateUrl: 'views/map.component.html',
    bindings: {
        markers: '<'
    },
    controller: function (MapService) {
        let vm = this;
        vm.googleMapsUrl = 'http://maps.google.com/maps/api/js&key=AIzaSyApB3XNRfJq6zXacIKpyauTE-iiolRFYQc';
        initMap();
        function initMap() {
            let mapOptions = {
                zoom: 3,
                center: _getLatLng(vm.markers[0]),
                mapTypeId: 'roadmap'
            };
            vm.map = new google.maps.Map(document.getElementById('map_self'), mapOptions);
            for (let marker of vm.markers) {
                _addMarker(marker);
            }
        }

        function _addMarker(marker) {
            return new google.maps.Marker({
                position: _getLatLng(marker),
                map: vm.map,
                title: 'Hello World!'
            });
        }

        function _getLatLng(marker){
            return new google.maps.LatLng(marker.lat, marker.lng);
        }
    }
};