$( document ).ready(function() {
  $.getJSON( "content.json", function( data ) {
     $.each( data.stories, function( key, val ) {
         $( "<article/>", {
            "class": key
          }).appendTo( "body" );
         $.each( val, function( x, y ) {
           var current = $("."+key);
             if(x == "title")
                   current.append("<h1>"+y+"</h1>");
             if(x == "image")
                         $("<img>").appendTo(current).attr("src", y[0]).attr("alt", y[1]);
             else
               current.append(y);
         });
     });
  });
});
