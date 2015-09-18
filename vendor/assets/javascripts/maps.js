function initMap() {
  // Create a map object and specify the DOM element for display.
  $('#map').height($(window).height() - $('#top-height').height()*1.4);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

}

