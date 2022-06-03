$(document).ready(function() {
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