var backgroundRotation = new Array();

backgroundRotation[0] = new Image();
backgroundRotation[0].src = img/snowylandscape.jpg;

function nextImage(element) {
  var img = document.getElementById(element);
  for(var i = 0;i < backgroundRotation.length;i++) {
    if(imgArray[i].src == img.src) {
      if(i === imgArray.length) {
        document.getElementById(element).src = imgArray[0].src;
        break;
      }
      document.getElementById(element).src = imgArray[i+1].src;
    }
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = $("input#inputText").val();
    $(".outputText").text(input);
    $("#output").show();
    event.preventDefault();
  })
  event.preventDefault();
})
