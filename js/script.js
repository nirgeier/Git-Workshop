(function () {
  "use strict";
  jQuery(document).ready(
    function ($) {

      // Init Wow
      let wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        live: false
      });
      wow.init();

      $(".navbar-collapse a").on('click', function () {
        $(".navbar-collapse.collapse").removeClass('in');
      });

      // Navigation scrolls
      $('.navbar-nav li a').bind('click', function (event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');

          event.preventDefault();
        }
      });

      $('.digit').on("animationend", function (e) {
        this.classList.add('digit-color');
      });

      $('form.contactForm input').on('invalid', function (e) {
        $(this).siblings('.validation').show();
        window.location.href = "#contact";
      });

      // Contact form
      $('form.contactForm').submit(function (e) {
        event.preventDefault();
        let data = $(this).serialize();
        data += "&entry.1945533881=" + window.navigator.userAgent;

        jQuery.ajax({
          url: "https://docs.google.com/forms/d/e/1FAIpQLSf_4jvAw7Y8LaL5Qf_gMfMbxd8KsZo9CyJWE5nzQv2OpO5STw/formResponse",
          type: "POST",
          crossDomain: true,
          data: data,
          contentType: "application/josn",
          complete: function () {
            $('form.contactForm').hide();
            $('.form-feedback').removeClass('d-none');
          }
        });
        return false;
      });

      $(window).on("scroll scrollstart", function () {
        $(".navbar-nav").removeClass("show");
      });
    });
})();