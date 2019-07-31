var ourLoc;
var view;
var map;


function init(){
  var geolocation = new ol.Geolocation();
  geolocation.setTracking(true);
  geolocation.on('change:position', function(){
  ourLoc = ol.proj.fromLonLat(geolocation.getPosition());


	view = new ol.View({
		center: ourLoc,
		zoom: 20
	});

	map = new ol.Map({
		target: 'map',
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM()
		  })
		],

		loadTilesWhileAnimating: true,
		view: view
	});
  })
}





// Step 4: We can run the init function when the window loads.
window.onload = init;

/*
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);*/
