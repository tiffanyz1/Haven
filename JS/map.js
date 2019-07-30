var ourLoc;
var view;
var map;

function init(){
  ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);


	view = new ol.View({
		center: ourLoc,
		zoom: 6
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
}

// Step 4: We can run the init function when the window loads.
window.onload = init;
