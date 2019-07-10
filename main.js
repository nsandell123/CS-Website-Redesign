$(document).ready(function()
{
  switchPage("home-page");
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
  var pages = $(".page").toArray();
  for (p of pages) {
    console.log(p.id);
    if (p.id == id) {
      $("#" + p.id).show(150);
    } else {
      $("#" + p.id).hide(250);
    }
  }
}

// Function 1: will be used to retrieve data from document
  function getData(link) {
    $.get(link, function(responseText) {
    displayData(responseText);
});


  }



// Function 2: will be used to load data that was retrieved onto Website
function displayData(text) {
  $(".text-section").html(text);
}
