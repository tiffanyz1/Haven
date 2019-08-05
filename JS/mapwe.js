var findloc;
var view;
var map;


function init(){
  var geolocation = new ol.Geolocation();
  geolocation.setTracking(true);
  geolocation.on('change:position', function(){
  findloc = ol.proj.fromLonLat(geolocation.getPosition());

	view = new ol.View({
		center: findloc,
		zoom: 19
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

window.onload = init;
