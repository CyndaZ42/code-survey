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
    const score = (beverage + food + animal + car);
    if (food === 0 || beverage === 0 || animal === 0 || car === 0) {
      alert("Please complete all questions")
    }
    else if(score < 10) {
      $("#output").text("programing language 1");
      $("#empty").show();
      $("#calculate").hide();
    }
    else if(score > 20) {
      $("#output").text("programing language 2");
      $("#empty").show();
      $("#calculate").hide();
    }
    else if(score > 9) {
      $("#output").text("programing language 3");
      $("#empty").show();
      $("#calculate").hide();
    }
  });

  $("#form2").clear(function() {
    location.reload();
  });
});