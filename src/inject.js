
//console.log("previousnext starting");

document.onkeypress = function(e){
  var key = e.keyCode? e.keyCode : e.charCode;
  if (key == 91 || key == 93){  // [ or ]
    var links = document.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
      var linkText = links[i].firstChild.nodeValue.trim();
      if (key == 93 && ["Next", ">"].filter(function(searchFor) { return searchFor == linkText; }).length > 0){
        window.location = links[i].href;
      }
      if (key == 91 && ["Previous", "<"].filter(function(searchFor) { return searchFor == linkText; }).length > 0){
        window.location = links[i].href;
      }
    }
  }
};

//console.log("previousnext completed");
