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
    const score = (beverage + food);
    if (food === 0 || beverage === 0) {
      alert("Please complete all questions")
    }
    else{
          alert(score);
    }
  });

  $("#form2").clear(function() {
    location.reload();
  });
});