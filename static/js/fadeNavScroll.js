// scroll 내리면 nav 사라지고, 올리면 나타남.
var lastScrollTop = 0;
$(window).scroll(function () {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    // downscroll code
    $("#navbar").fadeOut(800);
    // $('.nav').css('right', '-');
  } else {
    // upscroll code
    $("#navbar").fadeIn(800);
  }
  lastScrollTop = st;
});

$("#hamburgerTrigger").change(function () {
  if ($("#hamburgerTrigger").is(":checked")) {
    $("#navbr").fadeOut(500);
  } else {
    $("#navbar").fadeIn(500);
  }
});
