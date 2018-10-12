var backgroundRotation = new Array();

backgroundRotation[0] = new Image();
backgroundRotation[0].src = "img/snowy-landscape.jpg";

backgroundRotation[1] = new Image();
backgroundRotation[1] = "img/snowy-mountain.jpg"

function nextImage(element) {
  var img = document.getElementById(element);
  var newPic = 0;
  for(var i = 0;i < backgroundRotation.length;i++) {
    if(imgArray[i].src == img.src) {
      if(i == backgroundRotation.length) {
        newPic = backgroundRotation[0].src;
        document.getElementById(element).src = newPic;
      }
      if(i != backgroundRotation.length) {
        newPic = backgroundRotation[i+1].src;
        document.getElementById(element).src = newPic;
      }
    }
  }
  setTimeout(nextImage(document.getElementById(newPic)), 1000);
}

function setBackgroundImage() {
  document.body.style.background = "url('img/snowy-landscape.jpg')";
}

window.onload = setBackgroundImage();

window.onload = setTimeout(nextImage(document.body.style.backgroundImage), 1000);

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = $("input#inputText").val();
    $(".outputText").text(input);
    $("#output").show();
    event.preventDefault();
  })
  event.preventDefault();
})
