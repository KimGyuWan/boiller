$(document).ready(function () {

  setInterval(function () {
    $(".swipper-wrapper").animate({ "marginLeft": "-1200px" }, 400, function () {
      $("div:first-child", this).appendTo($(this));
      $(this).css("marginLeft", "0");
    });
  }, 3000);


})