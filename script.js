var map = L.map('map').setView([51.505, -0.09], 13);
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 12, attribution: osmAttrib});

//kartoppsett
map.setView(new L.LatLng(60.683629, 5.030783),3);
map.addLayer(osm);
//markers
var radoy = L.marker([60.683629, 5.030783]).addTo(map);
var bergen = L.marker([60.401430, 5.314131]);
var havet = L.marker([45.307612, -31.324032]);
var ellis = L.marker([40.699483, -74.039536]);
var brooklyn = L.marker([40.659225, -73.951874]);
var minnesota = L.marker([44.848076, -94.086414]);

//custom ikon
var boatIcon = L.icon({
    iconUrl: 'JBFord.png',
    shadowUrl: 'JBFord.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

$(radoy).click(function() {
   $("#radoy").show();
   bergen.addTo(map);
});
$(bergen).click(function() {
   $("#radoy").show();
   havet.addTo(map);
});
$(havet).click(function() {
   $("#radoy").show();
   ellis.addTo(map);
});
$(ellis).click(function() {
   $("#radoy").show();
   brooklyn.addTo(map);
});
$(brooklyn).click(function() {
   $("#radoy").show();
   minnesota.addTo(map);
});
$(minnesota).click(function() {
   $("#radoy").show();
});

$(".lukk").click(function() {
   $(".info").hide();
});
$(".neste").click(function() {
   $(".info").hide();
   map.panTo(havet.getLatLng());
});
