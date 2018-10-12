$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = $("input#inputText").val();
    $(".outputText").text(input);
    $("#output").show();
  })
})
