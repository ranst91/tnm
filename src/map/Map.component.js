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