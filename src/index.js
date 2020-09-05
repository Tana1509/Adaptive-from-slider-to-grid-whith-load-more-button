jQuery(document).ready(function($) {
  function testCarousel() {
    let owlitem = $(".test");
    if (window.matchMedia("(width: < 576px)").matches) {
      if (typeof owlitem.data("owl.carousel") != "undefined") {
        owlitem.data("owl.carousel").destroy();
        owlitem.trigger("refresh.owl.carousel");
      }
      owlitem.removeClass("owl-carousel");
    } else if (window.matchMedia("(min-width: 576px)").matches) {
      owlitem.addClass("owl-carousel");
      owlitem.trigger("refresh.owl.carousel");
      owlitem.owlCarousel({
        items: 4,
        slideSpeed: 500,
        animateOut: "fadeOut",
        touchDrag: false,
        mouseDrag: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 1000,
        dots: false,
        loop: true,
      });
    }
  }

  testCarousel();
  // $(window).matchMedia(testCarousel);

  // function testCarousel() {
  //   let checkWidth = $(window).width();
  //   let owlitem = $(".test");
  //   if (checkWidth < 576) {
  //     if (typeof owlitem.data("owl.carousel") != "undefined") {
  //       owlitem.data("owl.carousel").destroy();
  //       owlitem.trigger("refresh.owl.carousel");
  //     }
  //     owlitem.removeClass("owl-carousel");
  //   } else if (checkWidth > 576) {
  //     owlitem.addClass("owl-carousel").trigger("refresh.owl.carousel");
  //     owlitem.owlCarousel({
  //       items: 4,
  //       slideSpeed: 500,
  //       animateOut: "fadeOut",
  //       touchDrag: false,
  //       mouseDrag: false,
  //       autoplay: true,
  //       autoplaySpeed: 1000,
  //       autoplayTimeout: 1000,
  //       dots: false,
  //       loop: true,
  //     });
  //   }
  // }

  // testCarousel();
  // $(window).resize(testCarousel);
});
