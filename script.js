var map = L.map('map').setView([51.505, -0.09], 13);
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 12, attribution: osmAttrib});

//kartoppsett
map.setView(new L.LatLng(60.683629, 5.030783),3);
map.addLayer(osm);

var episoder = [];
var markers = [];
var currentEpisode = 0;

//legge til episoder
episoder.push(["Episode 1", [60.683629, 5.030783], "test.html",1]);
episoder.push(["Episode 2", [55.683629, 1.030783], "test2.html"]);
episoder.push(["Episode 3", [50.683629, 0.030783], "test2.html"]);
//iterere over episoder
episoder.forEach(function (item, index, array) {
  console.log(item[1]);
  markers[index] = L.marker(item[1]).addTo(map);
  $("nav").append("<button class='epButts' id='" + index + "'>" + item[0] + "</button>");
  $("article").append("<section id='"+ index +"'></section>");
  $("section#"+index).load("./episoder/"+item[2]);
  if(item[3] == 1){
    $("section#"+index).addClass("fullScreen");
  }
});

episodeHopper(currentEpisode);

//knappar
$(".epButts").click(function() {
  episodeHopper(this.id);

  //forsøk på "animasj
});
$(".lukk").click(function() {
  $("article").hide();
});
$("#neste").click(function() {
  if(currentEpisode !=markers.length-1){
    episodeHopper(currentEpisode+1);
  }
});
$("#forrige").click(function() {
  if(currentEpisode != 0){
    episodeHopper(currentEpisode-1);
  }
});
function episodeHopper(id){
  currentEpisode = parseInt(id);
  map.panTo(markers[id].getLatLng());
  $("section").hide();
  $("article").show();
  $("section#"+id).show();
  if($("section#"+id).hasClass("fullScreen")){
    $("article").addClass("fullScreen");
  }
  else{
    $("article").removeClass("fullScreen");
  }
  if(id != 0){
    L.polygon([
      markers[id].getLatLng(), markers[id-1].getLatLng()
    ]).addTo(map);
  }
}
