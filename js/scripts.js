$(document).ready(function() {
  $("formOne").submit(function(event) {
    var input = $("input#input-text").val();
    $(".output-text").text(input);
    event.preventDefault();
  })
})
