module.exports = function ($http) {
    var MapService = {
        initMap: initMap,
        addMarker: addMarker,
        getMarkersFromApi: getMarkersFromApi
    };
    return MapService;
    //////////////////

    function initMap(options) {
        options.center = _getLatLng(options.center.lat, options.center.lng);
        MapService.map = new google.maps.Map(document.getElementById('map_self'), options);
    }

    function addMarker(lat,lng, title) {
        return new google.maps.Marker({
            position: _getLatLng(lat,lng),
            map: MapService.map,
            title: title
        });
    }

    function _getLatLng(lat,lng){
        return new google.maps.LatLng(lat, lng);
    }

    function getMarkersFromApi(){
        return $http.get('/chargepoints.json').then(res => {
            return res.data.map(marker => {
                return {
                    title: `${marker.address}, ${marker.city}`,
                    lat: marker.lat,
                    lng: marker.lng
                };
            });
        });
    }
};
//KEY AIzaSyApB3XNRfJq6zXacIKpyauTE-iiolRFYQc
