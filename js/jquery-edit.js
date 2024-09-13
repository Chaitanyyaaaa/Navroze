$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 2) {
      $(".top_arow").fadeIn();
      $(".header_fx").animate(1000).addClass("top_right_fx");
    } else {
      $(".top_arow").fadeOut();
      $(".header_fx").animate(1000).removeClass("top_right_fx");
    }
  });
  $(".top_arow").click(function () {
    $("body,html").animate({
      scrollTop: 0,
    });
  });

  $(".asp-active").click(function () {
    $("html").removeClass("responsive-menu-open");
    $(".responsive-menu-button").removeClass("is-active");
  });

  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass("show");
    // $(".responsive-menu-button").removeClass("is-active");
  });

  $(".close_frm_frm").click(function () {
    $(".banner_frm").css("display", "block");
  });
  $(".close_frm_frm_close").click(function () {
    $(".banner_frm").css("display", "none");
  });

  $(".asp_tb1").click(function () {
    $(this).addClass("active_tab");
    $(this).siblings().removeClass("active_tab");
    $(".bhk1").css("display", "block");
    $(".bhk2").css("display", "none");
    $(".bhk3").css("display", "none");
    $("#utmterm3").val("Price");
  });
  $(".asp_tb2").click(function () {
    $(this).addClass("active_tab");
    $(this).siblings().removeClass("active_tab");
    $(".bhk2").css("display", "block");
    $(".bhk1").css("display", "none");
    $(".bhk3").css("display", "none");
    $("#utmterm3").val("Cost Sheet");
  });
  $(".asp_tb3").click(function () {
    $(this).addClass("active_tab");
    $(this).siblings().removeClass("active_tab");
    $(".bhk3").css("display", "block");
    $(".bhk2").css("display", "none");
    $(".bhk1").css("display", "none");
    $("#utmterm3").val("Floor Plan");
  });
  $(".close-p").click(function () {
    $(".bhk-form").css("display", "none");
  });

  if ($(window).width() < 768) {
    $(".dl2").click(function () {
      $(".bhk-form").css("top", "50%");
    });
    $(".dl1").click(function () {
      $(".bhk-form").css("top", "8%");
    });
  } else {
    $(".btn-download").click(function () {
      $(".bhk-form").css("top", "32%");
    });
    $(".btn-download").click(function () {
      $(".bhk-form").css("top", "32%");
    });
  }

  jQuery(".fadeinup").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInUp", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".fadeindown").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInDown", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".bounceleft").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInLeft", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".bounceright").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInRight", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".bounceup").addClass("hidden").viewportChecker({
    classToAdd: "visible animated bounceInUp", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".fadeinleft").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInLeft", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".fadeinright").addClass("hidden").viewportChecker({
    classToAdd: "visible animated fadeInRight", // Class to add to the elements when they are visible
    offset: 100,
  });
  jQuery(".slideinright").addClass("hidden").viewportChecker({
    classToAdd: "visible animated slideInRight", // Class to add to the elements when they are visible
    offset: 100,
  });
});

(function ($, window) {
  var adjustAnchor = function () {
    var $anchor = $(":target"),
      fixedElementHeight = 40;
    if ($anchor.length > 0) {
      $("html, body").animate(
        {
          scrollTop: $anchor.offset().top - fixedElementHeight,
        },
        500
      );
    }
  };

  $(window).on("hashchange load", function () {
    adjustAnchor();
  });
})(jQuery, window);
