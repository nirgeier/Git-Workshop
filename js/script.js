(function () {
  $('.digit').on("animationend", function (e) {
    this.classList.add('digit-color');
  });

  /**
   * Animate counters
   */
  // $('.counter').each(function () {
  //   $(this).prop('Counter', 0)
  //     .animate({
  //       Counter: $(this).text()
  //     }, {
  //       duration: 5000,
  //       easing: 'swing',
  //       step: function (now) {
  //         $(this).text(Math.ceil(now).toLocaleString());
  //       }
  //     });
  // });


  //jQuery to collapse the navbar on scroll
  $(window).on("scroll scrollstart", function () {
    $(".navbar-nav").removeClass("show");
  });

})();