// test for font-face version to load via Data URI'd CSS
// Basically, load WOFF unless it's android's default browser, which needs TTF, or ie8-, which needs eot
(function () {
  'use strict';

  var cssPath = document.getElementsByTagName('html')[0].getAttribute('data-theme-url');

  var availableFonts = {
    woff: cssPath + 'fonts/fonts-woff.css',
    ttf : cssPath + 'fonts/fonts-ttf.css',
    eot : cssPath + 'fonts/fonts-eot.css'
  };

  var choosenFont = availableFonts.woff,
      win = window,
      ua  = win.navigator.userAgent;

  if (ua.indexOf('Android') > -1 && ua.indexOf('like Gecko') > -1 && ua.indexOf('Chrome') === -1) {
    // android webkit browser, non-chrome
    choosenFont = availableFonts.ttf;
  } else if (win.document.documentElement.className.indexOf('ie-lte8') > -1) {
    // old IE (ie8-) via html classname
    choosenFont = availableFonts.eot;
  }

  // Load the fonts via inject into head
  var injectref = win.document.getElementsByTagName('script')[0];

  function loadCSS(href) {
    var fontslink = win.document.createElement('link');

    fontslink.rel = 'stylesheet';
    fontslink.href = href;

    if (injectref && injectref.parentNode) {
      injectref.parentNode.insertBefore(fontslink, injectref);
    } else {
      // uncommon, but oldIE timing
      window.setTimeout(function () {
        loadCSS(href);
      }, 15);
    }
  }

  loadCSS(choosenFont);
})();
