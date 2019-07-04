$(document).ready(function()
{
  switchPage(0);
  //bind - automatically calls the function (event)

});

function switchPage(index) {
  var pages = $(".page").toArray();
  for(var i = 0; i < pages.length; i++) {
    if(index == i) {
      $(pages[i]).show(150);
    }
    else {
      $(pages[i]).hide(250);
    }
  }
}
