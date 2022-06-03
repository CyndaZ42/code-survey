$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-theme");
    $("#light").show();
    $("#dark").hide();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-theme");
    $("#dark").show();
    $("#light").hide();
  });

  $("#form1").submit(function() {
    event.preventDefault();
    const beverage = parseInt($("#beverage").val());
    const food = parseInt($("#food").val());
    const animal = parseInt($("#animal").val());
    const car = parseInt($("#car").val());
    const game = parseInt($("#game").val());
    const score = (beverage + food + animal + car + game);
    if (food === 0 || beverage === 0 || animal === 0 || car === 0 || game === 0) {
      alert("Please complete all questions")
    }
    else {
      if(score < 13) {
        $("#output").text("Based on your answers, you should learn JavaScript");
      }
      else if(score > 24) {
        $("#output").text("Based on your answers, you should learn Python");
      }
      else if(score > 12) {
        $("#output").text("Based on your answers, you should learn C++");
      }
      $("#empty").show();
      $("#calculate").hide();
    }
  });

  $("#form2").clear(function() {
    location.reload();
  });
});