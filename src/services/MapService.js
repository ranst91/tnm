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
        return $http.get(`https://maps.googleapis.com/maps/api/js?key=***YOUR_API_KEY**&callback=initMap`);
    }
};

// 1ST approach //
//MapService --
// function getMapData(data){
//     data = encodeURI(data);
//     return $http.get(`https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap&markers=${data}&key=YOUR_API_KEY`);
// }
//MapComponent --
// function initMap() {
//     //Get data to pass to getmapdata
//     MapService.getMapData(data).then(map => {
//         vm.map = map;
//     });
//
// }

// 2ND approach //
//MapService
// function getMapData(){
//     return $http.get(`https://maps.googleapis.com/maps/api/js?key=***YOUR_API_KEY**&callback=initMap`);
// }
//MapComponents
// function initMap() {
//     MapService.getMapData();
//
//     MapService.map = new google.maps.Map(document.getElementById('map'));
// }
//
// google.maps.event.addDomListener(document.getElementById("map"), 'load', MapService.setMarkers(vm.markers));

