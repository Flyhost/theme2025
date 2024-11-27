/**
 * HostGate JS File
 *
 * @package     HostGate
 * @author      NiftyTheme
 * @copyright   Copyright (c) NiftyTheme Limited 2017-2023
 * @version     1.0.0
 * @link        https://themeforest.net/user/niftytheme/
**/

(function ($) {

  // :: Page Loader
  // Select the page-loader element
  const pageLoader = document.querySelector('.page-loader');

  // Hide the page-loader when the page has finished loading
  window.onload = function () {
    if (pageLoader) {
      pageLoader.style.display = 'none';
    }
  };
  /* --------------------------------------------------------------------- */

  // :: Sticky Navbar

  let navbar = $('#theme-navbar');

  // Check if navbar exist
  if (navbar.length) {
    let sticky = navbar.offset().top;
    // Check if window scrolled
    $(window).scroll(function () {
      if ($(window).scrollTop() >= sticky) {
        // Add class "sticky"
        navbar.addClass("sticky");
      } else {
        // Remove class "sticky"
        navbar.removeClass("sticky");
      }
    });
  }
  // add class when start scrolling
  /* --------------------------------------------------------------------- */

  // :: Open and close (#theme-navbar-links)
  $('#open-links-btn').on('click', function () { $('#theme-navbar-links').addClass('open-links'); });
  $('#close-links-btn').on('click', function () { $('#theme-navbar-links').removeClass('open-links'); });
  /* --------------------------------------------------------------------- */

  // :: Show (#lang) menu
  $('#lang .current').on('click', function () { $(this).parent().toggleClass('open'); });

  // :: Hide (#lang) when clicking outside
  $(document).mouseup(function (e) {
    const langMenu = $("#lang");
    if (!langMenu.is(e.target) && langMenu.has(e.target).length === 0) { langMenu.removeClass('open'); }
  });
  /* --------------------------------------------------------------------- */

  // :: Open (.user-dropdown-menu)
  $('#user-menu-btn > img').on('click', function () { $('#user-menu-btn').toggleClass('open') });

  // :: Hide (.user-dropdown-menu) when clicking outside
  $(document).mouseup(function (e) {
    const userMenu = $("#user-menu-btn");
    if (!userMenu.is(e.target) && userMenu.has(e.target).length === 0) { userMenu.removeClass('open'); }
  });
  /* --------------------------------------------------------------------- */

  // :: Remove action for (a) that have (.dropdown-menu) and (.mega-menu)
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function (e) { e.preventDefault(); });
  $('#theme-navbar .link.has-mega-menu > a').on('click', function (e) { e.preventDefault(); });
  /* --------------------------------------------------------------------- */

  // :: Show and hide (.dropdown-menu)
  $('#theme-navbar .link.has-dropdown-menu > a').on('click', function () {
    $(this).parent().siblings().removeClass('open-dropdown-menu');
    $(this).parent().toggleClass('open-dropdown-menu');
  });

  // :: Hide (.dropdown-menu) when clicking outside
  $(document).mouseup(function (e) {
    const dropdownMenu = $("#theme-navbar .link.has-dropdown-menu");
    if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) { dropdownMenu.removeClass('open-dropdown-menu'); }
  });
  /* --------------------------------------------------------------------- */

  // Open and close (.mega-menu)
  $('#theme-navbar .link.has-mega-menu > a').on('click', function () {
    $(this).parent().siblings().removeClass('open-mega-menu');
    $(this).parent().toggleClass('open-mega-menu');
  });

  // :: Hide (.mega-menu) when clicking outside
  $(document).mouseup(function (e) {
    const megaMenu = $("#theme-navbar .link.has-mega-menu");
    if (!megaMenu.is(e.target) && megaMenu.has(e.target).length === 0) { megaMenu.removeClass('open-mega-menu'); }
  });

  $(window).resize(function (e) {
    const megaMenu = $("#theme-navbar .link.has-mega-menu");
    if (!megaMenu.is(e.target) && megaMenu.has(e.target).length === 0) { megaMenu.removeClass('open-mega-menu'); }
  });

  // :: Check if (##notices-bar) exists
  function megaOffsetTop() {
    $(document).mouseup(function () {
      if ($('#news-area').is(':visible')) {
        $('.mega-menu').css('top', '135px');
        $('.dropdown-menu').css('top', '135px');
      } else {
        $('.mega-menu').css('top', '135px');
        $('.dropdown-menu').css('top', '135px');
      }
    });
  }

  // Run the function if window width is greater than or equal (1199px)
  if ($(window).width() >= 1199) {
    megaOffsetTop();
  }

  // Run the function when resizing the window
  $(window).on('resize', function () {
    if ($(window).width() >= 1199) {
      megaOffsetTop();
    } else {
      $('.mega-menu').css('top', '0');
    }
  });
  /* --------------------------------------------------------------------- */

  // :: CUSTOM-MOUSE
  function mouseCursor() {
    let body = $('body');
    if (body) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n, i = 0,
        o = !1;
      window.onmousemove = function (s) { o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX }, body.on("mouseenter", "a, button, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
      }), body.on("mouseleave", "a, button, .cursor-pointer", function () {
        $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
      }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
  }
  // mouseCursor();
  /* --------------------------------------------------------------------- */

  // :: Index Page

  // (#filter-nav-i)
  $('#filter-nav-i .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').parent().siblings().find('.tab').removeClass('active');
  });

  // (#filter-nav-ii)
  $('#filter-nav-ii .tab').on('click', function () {
    // Add class (active).
    $(this).addClass('active').parent().siblings().find('.tab').removeClass('active');
    // Get (data-filter) value.
    const val = $(this).data('filter');
    // Compare table (#compare-table-i).
    $('#compare-table-i tbody tr:not(.hovered, .t-space)').addClass('tr-hide');
    $('#compare-table-i tbody tr[data-filter="' + val + '"]').removeClass('tr-hide');
  });
  /* --------------------------------------------------------------------- */

  // :: REVIEWS-SLIDER
  let reviewSlider = $('#reviews-slider');
  // Check if reviews slider exist!
  if (reviewSlider.length) {
    reviewSlider.slick({
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendDots: $('#reviews-slider-dots'),
      prevArrow: $('#reviews-slider-prevArrow'),
      nextArrow: $('#reviews-slider-nextArrow'),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  /* --------------------------------------------------------------------- */

  // :: Footer
  $('.theme-footer .list-title').on('click', function () {
    $(this).parent().toggleClass('open-list');
  });
  /* --------------------------------------------------------------------- */

  // :: GET THE CURRENT YEAR
  const year = new Date().getFullYear();
  $("#year").text(year)
  /* --------------------------------------------------------------------- */

  // :: Function to check the current background to add specific class

  // vars
  let currentSection = $('[data-check-background="check"]');
  let prevSection = currentSection.prev();
  let prevBackgroundColor = prevSection.css('background-color');

  // Check if prev section has background to add class "bg-2"
  if (prevBackgroundColor === "rgb(255, 255, 255)" || prevBackgroundColor === "rgba(0, 0, 0, 0)") {
    currentSection.addClass('bg-2');
  }
  /* --------------------------------------------------------------------- */

  // :: Function to add z-index

  // Select elements with attribute data-zindex
  let indexedElements = $('[data-zindex]');

  // Iterate through each selected element
  indexedElements.each(function () {

    // Get the value of data-zindex attribute
    let zindexValue = $(this).attr('data-zindex');

    // Check if position exists and is not equal to "absolute"
    if (!$(this).css('position') || $(this).css('position') !== 'absolute') {
      // Add "position: relative" to the CSS
      $(this).css('position', 'relative');
    }

    // Add the value to the CSS using the css() method
    $(this).css('z-index', zindexValue);

  });
  /* --------------------------------------------------------------------- */

  // :: PAGES: Terms.php
  // FOR: (.item).
  $('#terms-page .sidebar .item.has-menu > a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('open-menu').siblings().removeClass('open-menu');
  });
  // FOR: (.menu-item).
  $('#terms-page .sidebar .menu-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  /* --------------------------------------------------------------------- */

  // :: Modal
  // Get all elements with the attribute data-open-modal
  const elementsWithModalAttr = document.querySelectorAll('[data-open-modal]');

  // Add click event listener to each element
  elementsWithModalAttr.forEach(element => {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      // Retrieve the value of the data-modal attribute
      const modalValue = this.getAttribute('data-open-modal');

      // Find the modal element with the matching data-modal attribute value
      const modal = document.querySelector(`[data-modal="${modalValue}"]`);

      // Show the modal if found
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // Get all elements with the class .modal-close
  const closeButtons = document.querySelectorAll('.modal-close');

  // Add click event listener to each close button
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Find the parent element with the class .modal
      const modal = this.closest('.modal');

      // Fade out the modal
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  /* --------------------------------------------------------------------- */

}(jQuery));
