// Creating the map object
let myMap = L.map("map", {
    center: [39.67599, -4.38593],
    zoom: 7.3
  });
  
// Adding the tile layers
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(myMap);

var basicMap = L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
 
// Adding base layers and overlays
var baseMaps = {
    "OpenTopoMap": OpenTopoMap,
    "OpenStreetMap": basicMap
};

// Adding layer control to the map
L.control.layers(baseMaps).addTo(myMap);

let geojson;

// Changing the color of the communities when mousing over the shape
function highlightFeature(ev) {
  let layer = ev.target;
  layer.setStyle({
    fillColor: 'red',
    fillOpactiy: 0.25
  });
}

function resetHighlight(ev){
  geojson.resetStyle(ev.target)
}

// function clickedFeature(ev){
//   let layer = ev.target;
//   layer.bindPopup({
//     d3.json("https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-communities.geojson").then((data) =>{
//       return (data.properties.name)
//     });
//   });
// };

function onEachFeature(feature, layer) {
  layer.on({
    mouseover:highlightFeature,
    mouseout: resetHighlight,
    // click: clickedFeature
  });
}

//   Use this link to get the GeoJSON data.
let link = "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-communities.geojson";

  // Getting our GeoJSON data
d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    geojson = L.geoJson(data, {
      style:{
        fillColor: 'yellow',
        fillOpacity: 0.25,
        color: 'black'
      },
      onEachFeature: onEachFeature
    }).addTo(myMap);
  });