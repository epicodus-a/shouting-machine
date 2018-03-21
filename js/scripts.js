$(document).ready(function(){
  $("form#shout-form").submit(function(event){

    event.preventDefault();
    var userinput1 = $("input#user-input").val().toUpperCase();
    // alert(userinput1);
    $(".output-name").text(userinput1);

    $(".output-name").show();

  });
});
