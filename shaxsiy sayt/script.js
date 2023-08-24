$(window).scroll(function() {
    200 <= $(window).scrollTop() ? $(".back-to-top").addClass("back-to-top--show") : $(".back-to-top").removeClass("back-to-top--show")
  }),
  
  $(".back-to-top").click(function() {
    console.log("Button clicked");
  
    $("html, body").stop().animate({
        scrollTop: 0
    }, 500, "swing")
  })