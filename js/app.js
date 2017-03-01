var epsg27700 = new L.Proj.CRS(
	'EPSG:27700',
	'+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs',
	{
		// origin: [533280, 172600],
		resolutions: [8192, 4096, 2048]
	}
);

var map = L.map('map', {
	crs: epsg27700,
  continuousWorld: true,
  worldCopyJump: false
});

var attrib = "&copy Southwark http://maps.southwark.gov.uk";
var basemap = new L.TileLayer("http://maps.southwark.gov.uk/connect/controller/mapping/getmap?mapname=S_ConservationAreasSwk&width=286&height=286&x={x}&y=172600&zoom=#{z}&srs=epsg:27700&output=image/png", {
	tileSize: 286,
	maxZoom: 2860,
	minZoom: 2860,
	attribution: attrib
});

map.addLayer(basemap);
map.setView([51.4985854,-0.0713216], 2048)



// -----


// var attrib = "&copy Southwark http://maps.southwark.gov.uk";
// var basemap = new L.TileLayer("http://maps.southwark.gov.uk/connect/controller/mapping/getmap?mapname=S_ConservationAreasSwk&width=286&height=286&x=533280&y=172600&zoom={z}&srs=epsg:27700&output=image/png", {
// 	tileSize: 286,
// 	maxZoom: 14,
// 	minZoom: 0,
// 	attribution: attrib
// });


// // map.setView([51.4985854,-0.0713216], 1)

// var map = L.map('map', {
// 	crs: epsg27700,
// 	center: [51.4985854,-0.0713216],
// 	zoom: 12,
// 	// continuousWorld: true,
// 	// worldCopyJump: false
// })
// map.addLayer(basemap);