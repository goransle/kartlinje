var map = L.map('map').setView([51.505, -0.09], 13);
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 12, attribution: osmAttrib});

//kartoppsett
map.setView(new L.LatLng(60.683629, 5.030783),3);
map.addLayer(osm);
//markers
var radoy = L.marker([60.683629, 5.030783]).addTo(map);
var bergen = L.marker([60.401430, 5.314131]).addTo(map);
var havet = L.marker([45.307612, -31.324032]).addTo(map);
var ellis = L.marker([40.699483, -74.039536]).addTo(map);
var brooklyn = L.marker([40.659225, -73.951874]).addTo(map);
var minnesota = L.marker([44.848076, -94.086414]).addTo(map);

var linje = L.polygon([
    radoy.getLatLng(),havet.getLatLng()

]).addTo(map);

$(radoy).click(function() {
   $("#radoy").show();
});
$(bergen).click(function() {
   $("#radoy").show();
});
$(havet).click(function() {
   $("#radoy").show();
});
$(ellis).click(function() {
   $("#radoy").show();
});
$(brooklyn).click(function() {
   $("#radoy").show();
});
$(minnesota).click(function() {
   $("#radoy").show();
});
$("button").click(function() {
   $(".info").hide();
});
function connectTheDots(data){
    var c = [];
    for(i in data._layers) {
        var x = data._layers[i]._latlng.lat;
        var y = data._layers[i]._latlng.lng;
        c.push([x, y]);
    }
    return c;
}
