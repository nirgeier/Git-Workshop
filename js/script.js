(function () {
  $('.digit').on("webkitAnimationEnd", function (e) {
    this.classList.add('digit-color');
  });
})();