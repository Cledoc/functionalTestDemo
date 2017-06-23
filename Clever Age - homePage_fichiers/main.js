/*globals jQuery*/
require.config({
  baseUrl: '/wp-content/themes/roger/dist',

  paths: {
    'radio'          : '../components/radio/radio',
    'flexslider'     : '../components/flexslider/jquery.flexslider',
    'lodash'         : '../components/lodash/dist/lodash',
    'select2'        : '../components/select2/select2',
    'jquery.validate': '../components/jquery-validate/dist/jquery.validate.min',
    'swipebox'       : '../../../plugins/responsive-lightbox/assets/swipebox/source/jquery.swipebox.min',
    'equalized'      : '../components/ca.jquery.equalized/ca.jquery.equalized',
    'text'           : '../components/requirejs-text/text',
    'masonry'        : '../components/masonry/dist/masonry.pkgd.min',
    'fizzy-ui-utils' : '../components/fizzy-ui-utils',
    'outlayer'       : '../components/outlayer',
    'get-size'       : '../components/get-size'
  },

  shim: {
    radio     : {exports: 'radio'},
    flexslider: ['jquery'],
    select2   : ['jquery'],
    equalized : ['jquery']
  }
});

define('jquery', [], function () {
  'use strict';

  return jQuery;
});

require(['app'], function () {});
