 $(document).ready(function(){
  var openingList = ["Kobe", "Batman", "Aston Martin", "Kate Beckinsale"];
  
    for (var i = 0; i < openingList.length; i++) {
        
    var gifButton = $("<button>");
    gifButton.addClass("a");
    gifButton.text(openingList[i]);
    gifButton.attr("data-type", openingList[i]);
        $("#openingList").append(gifButton);
    console.log(openingList)
    // };
 };
$("#gifItButton").on("click", function(event) {
  event.preventDefault();
  
  var input = $("#search-input").val()
  openingList.push(input);
    var newgifButton = $("<button>");
    newgifButton.text(input);
    newgifButton.addClass("a");
    newgifButton.attr("data-type", input);
    $("#openingList").append(newgifButton);
});
$(document).on("click", ".a", function(){
  $("#gifs-appear-here").empty();
  
  console.log("gifFinder")
      var gifs = $(this).attr("data-type");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        gifs + "&api_key=dc6zaTOxFJmzC&limit=10";
       $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
            console.log(results);  
for (var i = 0; i < results.length; i++) {
  results[i]
var gifDiv = $("<div>");
gifDiv.addClass("gifContent");
var rating = results[i].rating;
var p = $("<p>").text("Rating: " + rating);
var gifImage = $("<img>");
gifImage.attr("src", results[i].images.fixed_height.url);
gifDiv.prepend(p);
gifDiv.prepend(gifImage);
$("#gifs-appear-here").prepend(gifDiv); 
}
});
});
});