define(['jquery'], function ($) {
  'use strict';

  // Preload images
  $.preloadImages = function () {
    for (var i = 0; i < arguments.length; i += 1) {
      $('<img />').attr('src', arguments[i]);
    }
  };

  $.fn.imgHover = function () {
    this.each(function () {
      var jNode      = $(this),
          srcDefault = jNode.attr('src'),
          srcHover   = jNode.data('hover-img');

      $.preloadImages(srcHover);

      jNode
        .on('mouseenter.switch', function () {
          jNode.attr('src', srcHover);
        })
        .on('mouseleave.switch', function () {
          jNode.attr('src', srcDefault);
        });
    });

    return this;
  };
});
