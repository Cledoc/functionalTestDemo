define([
  'jquery'
], function ($) {
  'use strict';

  $.fn.skiplinks = function () {
    return this.each(function () {
      var jA11y = $(this);

      jA11y.on('focus', 'a', function () {
        jA11y.removeClass('c-js-mask');
      });
    });
  };
});
