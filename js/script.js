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


  /**
   * Get the form data
   */
  $(".contactForm").submit(function (event) {
    event.preventDefault();

    $.ajax({
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSf_4jvAw7Y8LaL5Qf_gMfMbxd8KsZo9CyJWE5nzQv2OpO5STw/formResponse",
      "method": "POST",
      data: $(this).serialize(),
      done: function (data) {
        alert('form submitted');
      }
    });

  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function () {
    $(".navbar-nav").removeClass("show");
  });

})();