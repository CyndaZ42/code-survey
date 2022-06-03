$(document).ready(function() {
  $("#form1").submit(function() {
    event.preventDefault();
    const beverage = parseInt($("#beverage").val());
    const food = parseInt($("#food").val());
    alert(beverage + food);
  });
});