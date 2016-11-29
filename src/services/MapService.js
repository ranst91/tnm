module.exports = function ($http) {
    /**
     * Exposed functions available from this service
     * @type {{initMap: initMap, setMarkers: setMarkers}}
     */
    var MapService = {
        getMapData: getMapData,
        setMarkers: setMarkers
    };
    return MapService;
    //////////////////



    function setMarkers(positions){
        for (let position in positions) {
            new google.maps.Marker({
                position: position,
                map: MapService.map
            });
        }
    }

    function getMapData(){
        $http.get('https://maps.googleapis.com/maps/api/js?key=***YOUR_API_KEY**&callback=initMap');
    }
};