$(document).ready(function() {
  if ($(window).height() > $("body").height()) {
    $(".footer").css("position","absolute").css("bottom",0);
  } else {
    $(".footer").css("position","static")
  }
});
