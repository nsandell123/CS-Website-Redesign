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
function sendInfo() {

		var url = "NewFile1.html";

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		}
		else if (window.ActiveXObject) {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}

		try {
			request.onreadystatechange = getInfo;
			request.open("GET", url, true);
			request.send();
		}
		catch (e) {
			alert("Unable to connect to server");
		}
	}

	function getInfo() {
		if (request.readyState == 4) {
			var val = request.responseText;
			document.getElementById('chiru').innerHTML = val;
		}
	}
