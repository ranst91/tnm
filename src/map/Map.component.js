module.exports = {
    templateUrl: 'views/map.component.html',
    bindings: {
        markers: '<'
    },
    controllerAs: 'map',
    controller: function (MapService) {
        let vm = this;
        initMap();


        function initMap() {
            MapService.getMapData();

            MapService.map = new google.maps.Map(document.getElementById('map'));
        }

        google.maps.event.addDomListener(document.getElementById("map"), 'load', MapService.setMarkers(vm.markers));
    }
};

//https://maps.googleapis.com/maps/api/staticmap?markers

// https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap&markers=&key=YOUR_API_KEY
// size:mid|color:red|San Francisco,CA|Oakland,CA|San Jose,CA - ENCODE this url with params