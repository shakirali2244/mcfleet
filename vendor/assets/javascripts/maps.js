function initMap() {
  markers = [];
  // Create a map object and specify the DOM element for display.
  $('#map').height($(window).height() - $('#top-height').height()*1.4);
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:49.289922, lng: -123.130646 },
    zoom: 8
  });

    socket = io.connect('http://shakirali.me:3001');
 	 socket.on('location', function(data){
		 if (!map){
			 map = new google.maps.Map(document.getElementById('map'), {
				 center: {lat:49.289922,lng: -123.130646},
				 zoom: 8,
			 });
		 }
		console.log(data[i]);
                 deleteMarkers();
		 for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
			addMarker({lat: data[i].lat, lng: data[i].lng});
		 }
	 });
}

function addMarker(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
	markers.push(marker);
}

function setMapOnAllMarkers(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

function clearMarkers() {
	setMapOnAllMarkers(null);
}


function deleteMarkers() {
	clearMarkers();
	markers = [];
}

