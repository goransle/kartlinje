var map = L.map('map').setView([51.505, -0.09], 13);
var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 12, attribution: osmAttrib});

//kartoppsett
map.setView(new L.LatLng(60.683629, 5.030783),3);
map.addLayer(osm);

var episoder = [];
var markers = [];

//legge til episoder
episoder.push(["Episode 1", [60.683629, 5.030783], "test.html"]);
episoder.push(["Episode 2", [60.683629, 7.030783], "test2.html"]);
episoder.push(["Episode 3", [69.683629, 7.030783], "test2.html", 1]);
//iterere over episoder
episoder.forEach(function (item, index, array) {
  console.log(item[1]);
  markers[index] = L.marker(item[1]).addTo(map);
  $("nav").append("<button class='epButts' id='" + index + "'>" + item[0] + "</button>");
  $("article").append("<section id='"+ index +"'></section>");
  $("section#"+index).load("./"+item[2]);
  if(item[3] == 1){
    $("section#"+index).addClass("fullScreen");
  }
});

//knappar
$(".epButts").click(function() {
    map.panTo(markers[this.id].getLatLng());
    $("section").hide();
    $("article").show();
    $("section#"+this.id).show();
    if($("section#"+this.id).hasClass("fullScreen")){
      $("article").addClass("fullScreen");
    }
    else{
      $("article").removeClass("fullScreen");
    }
});
$(".lukk").click(function() {
    $("article").hide();
});
