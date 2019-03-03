(function () {
  $('.digit').on("animationend", function (e) {
    this.classList.add('digit-color');
  });

  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

})();