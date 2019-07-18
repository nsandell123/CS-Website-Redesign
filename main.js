$(document).ready(function()
{
  if (localStorage.getItem("lastPage") != null)
    switchPage(localStorage.getItem("lastPage"));
  else
    switchPage("home-page")

  if (localStorage.getItem("lastData") != null)
    getData(localStorage.getItem("lastData"));
  //bind - automatically calls the function (event)

});

// function switchPage(index) {
//   var pages = $(".page").toArray();
//   for(var i = 0; i < pages.length; i++) {
//     if(index == i) {
//       $(pages[i]).show(150);
//     }
//     else {
//       $(pages[i]).hide(250);
//     }
//   }
// }


function switchPage(id) {
  if (id == "home-page") {
    $("#back-button").css('visibility','hidden');
    $("#footer").css('visibility','hidden');
  } else {
    $("#back-button").css('visibility','visible');
    $("#footer").css('visibility','visible');
  }
  var pages = $(".page").toArray();
  for (p of pages) {
    console.log(p.id);
    if (p.id == id) {
      $("#" + p.id).show(150);
      localStorage.setItem("lastPage", id)
    } else {
      $("#" + p.id).hide(250);
    }
  }
  
}

// Function 1: will be used to retrieve data from document
  function getData(link) {
    localStorage.setItem("lastData", link);
    $.get(link, function(responseText) {
    displayData(responseText);
});


  }


// Function 2: will be used to load data that was retrieved onto Website
function displayData(text) {
  $(".text-section").html(text);
}
