(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./vendor/css/foundation.css');
window.jQuery = require('jquery');
require('./vendor/js/foundation.min');
},{"./vendor/css/foundation.css":2,"./vendor/js/foundation.min":3,"jquery":5}],2:[function(require,module,exports){
var css = "meta.foundation-version {\n  font-family: \"/5.5.1/\"; }\n\nmeta.foundation-mq-small {\n  font-family: \"/only screen/\";\n  width: 0; }\n\nmeta.foundation-mq-small-only {\n  font-family: \"/only screen and (max-width: 40em)/\";\n  width: 0; }\n\nmeta.foundation-mq-medium {\n  font-family: \"/only screen and (min-width:40.063em)/\";\n  width: 40.063em; }\n\nmeta.foundation-mq-medium-only {\n  font-family: \"/only screen and (min-width:40.063em) and (max-width:64em)/\";\n  width: 40.063em; }\n\nmeta.foundation-mq-large {\n  font-family: \"/only screen and (min-width:64.063em)/\";\n  width: 64.063em; }\n\nmeta.foundation-mq-large-only {\n  font-family: \"/only screen and (min-width:64.063em) and (max-width:90em)/\";\n  width: 64.063em; }\n\nmeta.foundation-mq-xlarge {\n  font-family: \"/only screen and (min-width:90.063em)/\";\n  width: 90.063em; }\n\nmeta.foundation-mq-xlarge-only {\n  font-family: \"/only screen and (min-width:90.063em) and (max-width:120em)/\";\n  width: 90.063em; }\n\nmeta.foundation-mq-xxlarge {\n  font-family: \"/only screen and (min-width:120.063em)/\";\n  width: 120.063em; }\n\nmeta.foundation-data-attribute-namespace {\n  font-family: false; }\n\nhtml, body {\n  height: 100%; }\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-size: 100%; }\n\nbody {\n  background: #fff;\n  color: #222;\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1.5;\n  position: relative;\n  cursor: auto; }\n\na:hover {\n  cursor: pointer; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object {\n  max-width: none !important; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n.clearfix:after {\n  clear: both; }\n\n.hide {\n  display: none; }\n\n.invisible {\n  visibility: hidden; }\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px; }\n\nselect {\n  width: 100%; }\n\n.row {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  max-width: 62.5rem; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n  .row.collapse > .column,\n  .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row .row {\n    width: auto;\n    margin-left: -0.9375rem;\n    margin-right: -0.9375rem;\n    margin-top: 0;\n    margin-bottom: 0;\n    max-width: none; }\n    .row .row:before, .row .row:after {\n      content: \" \";\n      display: table; }\n    .row .row:after {\n      clear: both; }\n    .row .row.collapse {\n      width: auto;\n      margin: 0;\n      max-width: none; }\n      .row .row.collapse:before, .row .row.collapse:after {\n        content: \" \";\n        display: table; }\n      .row .row.collapse:after {\n        clear: both; }\n\n.column,\n.columns {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  width: 100%;\n  float: left; }\n\n[class*=\"column\"] + [class*=\"column\"]:last-child {\n  float: right; }\n\n[class*=\"column\"] + [class*=\"column\"].end {\n  float: left; }\n\n@media only screen {\n  .small-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n\n  .small-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n\n  .small-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n\n  .small-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n\n  .small-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n\n  .small-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n\n  .small-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n\n  .small-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n\n  .small-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n\n  .small-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n\n  .small-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n\n  .small-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n\n  .small-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n\n  .small-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n\n  .small-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n\n  .small-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n\n  .small-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n\n  .small-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n\n  .small-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n\n  .small-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n\n  .small-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n\n  .small-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n\n  .small-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n\n  .small-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n\n  .small-1 {\n    width: 8.33333%; }\n\n  .small-2 {\n    width: 16.66667%; }\n\n  .small-3 {\n    width: 25%; }\n\n  .small-4 {\n    width: 33.33333%; }\n\n  .small-5 {\n    width: 41.66667%; }\n\n  .small-6 {\n    width: 50%; }\n\n  .small-7 {\n    width: 58.33333%; }\n\n  .small-8 {\n    width: 66.66667%; }\n\n  .small-9 {\n    width: 75%; }\n\n  .small-10 {\n    width: 83.33333%; }\n\n  .small-11 {\n    width: 91.66667%; }\n\n  .small-12 {\n    width: 100%; }\n\n  .small-offset-0 {\n    margin-left: 0% !important; }\n\n  .small-offset-1 {\n    margin-left: 8.33333% !important; }\n\n  .small-offset-2 {\n    margin-left: 16.66667% !important; }\n\n  .small-offset-3 {\n    margin-left: 25% !important; }\n\n  .small-offset-4 {\n    margin-left: 33.33333% !important; }\n\n  .small-offset-5 {\n    margin-left: 41.66667% !important; }\n\n  .small-offset-6 {\n    margin-left: 50% !important; }\n\n  .small-offset-7 {\n    margin-left: 58.33333% !important; }\n\n  .small-offset-8 {\n    margin-left: 66.66667% !important; }\n\n  .small-offset-9 {\n    margin-left: 75% !important; }\n\n  .small-offset-10 {\n    margin-left: 83.33333% !important; }\n\n  .small-offset-11 {\n    margin-left: 91.66667% !important; }\n\n  .small-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n\n  .column.small-centered,\n  .columns.small-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n\n  .column.small-uncentered,\n  .columns.small-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n\n  .column.small-centered:last-child,\n  .columns.small-centered:last-child {\n    float: none; }\n\n  .column.small-uncentered:last-child,\n  .columns.small-uncentered:last-child {\n    float: left; }\n\n  .column.small-uncentered.opposite,\n  .columns.small-uncentered.opposite {\n    float: right; }\n\n  .row.small-collapse > .column,\n  .row.small-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.small-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.small-uncollapse > .column,\n  .row.small-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n@media only screen and (min-width: 40.063em) {\n  .medium-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n\n  .medium-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n\n  .medium-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n\n  .medium-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n\n  .medium-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n\n  .medium-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n\n  .medium-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n\n  .medium-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n\n  .medium-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n\n  .medium-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n\n  .medium-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n\n  .medium-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n\n  .medium-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n\n  .medium-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n\n  .medium-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n\n  .medium-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n\n  .medium-1 {\n    width: 8.33333%; }\n\n  .medium-2 {\n    width: 16.66667%; }\n\n  .medium-3 {\n    width: 25%; }\n\n  .medium-4 {\n    width: 33.33333%; }\n\n  .medium-5 {\n    width: 41.66667%; }\n\n  .medium-6 {\n    width: 50%; }\n\n  .medium-7 {\n    width: 58.33333%; }\n\n  .medium-8 {\n    width: 66.66667%; }\n\n  .medium-9 {\n    width: 75%; }\n\n  .medium-10 {\n    width: 83.33333%; }\n\n  .medium-11 {\n    width: 91.66667%; }\n\n  .medium-12 {\n    width: 100%; }\n\n  .medium-offset-0 {\n    margin-left: 0% !important; }\n\n  .medium-offset-1 {\n    margin-left: 8.33333% !important; }\n\n  .medium-offset-2 {\n    margin-left: 16.66667% !important; }\n\n  .medium-offset-3 {\n    margin-left: 25% !important; }\n\n  .medium-offset-4 {\n    margin-left: 33.33333% !important; }\n\n  .medium-offset-5 {\n    margin-left: 41.66667% !important; }\n\n  .medium-offset-6 {\n    margin-left: 50% !important; }\n\n  .medium-offset-7 {\n    margin-left: 58.33333% !important; }\n\n  .medium-offset-8 {\n    margin-left: 66.66667% !important; }\n\n  .medium-offset-9 {\n    margin-left: 75% !important; }\n\n  .medium-offset-10 {\n    margin-left: 83.33333% !important; }\n\n  .medium-offset-11 {\n    margin-left: 91.66667% !important; }\n\n  .medium-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n\n  .column.medium-centered,\n  .columns.medium-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n\n  .column.medium-uncentered,\n  .columns.medium-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n\n  .column.medium-centered:last-child,\n  .columns.medium-centered:last-child {\n    float: none; }\n\n  .column.medium-uncentered:last-child,\n  .columns.medium-uncentered:last-child {\n    float: left; }\n\n  .column.medium-uncentered.opposite,\n  .columns.medium-uncentered.opposite {\n    float: right; }\n\n  .row.medium-collapse > .column,\n  .row.medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.medium-uncollapse > .column,\n  .row.medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n\n  .push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n\n  .pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .large-push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n\n  .large-pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n\n  .large-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n\n  .large-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n\n  .large-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n\n  .large-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n\n  .large-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n\n  .large-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n\n  .large-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n\n  .large-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n\n  .large-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n\n  .large-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n\n  .large-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n\n  .large-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n\n  .large-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n\n  .large-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n\n  .large-1 {\n    width: 8.33333%; }\n\n  .large-2 {\n    width: 16.66667%; }\n\n  .large-3 {\n    width: 25%; }\n\n  .large-4 {\n    width: 33.33333%; }\n\n  .large-5 {\n    width: 41.66667%; }\n\n  .large-6 {\n    width: 50%; }\n\n  .large-7 {\n    width: 58.33333%; }\n\n  .large-8 {\n    width: 66.66667%; }\n\n  .large-9 {\n    width: 75%; }\n\n  .large-10 {\n    width: 83.33333%; }\n\n  .large-11 {\n    width: 91.66667%; }\n\n  .large-12 {\n    width: 100%; }\n\n  .large-offset-0 {\n    margin-left: 0% !important; }\n\n  .large-offset-1 {\n    margin-left: 8.33333% !important; }\n\n  .large-offset-2 {\n    margin-left: 16.66667% !important; }\n\n  .large-offset-3 {\n    margin-left: 25% !important; }\n\n  .large-offset-4 {\n    margin-left: 33.33333% !important; }\n\n  .large-offset-5 {\n    margin-left: 41.66667% !important; }\n\n  .large-offset-6 {\n    margin-left: 50% !important; }\n\n  .large-offset-7 {\n    margin-left: 58.33333% !important; }\n\n  .large-offset-8 {\n    margin-left: 66.66667% !important; }\n\n  .large-offset-9 {\n    margin-left: 75% !important; }\n\n  .large-offset-10 {\n    margin-left: 83.33333% !important; }\n\n  .large-offset-11 {\n    margin-left: 91.66667% !important; }\n\n  .large-reset-order {\n    margin-left: 0;\n    margin-right: 0;\n    left: auto;\n    right: auto;\n    float: left; }\n\n  .column.large-centered,\n  .columns.large-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n\n  .column.large-uncentered,\n  .columns.large-uncentered {\n    margin-left: 0;\n    margin-right: 0;\n    float: left; }\n\n  .column.large-centered:last-child,\n  .columns.large-centered:last-child {\n    float: none; }\n\n  .column.large-uncentered:last-child,\n  .columns.large-uncentered:last-child {\n    float: left; }\n\n  .column.large-uncentered.opposite,\n  .columns.large-uncentered.opposite {\n    float: right; }\n\n  .row.large-collapse > .column,\n  .row.large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.large-uncollapse > .column,\n  .row.large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n\n  .push-0 {\n    position: relative;\n    left: 0%;\n    right: auto; }\n\n  .pull-0 {\n    position: relative;\n    right: 0%;\n    left: auto; }\n\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\nbutton, .button {\n  border-style: solid;\n  border-width: 0;\n  cursor: pointer;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: normal;\n  margin: 0 0 1.25rem;\n  position: relative;\n  text-decoration: none;\n  text-align: center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  border-radius: 0;\n  display: inline-block;\n  padding-top: 1rem;\n  padding-right: 2rem;\n  padding-bottom: 1.0625rem;\n  padding-left: 2rem;\n  font-size: 1rem;\n  background-color: #008CBA;\n  border-color: #007095;\n  color: #FFFFFF;\n  transition: background-color 300ms ease-out; }\n  button:hover, button:focus, .button:hover, .button:focus {\n    background-color: #007095; }\n  button:hover, button:focus, .button:hover, .button:focus {\n    color: #FFFFFF; }\n  button.secondary, .button.secondary {\n    background-color: #e7e7e7;\n    border-color: #b9b9b9;\n    color: #333333; }\n    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {\n      background-color: #b9b9b9; }\n    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {\n      color: #333333; }\n  button.success, .button.success {\n    background-color: #43AC6A;\n    border-color: #368a55;\n    color: #FFFFFF; }\n    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {\n      background-color: #368a55; }\n    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {\n      color: #FFFFFF; }\n  button.alert, .button.alert {\n    background-color: #f04124;\n    border-color: #cf2a0e;\n    color: #FFFFFF; }\n    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {\n      background-color: #cf2a0e; }\n    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {\n      color: #FFFFFF; }\n  button.warning, .button.warning {\n    background-color: #f08a24;\n    border-color: #cf6e0e;\n    color: #FFFFFF; }\n    button.warning:hover, button.warning:focus, .button.warning:hover, .button.warning:focus {\n      background-color: #cf6e0e; }\n    button.warning:hover, button.warning:focus, .button.warning:hover, .button.warning:focus {\n      color: #FFFFFF; }\n  button.info, .button.info {\n    background-color: #a0d3e8;\n    border-color: #61b6d9;\n    color: #333333; }\n    button.info:hover, button.info:focus, .button.info:hover, .button.info:focus {\n      background-color: #61b6d9; }\n    button.info:hover, button.info:focus, .button.info:hover, .button.info:focus {\n      color: #FFFFFF; }\n  button.large, .button.large {\n    padding-top: 1.125rem;\n    padding-right: 2.25rem;\n    padding-bottom: 1.1875rem;\n    padding-left: 2.25rem;\n    font-size: 1.25rem; }\n  button.small, .button.small {\n    padding-top: 0.875rem;\n    padding-right: 1.75rem;\n    padding-bottom: 0.9375rem;\n    padding-left: 1.75rem;\n    font-size: 0.8125rem; }\n  button.tiny, .button.tiny {\n    padding-top: 0.625rem;\n    padding-right: 1.25rem;\n    padding-bottom: 0.6875rem;\n    padding-left: 1.25rem;\n    font-size: 0.6875rem; }\n  button.expand, .button.expand {\n    padding-right: 0;\n    padding-left: 0;\n    width: 100%; }\n  button.left-align, .button.left-align {\n    text-align: left;\n    text-indent: 0.75rem; }\n  button.right-align, .button.right-align {\n    text-align: right;\n    padding-right: 0.75rem; }\n  button.radius, .button.radius {\n    border-radius: 3px; }\n  button.round, .button.round {\n    border-radius: 1000px; }\n  button.disabled, button[disabled], .button.disabled, .button[disabled] {\n    background-color: #008CBA;\n    border-color: #007095;\n    color: #FFFFFF;\n    cursor: default;\n    opacity: 0.7;\n    box-shadow: none; }\n    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #007095; }\n    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      color: #FFFFFF; }\n    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #008CBA; }\n    button.disabled.secondary, button[disabled].secondary, .button.disabled.secondary, .button[disabled].secondary {\n      background-color: #e7e7e7;\n      border-color: #b9b9b9;\n      color: #333333;\n      cursor: default;\n      opacity: 0.7;\n      box-shadow: none; }\n      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n        background-color: #b9b9b9; }\n      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n        color: #333333; }\n      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n        background-color: #e7e7e7; }\n    button.disabled.success, button[disabled].success, .button.disabled.success, .button[disabled].success {\n      background-color: #43AC6A;\n      border-color: #368a55;\n      color: #FFFFFF;\n      cursor: default;\n      opacity: 0.7;\n      box-shadow: none; }\n      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n        background-color: #368a55; }\n      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n        color: #FFFFFF; }\n      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n        background-color: #43AC6A; }\n    button.disabled.alert, button[disabled].alert, .button.disabled.alert, .button[disabled].alert {\n      background-color: #f04124;\n      border-color: #cf2a0e;\n      color: #FFFFFF;\n      cursor: default;\n      opacity: 0.7;\n      box-shadow: none; }\n      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n        background-color: #cf2a0e; }\n      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n        color: #FFFFFF; }\n      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n        background-color: #f04124; }\n    button.disabled.warning, button[disabled].warning, .button.disabled.warning, .button[disabled].warning {\n      background-color: #f08a24;\n      border-color: #cf6e0e;\n      color: #FFFFFF;\n      cursor: default;\n      opacity: 0.7;\n      box-shadow: none; }\n      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n        background-color: #cf6e0e; }\n      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n        color: #FFFFFF; }\n      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n        background-color: #f08a24; }\n    button.disabled.info, button[disabled].info, .button.disabled.info, .button[disabled].info {\n      background-color: #a0d3e8;\n      border-color: #61b6d9;\n      color: #333333;\n      cursor: default;\n      opacity: 0.7;\n      box-shadow: none; }\n      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n        background-color: #61b6d9; }\n      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n        color: #FFFFFF; }\n      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n        background-color: #a0d3e8; }\n\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n@media only screen and (min-width: 40.063em) {\n  button, .button {\n    display: inline-block; } }\n/* Standard Forms */\nform {\n  margin: 0 0 1rem; }\n\n/* Using forms within rows, we need to set some defaults */\nform .row .row {\n  margin: 0 -0.5rem; }\n  form .row .row .column,\n  form .row .row .columns {\n    padding: 0 0.5rem; }\n  form .row .row.collapse {\n    margin: 0; }\n    form .row .row.collapse .column,\n    form .row .row.collapse .columns {\n      padding: 0; }\n    form .row .row.collapse input {\n      -webkit-border-bottom-right-radius: 0;\n      -webkit-border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\nform .row input.column,\nform .row input.columns,\nform .row textarea.column,\nform .row textarea.columns {\n  padding-left: 0.5rem; }\n\n/* Label Styles */\nlabel {\n  font-size: 0.875rem;\n  color: #4d4d4d;\n  cursor: pointer;\n  display: block;\n  font-weight: normal;\n  line-height: 1.5;\n  margin-bottom: 0;\n  /* Styles for required inputs */ }\n  label.right {\n    float: none !important;\n    text-align: right; }\n  label.inline {\n    margin: 0 0 1rem 0;\n    padding: 0.5625rem 0; }\n  label small {\n    text-transform: capitalize;\n    color: #676767; }\n\n/* Attach elements to the beginning or end of an input */\n.prefix,\n.postfix {\n  display: block;\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  width: 100%;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-style: solid;\n  border-width: 1px;\n  overflow: visible;\n  font-size: 0.875rem;\n  height: 2.3125rem;\n  line-height: 2.3125rem; }\n\n/* Adjust padding, alignment and radius if pre/post element is a button */\n.postfix.button {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  border: none; }\n\n.prefix.button {\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  border: none; }\n\n.prefix.button.radius {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.postfix.button.radius {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.prefix.button.round {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 1000px;\n  -webkit-border-top-left-radius: 1000px;\n  border-bottom-left-radius: 1000px;\n  border-top-left-radius: 1000px; }\n\n.postfix.button.round {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 1000px;\n  -webkit-border-top-right-radius: 1000px;\n  border-bottom-right-radius: 1000px;\n  border-top-right-radius: 1000px; }\n\n/* Separate prefix and postfix styles when on span or label so buttons keep their own */\nspan.prefix, label.prefix {\n  background: #f2f2f2;\n  border-right: none;\n  color: #333333;\n  border-color: #cccccc; }\n\nspan.postfix, label.postfix {\n  background: #f2f2f2;\n  border-left: none;\n  color: #333333;\n  border-color: #cccccc; }\n\n/* We use this to get basic styling on all basic form elements */\ninput[type=\"text\"], input[type=\"password\"], input[type=\"date\"], input[type=\"datetime\"], input[type=\"datetime-local\"], input[type=\"month\"], input[type=\"week\"], input[type=\"email\"], input[type=\"number\"], input[type=\"search\"], input[type=\"tel\"], input[type=\"time\"], input[type=\"url\"], input[type=\"color\"], textarea {\n  -webkit-appearance: none;\n  border-radius: 0;\n  background-color: #FFFFFF;\n  font-family: inherit;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #cccccc;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  color: rgba(0, 0, 0, 0.75);\n  display: block;\n  font-size: 0.875rem;\n  margin: 0 0 1rem 0;\n  padding: 0.5rem;\n  height: 2.3125rem;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  transition: all 0.15s linear; }\n  input[type=\"text\"]:focus, input[type=\"password\"]:focus, input[type=\"date\"]:focus, input[type=\"datetime\"]:focus, input[type=\"datetime-local\"]:focus, input[type=\"month\"]:focus, input[type=\"week\"]:focus, input[type=\"email\"]:focus, input[type=\"number\"]:focus, input[type=\"search\"]:focus, input[type=\"tel\"]:focus, input[type=\"time\"]:focus, input[type=\"url\"]:focus, input[type=\"color\"]:focus, textarea:focus {\n    background: #fafafa;\n    border-color: #999999;\n    outline: none; }\n  input[type=\"text\"]:disabled, input[type=\"password\"]:disabled, input[type=\"date\"]:disabled, input[type=\"datetime\"]:disabled, input[type=\"datetime-local\"]:disabled, input[type=\"month\"]:disabled, input[type=\"week\"]:disabled, input[type=\"email\"]:disabled, input[type=\"number\"]:disabled, input[type=\"search\"]:disabled, input[type=\"tel\"]:disabled, input[type=\"time\"]:disabled, input[type=\"url\"]:disabled, input[type=\"color\"]:disabled, textarea:disabled {\n    background-color: #DDDDDD;\n    cursor: default; }\n  input[type=\"text\"][disabled], input[type=\"text\"][readonly], fieldset[disabled] input[type=\"text\"], input[type=\"password\"][disabled], input[type=\"password\"][readonly], fieldset[disabled] input[type=\"password\"], input[type=\"date\"][disabled], input[type=\"date\"][readonly], fieldset[disabled] input[type=\"date\"], input[type=\"datetime\"][disabled], input[type=\"datetime\"][readonly], fieldset[disabled] input[type=\"datetime\"], input[type=\"datetime-local\"][disabled], input[type=\"datetime-local\"][readonly], fieldset[disabled] input[type=\"datetime-local\"], input[type=\"month\"][disabled], input[type=\"month\"][readonly], fieldset[disabled] input[type=\"month\"], input[type=\"week\"][disabled], input[type=\"week\"][readonly], fieldset[disabled] input[type=\"week\"], input[type=\"email\"][disabled], input[type=\"email\"][readonly], fieldset[disabled] input[type=\"email\"], input[type=\"number\"][disabled], input[type=\"number\"][readonly], fieldset[disabled] input[type=\"number\"], input[type=\"search\"][disabled], input[type=\"search\"][readonly], fieldset[disabled] input[type=\"search\"], input[type=\"tel\"][disabled], input[type=\"tel\"][readonly], fieldset[disabled] input[type=\"tel\"], input[type=\"time\"][disabled], input[type=\"time\"][readonly], fieldset[disabled] input[type=\"time\"], input[type=\"url\"][disabled], input[type=\"url\"][readonly], fieldset[disabled] input[type=\"url\"], input[type=\"color\"][disabled], input[type=\"color\"][readonly], fieldset[disabled] input[type=\"color\"], textarea[disabled], textarea[readonly], fieldset[disabled] textarea {\n    background-color: #DDDDDD;\n    cursor: default; }\n  input[type=\"text\"].radius, input[type=\"password\"].radius, input[type=\"date\"].radius, input[type=\"datetime\"].radius, input[type=\"datetime-local\"].radius, input[type=\"month\"].radius, input[type=\"week\"].radius, input[type=\"email\"].radius, input[type=\"number\"].radius, input[type=\"search\"].radius, input[type=\"tel\"].radius, input[type=\"time\"].radius, input[type=\"url\"].radius, input[type=\"color\"].radius, textarea.radius {\n    border-radius: 3px; }\n\nform .row .prefix-radius.row.collapse input,\nform .row .prefix-radius.row.collapse textarea,\nform .row .prefix-radius.row.collapse select,\nform .row .prefix-radius.row.collapse button {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\nform .row .prefix-radius.row.collapse .prefix {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\nform .row .postfix-radius.row.collapse input,\nform .row .postfix-radius.row.collapse textarea,\nform .row .postfix-radius.row.collapse select,\nform .row .postfix-radius.row.collapse button {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 3px;\n  -webkit-border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\nform .row .postfix-radius.row.collapse .postfix {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 3px;\n  -webkit-border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\nform .row .prefix-round.row.collapse input,\nform .row .prefix-round.row.collapse textarea,\nform .row .prefix-round.row.collapse select,\nform .row .prefix-round.row.collapse button {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 1000px;\n  -webkit-border-top-right-radius: 1000px;\n  border-bottom-right-radius: 1000px;\n  border-top-right-radius: 1000px; }\nform .row .prefix-round.row.collapse .prefix {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 1000px;\n  -webkit-border-top-left-radius: 1000px;\n  border-bottom-left-radius: 1000px;\n  border-top-left-radius: 1000px; }\nform .row .postfix-round.row.collapse input,\nform .row .postfix-round.row.collapse textarea,\nform .row .postfix-round.row.collapse select,\nform .row .postfix-round.row.collapse button {\n  border-radius: 0;\n  -webkit-border-bottom-left-radius: 1000px;\n  -webkit-border-top-left-radius: 1000px;\n  border-bottom-left-radius: 1000px;\n  border-top-left-radius: 1000px; }\nform .row .postfix-round.row.collapse .postfix {\n  border-radius: 0;\n  -webkit-border-bottom-right-radius: 1000px;\n  -webkit-border-top-right-radius: 1000px;\n  border-bottom-right-radius: 1000px;\n  border-top-right-radius: 1000px; }\n\ninput[type=\"submit\"] {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n/* Respect enforced amount of rows for textarea */\ntextarea[rows] {\n  height: auto; }\n\n/* Not allow resize out of parent */\ntextarea {\n  max-width: 100%; }\n\n/* Add height value for select elements to match text input height */\nselect {\n  -webkit-appearance: none !important;\n  border-radius: 0;\n  background-color: #FAFAFA;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+);\n  background-position: 100% center;\n  background-repeat: no-repeat;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #cccccc;\n  padding: 0.5rem;\n  font-size: 0.875rem;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  color: rgba(0, 0, 0, 0.75);\n  line-height: normal;\n  border-radius: 0;\n  height: 2.3125rem; }\n  select::-ms-expand {\n    display: none; }\n  select.radius {\n    border-radius: 3px; }\n  select:hover {\n    background-color: #f3f3f3;\n    border-color: #999999; }\n  select:disabled {\n    background-color: #DDDDDD;\n    cursor: default; }\n  select[multiple] {\n    height: auto; }\n\n/* Adjust margin for form elements below */\ninput[type=\"file\"],\ninput[type=\"checkbox\"],\ninput[type=\"radio\"],\nselect {\n  margin: 0 0 1rem 0; }\n\ninput[type=\"checkbox\"] + label,\ninput[type=\"radio\"] + label {\n  display: inline-block;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0;\n  vertical-align: baseline; }\n\n/* Normalize file input width */\ninput[type=\"file\"] {\n  width: 100%; }\n\n/* HTML5 Number spinners settings */\n/* We add basic fieldset styling */\nfieldset {\n  border: 1px solid #DDDDDD;\n  padding: 1.25rem;\n  margin: 1.125rem 0; }\n  fieldset legend {\n    font-weight: bold;\n    background: #FFFFFF;\n    padding: 0 0.1875rem;\n    margin: 0;\n    margin-left: -0.1875rem; }\n\n/* Error Handling */\n[data-abide] .error small.error, [data-abide] .error span.error, [data-abide] span.error, [data-abide] small.error {\n  display: block;\n  padding: 0.375rem 0.5625rem 0.5625rem;\n  margin-top: -1px;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-style: italic;\n  background: #f04124;\n  color: #FFFFFF; }\n[data-abide] span.error, [data-abide] small.error {\n  display: none; }\n\nspan.error, small.error {\n  display: block;\n  padding: 0.375rem 0.5625rem 0.5625rem;\n  margin-top: -1px;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-style: italic;\n  background: #f04124;\n  color: #FFFFFF; }\n\n.error input,\n.error textarea,\n.error select {\n  margin-bottom: 0; }\n.error input[type=\"checkbox\"],\n.error input[type=\"radio\"] {\n  margin-bottom: 1rem; }\n.error label,\n.error label.error {\n  color: #f04124; }\n.error small.error {\n  display: block;\n  padding: 0.375rem 0.5625rem 0.5625rem;\n  margin-top: -1px;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: normal;\n  font-style: italic;\n  background: #f04124;\n  color: #FFFFFF; }\n.error > label > small {\n  color: #676767;\n  background: transparent;\n  padding: 0;\n  text-transform: capitalize;\n  font-style: normal;\n  font-size: 60%;\n  margin: 0;\n  display: inline; }\n.error span.error-message {\n  display: block; }\n\ninput.error,\ntextarea.error,\nselect.error {\n  margin-bottom: 0; }\n\nlabel.error {\n  color: #f04124; }\n\nmeta.foundation-mq-topbar {\n  font-family: \"/only screen and (min-width:40.063em)/\";\n  width: 40.063em; }\n\n/* Wrapped around .top-bar to contain to grid width */\n.contain-to-grid {\n  width: 100%;\n  background: #333333; }\n  .contain-to-grid .top-bar {\n    margin-bottom: 0; }\n\n.fixed {\n  width: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  z-index: 99; }\n  .fixed.expanded:not(.top-bar) {\n    overflow-y: auto;\n    height: auto;\n    width: 100%;\n    max-height: 100%; }\n    .fixed.expanded:not(.top-bar) .title-area {\n      position: fixed;\n      width: 100%;\n      z-index: 99; }\n    .fixed.expanded:not(.top-bar) .top-bar-section {\n      z-index: 98;\n      margin-top: 2.8125rem; }\n\n.top-bar {\n  overflow: hidden;\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  position: relative;\n  background: #333333;\n  margin-bottom: 0; }\n  .top-bar ul {\n    margin-bottom: 0;\n    list-style: none; }\n  .top-bar .row {\n    max-width: none; }\n  .top-bar form,\n  .top-bar input {\n    margin-bottom: 0; }\n  .top-bar input {\n    height: 1.75rem;\n    padding-top: .35rem;\n    padding-bottom: .35rem;\n    font-size: 0.75rem; }\n  .top-bar .button, .top-bar button {\n    padding-top: 0.4125rem;\n    padding-bottom: 0.4125rem;\n    margin-bottom: 0;\n    font-size: 0.75rem; }\n    @media only screen and (max-width: 40em) {\n      .top-bar .button, .top-bar button {\n        position: relative;\n        top: -1px; } }\n  .top-bar .title-area {\n    position: relative;\n    margin: 0; }\n  .top-bar .name {\n    height: 2.8125rem;\n    margin: 0;\n    font-size: 16px; }\n    .top-bar .name h1, .top-bar .name h2, .top-bar .name h3, .top-bar .name h4, .top-bar .name p, .top-bar .name span {\n      line-height: 2.8125rem;\n      font-size: 1.0625rem;\n      margin: 0; }\n      .top-bar .name h1 a, .top-bar .name h2 a, .top-bar .name h3 a, .top-bar .name h4 a, .top-bar .name p a, .top-bar .name span a {\n        font-weight: normal;\n        color: #FFFFFF;\n        width: 75%;\n        display: block;\n        padding: 0 0.9375rem; }\n  .top-bar .toggle-topbar {\n    position: absolute;\n    right: 0;\n    top: 0; }\n    .top-bar .toggle-topbar a {\n      color: #FFFFFF;\n      text-transform: uppercase;\n      font-size: 0.8125rem;\n      font-weight: bold;\n      position: relative;\n      display: block;\n      padding: 0 0.9375rem;\n      height: 2.8125rem;\n      line-height: 2.8125rem; }\n    .top-bar .toggle-topbar.menu-icon {\n      top: 50%;\n      margin-top: -16px; }\n      .top-bar .toggle-topbar.menu-icon a {\n        height: 34px;\n        line-height: 33px;\n        padding: 0 2.5rem 0 0.9375rem;\n        color: #FFFFFF;\n        position: relative; }\n        .top-bar .toggle-topbar.menu-icon a span::after {\n          content: \"\";\n          position: absolute;\n          display: block;\n          height: 0;\n          top: 50%;\n          margin-top: -8px;\n          right: 0.9375rem;\n          box-shadow: 0 0 0 1px #FFFFFF, 0 7px 0 1px #FFFFFF, 0 14px 0 1px #FFFFFF;\n          width: 16px; }\n        .top-bar .toggle-topbar.menu-icon a span:hover:after {\n          box-shadow: 0 0 0 1px \"\", 0 7px 0 1px \"\", 0 14px 0 1px \"\"; }\n  .top-bar.expanded {\n    height: auto;\n    background: transparent; }\n    .top-bar.expanded .title-area {\n      background: #333333; }\n    .top-bar.expanded .toggle-topbar a {\n      color: #888888; }\n      .top-bar.expanded .toggle-topbar a span::after {\n        box-shadow: 0 0 0 1px #888888, 0 7px 0 1px #888888, 0 14px 0 1px #888888; }\n\n.top-bar-section {\n  left: 0;\n  position: relative;\n  width: auto;\n  transition: left 300ms ease-out; }\n  .top-bar-section ul {\n    padding: 0;\n    width: 100%;\n    height: auto;\n    display: block;\n    font-size: 16px;\n    margin: 0; }\n  .top-bar-section .divider,\n  .top-bar-section [role=\"separator\"] {\n    border-top: solid 1px #1a1a1a;\n    clear: both;\n    height: 1px;\n    width: 100%; }\n  .top-bar-section ul li {\n    background: #333333; }\n    .top-bar-section ul li > a {\n      display: block;\n      width: 100%;\n      color: #FFFFFF;\n      padding: 12px 0 12px 0;\n      padding-left: 0.9375rem;\n      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n      font-size: 0.8125rem;\n      font-weight: normal;\n      text-transform: none; }\n      .top-bar-section ul li > a.button {\n        font-size: 0.8125rem;\n        padding-right: 0.9375rem;\n        padding-left: 0.9375rem;\n        background-color: #008CBA;\n        border-color: #007095;\n        color: #FFFFFF; }\n        .top-bar-section ul li > a.button:hover, .top-bar-section ul li > a.button:focus {\n          background-color: #007095; }\n        .top-bar-section ul li > a.button:hover, .top-bar-section ul li > a.button:focus {\n          color: #FFFFFF; }\n      .top-bar-section ul li > a.button.secondary {\n        background-color: #e7e7e7;\n        border-color: #b9b9b9;\n        color: #333333; }\n        .top-bar-section ul li > a.button.secondary:hover, .top-bar-section ul li > a.button.secondary:focus {\n          background-color: #b9b9b9; }\n        .top-bar-section ul li > a.button.secondary:hover, .top-bar-section ul li > a.button.secondary:focus {\n          color: #333333; }\n      .top-bar-section ul li > a.button.success {\n        background-color: #43AC6A;\n        border-color: #368a55;\n        color: #FFFFFF; }\n        .top-bar-section ul li > a.button.success:hover, .top-bar-section ul li > a.button.success:focus {\n          background-color: #368a55; }\n        .top-bar-section ul li > a.button.success:hover, .top-bar-section ul li > a.button.success:focus {\n          color: #FFFFFF; }\n      .top-bar-section ul li > a.button.alert {\n        background-color: #f04124;\n        border-color: #cf2a0e;\n        color: #FFFFFF; }\n        .top-bar-section ul li > a.button.alert:hover, .top-bar-section ul li > a.button.alert:focus {\n          background-color: #cf2a0e; }\n        .top-bar-section ul li > a.button.alert:hover, .top-bar-section ul li > a.button.alert:focus {\n          color: #FFFFFF; }\n      .top-bar-section ul li > a.button.warning {\n        background-color: #f08a24;\n        border-color: #cf6e0e;\n        color: #FFFFFF; }\n        .top-bar-section ul li > a.button.warning:hover, .top-bar-section ul li > a.button.warning:focus {\n          background-color: #cf6e0e; }\n        .top-bar-section ul li > a.button.warning:hover, .top-bar-section ul li > a.button.warning:focus {\n          color: #FFFFFF; }\n    .top-bar-section ul li > button {\n      font-size: 0.8125rem;\n      padding-right: 0.9375rem;\n      padding-left: 0.9375rem;\n      background-color: #008CBA;\n      border-color: #007095;\n      color: #FFFFFF; }\n      .top-bar-section ul li > button:hover, .top-bar-section ul li > button:focus {\n        background-color: #007095; }\n      .top-bar-section ul li > button:hover, .top-bar-section ul li > button:focus {\n        color: #FFFFFF; }\n      .top-bar-section ul li > button.secondary {\n        background-color: #e7e7e7;\n        border-color: #b9b9b9;\n        color: #333333; }\n        .top-bar-section ul li > button.secondary:hover, .top-bar-section ul li > button.secondary:focus {\n          background-color: #b9b9b9; }\n        .top-bar-section ul li > button.secondary:hover, .top-bar-section ul li > button.secondary:focus {\n          color: #333333; }\n      .top-bar-section ul li > button.success {\n        background-color: #43AC6A;\n        border-color: #368a55;\n        color: #FFFFFF; }\n        .top-bar-section ul li > button.success:hover, .top-bar-section ul li > button.success:focus {\n          background-color: #368a55; }\n        .top-bar-section ul li > button.success:hover, .top-bar-section ul li > button.success:focus {\n          color: #FFFFFF; }\n      .top-bar-section ul li > button.alert {\n        background-color: #f04124;\n        border-color: #cf2a0e;\n        color: #FFFFFF; }\n        .top-bar-section ul li > button.alert:hover, .top-bar-section ul li > button.alert:focus {\n          background-color: #cf2a0e; }\n        .top-bar-section ul li > button.alert:hover, .top-bar-section ul li > button.alert:focus {\n          color: #FFFFFF; }\n      .top-bar-section ul li > button.warning {\n        background-color: #f08a24;\n        border-color: #cf6e0e;\n        color: #FFFFFF; }\n        .top-bar-section ul li > button.warning:hover, .top-bar-section ul li > button.warning:focus {\n          background-color: #cf6e0e; }\n        .top-bar-section ul li > button.warning:hover, .top-bar-section ul li > button.warning:focus {\n          color: #FFFFFF; }\n    .top-bar-section ul li:hover:not(.has-form) > a {\n      background-color: #555555;\n      background: #333333;\n      color: #FFFFFF; }\n    .top-bar-section ul li.active > a {\n      background: #008CBA;\n      color: #FFFFFF; }\n      .top-bar-section ul li.active > a:hover {\n        background: #0078a0;\n        color: #FFFFFF; }\n  .top-bar-section .has-form {\n    padding: 0.9375rem; }\n  .top-bar-section .has-dropdown {\n    position: relative; }\n    .top-bar-section .has-dropdown > a:after {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 5px;\n      border-color: transparent transparent transparent rgba(255, 255, 255, 0.4);\n      border-left-style: solid;\n      margin-right: 0.9375rem;\n      margin-top: -4.5px;\n      position: absolute;\n      top: 50%;\n      right: 0; }\n    .top-bar-section .has-dropdown.moved {\n      position: static; }\n      .top-bar-section .has-dropdown.moved > .dropdown {\n        display: block;\n        position: static !important;\n        height: auto;\n        width: auto;\n        overflow: visible;\n        clip: auto;\n        position: absolute !important;\n        width: 100%; }\n      .top-bar-section .has-dropdown.moved > a:after {\n        display: none; }\n  .top-bar-section .dropdown {\n    padding: 0;\n    position: absolute;\n    left: 100%;\n    top: 0;\n    z-index: 99;\n    display: block;\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n    .top-bar-section .dropdown li {\n      width: 100%;\n      height: auto; }\n      .top-bar-section .dropdown li a {\n        font-weight: normal;\n        padding: 8px 0.9375rem; }\n        .top-bar-section .dropdown li a.parent-link {\n          font-weight: normal; }\n      .top-bar-section .dropdown li.title h5, .top-bar-section .dropdown li.parent-link {\n        margin-bottom: 0;\n        margin-top: 0;\n        font-size: 1.125rem; }\n        .top-bar-section .dropdown li.title h5 a, .top-bar-section .dropdown li.parent-link a {\n          color: #FFFFFF;\n          display: block; }\n          .top-bar-section .dropdown li.title h5 a:hover, .top-bar-section .dropdown li.parent-link a:hover {\n            background: none; }\n      .top-bar-section .dropdown li.has-form {\n        padding: 8px 0.9375rem; }\n      .top-bar-section .dropdown li .button, .top-bar-section .dropdown li button {\n        top: auto; }\n    .top-bar-section .dropdown label {\n      padding: 8px 0.9375rem 2px;\n      margin-bottom: 0;\n      text-transform: uppercase;\n      color: #777777;\n      font-weight: bold;\n      font-size: 0.625rem; }\n\n.js-generated {\n  display: block; }\n\n@media only screen and (min-width: 40.063em) {\n  .top-bar {\n    background: #333333;\n    overflow: visible; }\n    .top-bar:before, .top-bar:after {\n      content: \" \";\n      display: table; }\n    .top-bar:after {\n      clear: both; }\n    .top-bar .toggle-topbar {\n      display: none; }\n    .top-bar .title-area {\n      float: left; }\n    .top-bar .name h1 a,\n    .top-bar .name h2 a,\n    .top-bar .name h3 a,\n    .top-bar .name h4 a,\n    .top-bar .name h5 a,\n    .top-bar .name h6 a {\n      width: auto; }\n    .top-bar input,\n    .top-bar .button,\n    .top-bar button {\n      font-size: 0.875rem;\n      position: relative;\n      height: 1.75rem;\n      top: 0.53125rem; }\n    .top-bar.expanded {\n      background: #333333; }\n\n  .contain-to-grid .top-bar {\n    max-width: 62.5rem;\n    margin: 0 auto;\n    margin-bottom: 0; }\n\n  .top-bar-section {\n    transition: none 0 0;\n    left: 0 !important; }\n    .top-bar-section ul {\n      width: auto;\n      height: auto !important;\n      display: inline; }\n      .top-bar-section ul li {\n        float: left; }\n        .top-bar-section ul li .js-generated {\n          display: none; }\n    .top-bar-section li.hover > a:not(.button) {\n      background-color: #555555;\n      background: #333333;\n      color: #FFFFFF; }\n    .top-bar-section li:not(.has-form) a:not(.button) {\n      padding: 0 0.9375rem;\n      line-height: 2.8125rem;\n      background: #333333; }\n      .top-bar-section li:not(.has-form) a:not(.button):hover {\n        background-color: #555555;\n        background: #333333; }\n    .top-bar-section li.active:not(.has-form) a:not(.button) {\n      padding: 0 0.9375rem;\n      line-height: 2.8125rem;\n      color: #FFFFFF;\n      background: #008CBA; }\n      .top-bar-section li.active:not(.has-form) a:not(.button):hover {\n        background: #0078a0;\n        color: #FFFFFF; }\n    .top-bar-section .has-dropdown > a {\n      padding-right: 2.1875rem !important; }\n      .top-bar-section .has-dropdown > a:after {\n        content: \"\";\n        display: block;\n        width: 0;\n        height: 0;\n        border: inset 5px;\n        border-color: rgba(255, 255, 255, 0.4) transparent transparent transparent;\n        border-top-style: solid;\n        margin-top: -2.5px;\n        top: 1.40625rem; }\n    .top-bar-section .has-dropdown.moved {\n      position: relative; }\n      .top-bar-section .has-dropdown.moved > .dropdown {\n        display: block;\n        position: absolute !important;\n        height: 1px;\n        width: 1px;\n        overflow: hidden;\n        clip: rect(1px, 1px, 1px, 1px); }\n    .top-bar-section .has-dropdown.hover > .dropdown, .top-bar-section .has-dropdown.not-click:hover > .dropdown {\n      display: block;\n      position: static !important;\n      height: auto;\n      width: auto;\n      overflow: visible;\n      clip: auto;\n      position: absolute !important; }\n    .top-bar-section .has-dropdown > a:focus + .dropdown {\n      display: block;\n      position: static !important;\n      height: auto;\n      width: auto;\n      overflow: visible;\n      clip: auto;\n      position: absolute !important; }\n    .top-bar-section .has-dropdown .dropdown li.has-dropdown > a:after {\n      border: none;\n      content: \"\\00bb\";\n      top: 1rem;\n      margin-top: -1px;\n      right: 5px;\n      line-height: 1.2; }\n    .top-bar-section .dropdown {\n      left: 0;\n      top: auto;\n      background: transparent;\n      min-width: 100%; }\n      .top-bar-section .dropdown li a {\n        color: #FFFFFF;\n        line-height: 2.8125rem;\n        white-space: nowrap;\n        padding: 12px 0.9375rem;\n        background: #333333; }\n      .top-bar-section .dropdown li:not(.has-form):not(.active) > a:not(.button) {\n        color: #FFFFFF;\n        background: #333333; }\n      .top-bar-section .dropdown li:not(.has-form):not(.active):hover > a:not(.button) {\n        color: #FFFFFF;\n        background-color: #555555;\n        background: #333333; }\n      .top-bar-section .dropdown li label {\n        white-space: nowrap;\n        background: #333333; }\n      .top-bar-section .dropdown li .dropdown {\n        left: 100%;\n        top: 0; }\n    .top-bar-section > ul > .divider, .top-bar-section > ul > [role=\"separator\"] {\n      border-bottom: none;\n      border-top: none;\n      border-right: solid 1px #4e4e4e;\n      clear: none;\n      height: 2.8125rem;\n      width: 0; }\n    .top-bar-section .has-form {\n      background: #333333;\n      padding: 0 0.9375rem;\n      height: 2.8125rem; }\n    .top-bar-section .right li .dropdown {\n      left: auto;\n      right: 0; }\n      .top-bar-section .right li .dropdown li .dropdown {\n        right: 100%; }\n    .top-bar-section .left li .dropdown {\n      right: auto;\n      left: 0; }\n      .top-bar-section .left li .dropdown li .dropdown {\n        left: 100%; }\n\n  .no-js .top-bar-section ul li:hover > a {\n    background-color: #555555;\n    background: #333333;\n    color: #FFFFFF; }\n  .no-js .top-bar-section ul li:active > a {\n    background: #008CBA;\n    color: #FFFFFF; }\n  .no-js .top-bar-section .has-dropdown:hover > .dropdown {\n    display: block;\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto;\n    position: absolute !important; }\n  .no-js .top-bar-section .has-dropdown > a:focus + .dropdown {\n    display: block;\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto;\n    position: absolute !important; } }\n.breadcrumbs {\n  display: block;\n  padding: 0.5625rem 0.875rem 0.5625rem;\n  overflow: hidden;\n  margin-left: 0;\n  list-style: none;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #f4f4f4;\n  border-color: gainsboro;\n  border-radius: 3px; }\n  .breadcrumbs > * {\n    margin: 0;\n    float: left;\n    font-size: 0.6875rem;\n    line-height: 0.6875rem;\n    text-transform: uppercase;\n    color: #008CBA; }\n    .breadcrumbs > *:hover a, .breadcrumbs > *:focus a {\n      text-decoration: underline; }\n    .breadcrumbs > * a {\n      color: #008CBA; }\n    .breadcrumbs > *.current {\n      cursor: default;\n      color: #333333; }\n      .breadcrumbs > *.current a {\n        cursor: default;\n        color: #333333; }\n      .breadcrumbs > *.current:hover, .breadcrumbs > *.current:hover a, .breadcrumbs > *.current:focus, .breadcrumbs > *.current:focus a {\n        text-decoration: none; }\n    .breadcrumbs > *.unavailable {\n      color: #999999; }\n      .breadcrumbs > *.unavailable a {\n        color: #999999; }\n      .breadcrumbs > *.unavailable:hover, .breadcrumbs > *.unavailable:hover a, .breadcrumbs > *.unavailable:focus,\n      .breadcrumbs > *.unavailable a:focus {\n        text-decoration: none;\n        color: #999999;\n        cursor: not-allowed; }\n    .breadcrumbs > *:before {\n      content: \"/\";\n      color: #AAAAAA;\n      margin: 0 0.75rem;\n      position: relative;\n      top: 1px; }\n    .breadcrumbs > *:first-child:before {\n      content: \" \";\n      margin: 0; }\n\n/* Accessibility - hides the forward slash */\n[aria-label=\"breadcrumbs\"] [aria-hidden=\"true\"]:after {\n  content: \"/\"; }\n\n.alert-box {\n  border-style: solid;\n  border-width: 1px;\n  display: block;\n  font-weight: normal;\n  margin-bottom: 1.25rem;\n  position: relative;\n  padding: 0.875rem 1.5rem 0.875rem 0.875rem;\n  font-size: 0.8125rem;\n  transition: opacity 300ms ease-out;\n  background-color: #008CBA;\n  border-color: #0078a0;\n  color: #FFFFFF; }\n  .alert-box .close {\n    font-size: 1.375rem;\n    padding: 0 6px 4px;\n    line-height: .9;\n    position: absolute;\n    top: 50%;\n    margin-top: -0.6875rem;\n    right: 0.25rem;\n    color: #333333;\n    opacity: 0.3;\n    background: inherit; }\n    .alert-box .close:hover, .alert-box .close:focus {\n      opacity: 0.5; }\n  .alert-box.radius {\n    border-radius: 3px; }\n  .alert-box.round {\n    border-radius: 1000px; }\n  .alert-box.success {\n    background-color: #43AC6A;\n    border-color: #3a945b;\n    color: #FFFFFF; }\n  .alert-box.alert {\n    background-color: #f04124;\n    border-color: #de2d0f;\n    color: #FFFFFF; }\n  .alert-box.secondary {\n    background-color: #e7e7e7;\n    border-color: #c7c7c7;\n    color: #4f4f4f; }\n  .alert-box.warning {\n    background-color: #f08a24;\n    border-color: #de770f;\n    color: #FFFFFF; }\n  .alert-box.info {\n    background-color: #a0d3e8;\n    border-color: #74bfdd;\n    color: #4f4f4f; }\n  .alert-box.alert-close {\n    opacity: 0; }\n\n.inline-list {\n  margin: 0 auto 1.0625rem auto;\n  margin-left: -1.375rem;\n  margin-right: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden; }\n  .inline-list > li {\n    list-style: none;\n    float: left;\n    margin-left: 1.375rem;\n    display: block; }\n    .inline-list > li > * {\n      display: block; }\n\n.button-group {\n  list-style: none;\n  margin: 0;\n  left: 0; }\n  .button-group:before, .button-group:after {\n    content: \" \";\n    display: table; }\n  .button-group:after {\n    clear: both; }\n  .button-group.even-2 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 50%; }\n    .button-group.even-2 li > button, .button-group.even-2 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-2 li:first-child button, .button-group.even-2 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-2 li button, .button-group.even-2 li .button {\n      width: 100%; }\n  .button-group.even-3 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 33.33333%; }\n    .button-group.even-3 li > button, .button-group.even-3 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-3 li:first-child button, .button-group.even-3 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-3 li button, .button-group.even-3 li .button {\n      width: 100%; }\n  .button-group.even-4 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 25%; }\n    .button-group.even-4 li > button, .button-group.even-4 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-4 li:first-child button, .button-group.even-4 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-4 li button, .button-group.even-4 li .button {\n      width: 100%; }\n  .button-group.even-5 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 20%; }\n    .button-group.even-5 li > button, .button-group.even-5 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-5 li:first-child button, .button-group.even-5 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-5 li button, .button-group.even-5 li .button {\n      width: 100%; }\n  .button-group.even-6 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 16.66667%; }\n    .button-group.even-6 li > button, .button-group.even-6 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-6 li:first-child button, .button-group.even-6 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-6 li button, .button-group.even-6 li .button {\n      width: 100%; }\n  .button-group.even-7 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 14.28571%; }\n    .button-group.even-7 li > button, .button-group.even-7 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-7 li:first-child button, .button-group.even-7 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-7 li button, .button-group.even-7 li .button {\n      width: 100%; }\n  .button-group.even-8 li {\n    margin: 0 -2px;\n    display: inline-block;\n    width: 12.5%; }\n    .button-group.even-8 li > button, .button-group.even-8 li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.even-8 li:first-child button, .button-group.even-8 li:first-child .button {\n      border-left: 0; }\n    .button-group.even-8 li button, .button-group.even-8 li .button {\n      width: 100%; }\n  .button-group > li {\n    margin: 0 -2px;\n    display: inline-block; }\n    .button-group > li > button, .button-group > li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group > li:first-child button, .button-group > li:first-child .button {\n      border-left: 0; }\n  .button-group.stack > li {\n    margin: 0 -2px;\n    display: inline-block;\n    display: block;\n    margin: 0;\n    float: none; }\n    .button-group.stack > li > button, .button-group.stack > li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.stack > li:first-child button, .button-group.stack > li:first-child .button {\n      border-left: 0; }\n    .button-group.stack > li > button, .button-group.stack > li .button {\n      border-top: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5);\n      border-left-width: 0;\n      margin: 0;\n      display: block; }\n    .button-group.stack > li > button {\n      width: 100%; }\n    .button-group.stack > li:first-child button, .button-group.stack > li:first-child .button {\n      border-top: 0; }\n  .button-group.stack-for-small > li {\n    margin: 0 -2px;\n    display: inline-block; }\n    .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n      border-left: 0; }\n    @media only screen and (max-width: 40em) {\n      .button-group.stack-for-small > li {\n        margin: 0 -2px;\n        display: inline-block;\n        display: block;\n        margin: 0; }\n        .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n          border-left: 1px solid;\n          border-color: rgba(255, 255, 255, 0.5); }\n        .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n          border-left: 0; }\n        .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n          border-top: 1px solid;\n          border-color: rgba(255, 255, 255, 0.5);\n          border-left-width: 0;\n          margin: 0;\n          display: block; }\n        .button-group.stack-for-small > li > button {\n          width: 100%; }\n        .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n          border-top: 0; } }\n  .button-group.radius > * {\n    margin: 0 -2px;\n    display: inline-block; }\n    .button-group.radius > * > button, .button-group.radius > * .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.radius > *:first-child button, .button-group.radius > *:first-child .button {\n      border-left: 0; }\n    .button-group.radius > *, .button-group.radius > * > a, .button-group.radius > * > button, .button-group.radius > * > .button {\n      border-radius: 0; }\n    .button-group.radius > *:first-child, .button-group.radius > *:first-child > a, .button-group.radius > *:first-child > button, .button-group.radius > *:first-child > .button {\n      -webkit-border-bottom-left-radius: 3px;\n      -webkit-border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px;\n      border-top-left-radius: 3px; }\n    .button-group.radius > *:last-child, .button-group.radius > *:last-child > a, .button-group.radius > *:last-child > button, .button-group.radius > *:last-child > .button {\n      -webkit-border-bottom-right-radius: 3px;\n      -webkit-border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n      border-top-right-radius: 3px; }\n  .button-group.radius.stack > * {\n    margin: 0 -2px;\n    display: inline-block;\n    display: block;\n    margin: 0; }\n    .button-group.radius.stack > * > button, .button-group.radius.stack > * .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.radius.stack > *:first-child button, .button-group.radius.stack > *:first-child .button {\n      border-left: 0; }\n    .button-group.radius.stack > * > button, .button-group.radius.stack > * .button {\n      border-top: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5);\n      border-left-width: 0;\n      margin: 0;\n      display: block; }\n    .button-group.radius.stack > * > button {\n      width: 100%; }\n    .button-group.radius.stack > *:first-child button, .button-group.radius.stack > *:first-child .button {\n      border-top: 0; }\n    .button-group.radius.stack > *, .button-group.radius.stack > * > a, .button-group.radius.stack > * > button, .button-group.radius.stack > * > .button {\n      border-radius: 0; }\n    .button-group.radius.stack > *:first-child, .button-group.radius.stack > *:first-child > a, .button-group.radius.stack > *:first-child > button, .button-group.radius.stack > *:first-child > .button {\n      -webkit-top-left-radius: 3px;\n      -webkit-top-right-radius: 3px;\n      border-top-left-radius: 3px;\n      border-top-right-radius: 3px; }\n    .button-group.radius.stack > *:last-child, .button-group.radius.stack > *:last-child > a, .button-group.radius.stack > *:last-child > button, .button-group.radius.stack > *:last-child > .button {\n      -webkit-bottom-left-radius: 3px;\n      -webkit-bottom-right-radius: 3px;\n      border-bottom-left-radius: 3px;\n      border-bottom-right-radius: 3px; }\n  @media only screen and (min-width: 40.063em) {\n    .button-group.radius.stack-for-small > * {\n      margin: 0 -2px;\n      display: inline-block; }\n      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n        border-left: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5); }\n      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n        border-left: 0; }\n      .button-group.radius.stack-for-small > *, .button-group.radius.stack-for-small > * > a, .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * > .button {\n        border-radius: 0; }\n      .button-group.radius.stack-for-small > *:first-child, .button-group.radius.stack-for-small > *:first-child > a, .button-group.radius.stack-for-small > *:first-child > button, .button-group.radius.stack-for-small > *:first-child > .button {\n        -webkit-border-bottom-left-radius: 3px;\n        -webkit-border-top-left-radius: 3px;\n        border-bottom-left-radius: 3px;\n        border-top-left-radius: 3px; }\n      .button-group.radius.stack-for-small > *:last-child, .button-group.radius.stack-for-small > *:last-child > a, .button-group.radius.stack-for-small > *:last-child > button, .button-group.radius.stack-for-small > *:last-child > .button {\n        -webkit-border-bottom-right-radius: 3px;\n        -webkit-border-top-right-radius: 3px;\n        border-bottom-right-radius: 3px;\n        border-top-right-radius: 3px; } }\n  @media only screen and (max-width: 40em) {\n    .button-group.radius.stack-for-small > * {\n      margin: 0 -2px;\n      display: inline-block;\n      display: block;\n      margin: 0; }\n      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n        border-left: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5); }\n      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n        border-left: 0; }\n      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n        border-top: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5);\n        border-left-width: 0;\n        margin: 0;\n        display: block; }\n      .button-group.radius.stack-for-small > * > button {\n        width: 100%; }\n      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n        border-top: 0; }\n      .button-group.radius.stack-for-small > *, .button-group.radius.stack-for-small > * > a, .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * > .button {\n        border-radius: 0; }\n      .button-group.radius.stack-for-small > *:first-child, .button-group.radius.stack-for-small > *:first-child > a, .button-group.radius.stack-for-small > *:first-child > button, .button-group.radius.stack-for-small > *:first-child > .button {\n        -webkit-top-left-radius: 3px;\n        -webkit-top-right-radius: 3px;\n        border-top-left-radius: 3px;\n        border-top-right-radius: 3px; }\n      .button-group.radius.stack-for-small > *:last-child, .button-group.radius.stack-for-small > *:last-child > a, .button-group.radius.stack-for-small > *:last-child > button, .button-group.radius.stack-for-small > *:last-child > .button {\n        -webkit-bottom-left-radius: 3px;\n        -webkit-bottom-right-radius: 3px;\n        border-bottom-left-radius: 3px;\n        border-bottom-right-radius: 3px; } }\n  .button-group.round > * {\n    margin: 0 -2px;\n    display: inline-block; }\n    .button-group.round > * > button, .button-group.round > * .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.round > *:first-child button, .button-group.round > *:first-child .button {\n      border-left: 0; }\n    .button-group.round > *, .button-group.round > * > a, .button-group.round > * > button, .button-group.round > * > .button {\n      border-radius: 0; }\n    .button-group.round > *:first-child, .button-group.round > *:first-child > a, .button-group.round > *:first-child > button, .button-group.round > *:first-child > .button {\n      -webkit-border-bottom-left-radius: 1000px;\n      -webkit-border-top-left-radius: 1000px;\n      border-bottom-left-radius: 1000px;\n      border-top-left-radius: 1000px; }\n    .button-group.round > *:last-child, .button-group.round > *:last-child > a, .button-group.round > *:last-child > button, .button-group.round > *:last-child > .button {\n      -webkit-border-bottom-right-radius: 1000px;\n      -webkit-border-top-right-radius: 1000px;\n      border-bottom-right-radius: 1000px;\n      border-top-right-radius: 1000px; }\n  .button-group.round.stack > * {\n    margin: 0 -2px;\n    display: inline-block;\n    display: block;\n    margin: 0; }\n    .button-group.round.stack > * > button, .button-group.round.stack > * .button {\n      border-left: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5); }\n    .button-group.round.stack > *:first-child button, .button-group.round.stack > *:first-child .button {\n      border-left: 0; }\n    .button-group.round.stack > * > button, .button-group.round.stack > * .button {\n      border-top: 1px solid;\n      border-color: rgba(255, 255, 255, 0.5);\n      border-left-width: 0;\n      margin: 0;\n      display: block; }\n    .button-group.round.stack > * > button {\n      width: 100%; }\n    .button-group.round.stack > *:first-child button, .button-group.round.stack > *:first-child .button {\n      border-top: 0; }\n    .button-group.round.stack > *, .button-group.round.stack > * > a, .button-group.round.stack > * > button, .button-group.round.stack > * > .button {\n      border-radius: 0; }\n    .button-group.round.stack > *:first-child, .button-group.round.stack > *:first-child > a, .button-group.round.stack > *:first-child > button, .button-group.round.stack > *:first-child > .button {\n      -webkit-top-left-radius: 1rem;\n      -webkit-top-right-radius: 1rem;\n      border-top-left-radius: 1rem;\n      border-top-right-radius: 1rem; }\n    .button-group.round.stack > *:last-child, .button-group.round.stack > *:last-child > a, .button-group.round.stack > *:last-child > button, .button-group.round.stack > *:last-child > .button {\n      -webkit-bottom-left-radius: 1rem;\n      -webkit-bottom-right-radius: 1rem;\n      border-bottom-left-radius: 1rem;\n      border-bottom-right-radius: 1rem; }\n  @media only screen and (min-width: 40.063em) {\n    .button-group.round.stack-for-small > * {\n      margin: 0 -2px;\n      display: inline-block; }\n      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n        border-left: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5); }\n      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n        border-left: 0; }\n      .button-group.round.stack-for-small > *, .button-group.round.stack-for-small > * > a, .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * > .button {\n        border-radius: 0; }\n      .button-group.round.stack-for-small > *:first-child, .button-group.round.stack-for-small > *:first-child > a, .button-group.round.stack-for-small > *:first-child > button, .button-group.round.stack-for-small > *:first-child > .button {\n        -webkit-border-bottom-left-radius: 1000px;\n        -webkit-border-top-left-radius: 1000px;\n        border-bottom-left-radius: 1000px;\n        border-top-left-radius: 1000px; }\n      .button-group.round.stack-for-small > *:last-child, .button-group.round.stack-for-small > *:last-child > a, .button-group.round.stack-for-small > *:last-child > button, .button-group.round.stack-for-small > *:last-child > .button {\n        -webkit-border-bottom-right-radius: 1000px;\n        -webkit-border-top-right-radius: 1000px;\n        border-bottom-right-radius: 1000px;\n        border-top-right-radius: 1000px; } }\n  @media only screen and (max-width: 40em) {\n    .button-group.round.stack-for-small > * {\n      margin: 0 -2px;\n      display: inline-block;\n      display: block;\n      margin: 0; }\n      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n        border-left: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5); }\n      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n        border-left: 0; }\n      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n        border-top: 1px solid;\n        border-color: rgba(255, 255, 255, 0.5);\n        border-left-width: 0;\n        margin: 0;\n        display: block; }\n      .button-group.round.stack-for-small > * > button {\n        width: 100%; }\n      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n        border-top: 0; }\n      .button-group.round.stack-for-small > *, .button-group.round.stack-for-small > * > a, .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * > .button {\n        border-radius: 0; }\n      .button-group.round.stack-for-small > *:first-child, .button-group.round.stack-for-small > *:first-child > a, .button-group.round.stack-for-small > *:first-child > button, .button-group.round.stack-for-small > *:first-child > .button {\n        -webkit-top-left-radius: 1rem;\n        -webkit-top-right-radius: 1rem;\n        border-top-left-radius: 1rem;\n        border-top-right-radius: 1rem; }\n      .button-group.round.stack-for-small > *:last-child, .button-group.round.stack-for-small > *:last-child > a, .button-group.round.stack-for-small > *:last-child > button, .button-group.round.stack-for-small > *:last-child > .button {\n        -webkit-bottom-left-radius: 1rem;\n        -webkit-bottom-right-radius: 1rem;\n        border-bottom-left-radius: 1rem;\n        border-bottom-right-radius: 1rem; } }\n\n.button-bar:before, .button-bar:after {\n  content: \" \";\n  display: table; }\n.button-bar:after {\n  clear: both; }\n.button-bar .button-group {\n  float: left;\n  margin-right: 0.625rem; }\n  .button-bar .button-group div {\n    overflow: hidden; }\n\n/* Panels */\n.panel {\n  border-style: solid;\n  border-width: 1px;\n  border-color: #d8d8d8;\n  margin-bottom: 1.25rem;\n  padding: 1.25rem;\n  background: #f2f2f2;\n  color: #333333; }\n  .panel > :first-child {\n    margin-top: 0; }\n  .panel > :last-child {\n    margin-bottom: 0; }\n  .panel h1, .panel h2, .panel h3, .panel h4, .panel h5, .panel h6, .panel p, .panel li, .panel dl {\n    color: #333333; }\n  .panel h1, .panel h2, .panel h3, .panel h4, .panel h5, .panel h6 {\n    line-height: 1;\n    margin-bottom: 0.625rem; }\n    .panel h1.subheader, .panel h2.subheader, .panel h3.subheader, .panel h4.subheader, .panel h5.subheader, .panel h6.subheader {\n      line-height: 1.4; }\n  .panel.callout {\n    border-style: solid;\n    border-width: 1px;\n    border-color: #b6edff;\n    margin-bottom: 1.25rem;\n    padding: 1.25rem;\n    background: #ecfaff;\n    color: #333333; }\n    .panel.callout > :first-child {\n      margin-top: 0; }\n    .panel.callout > :last-child {\n      margin-bottom: 0; }\n    .panel.callout h1, .panel.callout h2, .panel.callout h3, .panel.callout h4, .panel.callout h5, .panel.callout h6, .panel.callout p, .panel.callout li, .panel.callout dl {\n      color: #333333; }\n    .panel.callout h1, .panel.callout h2, .panel.callout h3, .panel.callout h4, .panel.callout h5, .panel.callout h6 {\n      line-height: 1;\n      margin-bottom: 0.625rem; }\n      .panel.callout h1.subheader, .panel.callout h2.subheader, .panel.callout h3.subheader, .panel.callout h4.subheader, .panel.callout h5.subheader, .panel.callout h6.subheader {\n        line-height: 1.4; }\n    .panel.callout a:not(.button) {\n      color: #008CBA; }\n      .panel.callout a:not(.button):hover, .panel.callout a:not(.button):focus {\n        color: #0078a0; }\n  .panel.radius {\n    border-radius: 3px; }\n\n.dropdown.button, button.dropdown {\n  position: relative;\n  outline: none;\n  padding-right: 3.5625rem; }\n  .dropdown.button::after, button.dropdown::after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    display: block;\n    border-style: solid;\n    border-color: #FFFFFF transparent transparent transparent;\n    top: 50%; }\n  .dropdown.button::after, button.dropdown::after {\n    border-width: 0.375rem;\n    right: 1.40625rem;\n    margin-top: -0.15625rem; }\n  .dropdown.button::after, button.dropdown::after {\n    border-color: #FFFFFF transparent transparent transparent; }\n  .dropdown.button.tiny, button.dropdown.tiny {\n    padding-right: 2.625rem; }\n    .dropdown.button.tiny:after, button.dropdown.tiny:after {\n      border-width: 0.375rem;\n      right: 1.125rem;\n      margin-top: -0.125rem; }\n    .dropdown.button.tiny::after, button.dropdown.tiny::after {\n      border-color: #FFFFFF transparent transparent transparent; }\n  .dropdown.button.small, button.dropdown.small {\n    padding-right: 3.0625rem; }\n    .dropdown.button.small::after, button.dropdown.small::after {\n      border-width: 0.4375rem;\n      right: 1.3125rem;\n      margin-top: -0.15625rem; }\n    .dropdown.button.small::after, button.dropdown.small::after {\n      border-color: #FFFFFF transparent transparent transparent; }\n  .dropdown.button.large, button.dropdown.large {\n    padding-right: 3.625rem; }\n    .dropdown.button.large::after, button.dropdown.large::after {\n      border-width: 0.3125rem;\n      right: 1.71875rem;\n      margin-top: -0.15625rem; }\n    .dropdown.button.large::after, button.dropdown.large::after {\n      border-color: #FFFFFF transparent transparent transparent; }\n  .dropdown.button.secondary:after, button.dropdown.secondary:after {\n    border-color: #333333 transparent transparent transparent; }\n\n/* Image Thumbnails */\n.th {\n  line-height: 0;\n  display: inline-block;\n  border: solid 4px #FFFFFF;\n  max-width: 100%;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\n  transition: all 200ms ease-out; }\n  .th:hover, .th:focus {\n    box-shadow: 0 0 6px 1px rgba(0, 140, 186, 0.5); }\n  .th.radius {\n    border-radius: 3px; }\n\n.toolbar {\n  background: #333333;\n  width: 100%;\n  font-size: 0;\n  display: inline-block; }\n  .toolbar.label-bottom .tab .tab-content i, .toolbar.label-bottom .tab .tab-content img {\n    margin-bottom: 10px; }\n  .toolbar.label-right .tab .tab-content i, .toolbar.label-right .tab .tab-content img {\n    margin-right: 10px;\n    display: inline-block; }\n  .toolbar.label-right .tab .tab-content label {\n    display: inline-block; }\n  .toolbar.vertical.label-right .tab .tab-content {\n    text-align: left; }\n  .toolbar.vertical {\n    height: 100%;\n    width: auto; }\n    .toolbar.vertical .tab {\n      width: auto;\n      margin: auto;\n      float: none; }\n  .toolbar .tab {\n    text-align: center;\n    width: 25%;\n    margin: 0 auto;\n    display: block;\n    padding: 20px;\n    float: left; }\n    .toolbar .tab:hover {\n      background: rgba(255, 255, 255, 0.1); }\n\n.toolbar .tab-content {\n  font-size: 16px;\n  text-align: center; }\n  .toolbar .tab-content label {\n    color: #CCCCCC; }\n  .toolbar .tab-content i {\n    font-size: 30px;\n    display: block;\n    margin: 0 auto;\n    color: #CCCCCC;\n    vertical-align: middle; }\n  .toolbar .tab-content img {\n    width: 30px;\n    height: 30px;\n    display: block;\n    margin: 0 auto; }\n\n/* Pricing Tables */\n.pricing-table {\n  border: solid 1px #DDDDDD;\n  margin-left: 0;\n  margin-bottom: 1.25rem; }\n  .pricing-table * {\n    list-style: none;\n    line-height: 1; }\n  .pricing-table .title {\n    background-color: #333333;\n    padding: 0.9375rem 1.25rem;\n    text-align: center;\n    color: #EEEEEE;\n    font-weight: normal;\n    font-size: 1rem;\n    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n  .pricing-table .price {\n    background-color: #F6F6F6;\n    padding: 0.9375rem 1.25rem;\n    text-align: center;\n    color: #333333;\n    font-weight: normal;\n    font-size: 2rem;\n    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n  .pricing-table .description {\n    background-color: #FFFFFF;\n    padding: 0.9375rem;\n    text-align: center;\n    color: #777777;\n    font-size: 0.75rem;\n    font-weight: normal;\n    line-height: 1.4;\n    border-bottom: dotted 1px #DDDDDD; }\n  .pricing-table .bullet-item {\n    background-color: #FFFFFF;\n    padding: 0.9375rem;\n    text-align: center;\n    color: #333333;\n    font-size: 0.875rem;\n    font-weight: normal;\n    border-bottom: dotted 1px #DDDDDD; }\n  .pricing-table .cta-button {\n    background-color: #FFFFFF;\n    text-align: center;\n    padding: 1.25rem 1.25rem 0; }\n\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n@-moz-keyframes rotate {\n  from {\n    -moz-transform: rotate(0deg); }\n  to {\n    -moz-transform: rotate(360deg); } }\n@-o-keyframes rotate {\n  from {\n    -o-transform: rotate(0deg); }\n  to {\n    -o-transform: rotate(360deg); } }\n@keyframes rotate {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n/* Orbit Graceful Loading */\n.slideshow-wrapper {\n  position: relative; }\n  .slideshow-wrapper ul {\n    list-style-type: none;\n    margin: 0; }\n    .slideshow-wrapper ul li,\n    .slideshow-wrapper ul li .orbit-caption {\n      display: none; }\n    .slideshow-wrapper ul li:first-child {\n      display: block; }\n  .slideshow-wrapper .orbit-container {\n    background-color: transparent; }\n    .slideshow-wrapper .orbit-container li {\n      display: block; }\n      .slideshow-wrapper .orbit-container li .orbit-caption {\n        display: block; }\n    .slideshow-wrapper .orbit-container .orbit-bullets li {\n      display: inline-block; }\n  .slideshow-wrapper .preloader {\n    display: block;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -20px;\n    margin-left: -20px;\n    border: solid 3px;\n    border-color: #555555 #FFFFFF;\n    border-radius: 1000px;\n    animation-name: rotate;\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear; }\n\n.orbit-container {\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n  background: none; }\n  .orbit-container .orbit-slides-container {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    -webkit-transform: translateZ(0); }\n    .orbit-container .orbit-slides-container img {\n      display: block;\n      max-width: 100%; }\n    .orbit-container .orbit-slides-container > * {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      margin-left: 100%; }\n      .orbit-container .orbit-slides-container > *:first-child {\n        margin-left: 0; }\n      .orbit-container .orbit-slides-container > * .orbit-caption {\n        position: absolute;\n        bottom: 0;\n        background-color: rgba(51, 51, 51, 0.8);\n        color: #FFFFFF;\n        width: 100%;\n        padding: 0.625rem 0.875rem;\n        font-size: 0.875rem; }\n  .orbit-container .orbit-slide-number {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    font-size: 12px;\n    color: #FFFFFF;\n    background: transparent;\n    z-index: 10; }\n    .orbit-container .orbit-slide-number span {\n      font-weight: 700;\n      padding: 0.3125rem; }\n  .orbit-container .orbit-timer {\n    position: absolute;\n    top: 12px;\n    right: 10px;\n    height: 6px;\n    width: 100px;\n    z-index: 10; }\n    .orbit-container .orbit-timer .orbit-progress {\n      height: 3px;\n      background-color: rgba(255, 255, 255, 0.3);\n      display: block;\n      width: 0;\n      position: relative;\n      right: 20px;\n      top: 5px; }\n    .orbit-container .orbit-timer > span {\n      display: none;\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 11px;\n      height: 14px;\n      border: solid 4px #FFFFFF;\n      border-top: none;\n      border-bottom: none; }\n    .orbit-container .orbit-timer.paused > span {\n      right: -4px;\n      top: 0;\n      width: 11px;\n      height: 14px;\n      border: inset 8px;\n      border-left-style: solid;\n      border-color: transparent;\n      border-left-color: #FFFFFF; }\n      .orbit-container .orbit-timer.paused > span.dark {\n        border-left-color: #333333; }\n  .orbit-container:hover .orbit-timer > span {\n    display: block; }\n  .orbit-container .orbit-prev,\n  .orbit-container .orbit-next {\n    position: absolute;\n    top: 45%;\n    margin-top: -25px;\n    width: 36px;\n    height: 60px;\n    line-height: 50px;\n    color: white;\n    background-color: transparent;\n    text-indent: -9999px !important;\n    z-index: 10; }\n    .orbit-container .orbit-prev:hover,\n    .orbit-container .orbit-next:hover {\n      background-color: rgba(0, 0, 0, 0.3); }\n    .orbit-container .orbit-prev > span,\n    .orbit-container .orbit-next > span {\n      position: absolute;\n      top: 50%;\n      margin-top: -10px;\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 10px; }\n  .orbit-container .orbit-prev {\n    left: 0; }\n    .orbit-container .orbit-prev > span {\n      border-right-style: solid;\n      border-color: transparent;\n      border-right-color: #FFFFFF; }\n    .orbit-container .orbit-prev:hover > span {\n      border-right-color: #FFFFFF; }\n  .orbit-container .orbit-next {\n    right: 0; }\n    .orbit-container .orbit-next > span {\n      border-color: transparent;\n      border-left-style: solid;\n      border-left-color: #FFFFFF;\n      left: 50%;\n      margin-left: -4px; }\n    .orbit-container .orbit-next:hover > span {\n      border-left-color: #FFFFFF; }\n\n.orbit-bullets-container {\n  text-align: center; }\n\n.orbit-bullets {\n  margin: 0 auto 30px auto;\n  overflow: hidden;\n  position: relative;\n  top: 10px;\n  float: none;\n  text-align: center;\n  display: block; }\n  .orbit-bullets li {\n    cursor: pointer;\n    display: inline-block;\n    width: 0.5625rem;\n    height: 0.5625rem;\n    background: #CCCCCC;\n    float: none;\n    margin-right: 6px;\n    border-radius: 1000px; }\n    .orbit-bullets li.active {\n      background: #999999; }\n    .orbit-bullets li:last-child {\n      margin-right: 0; }\n\n.touch .orbit-container .orbit-prev,\n.touch .orbit-container .orbit-next {\n  display: none; }\n.touch .orbit-bullets {\n  display: none; }\n\n@media only screen and (min-width: 40.063em) {\n  .touch .orbit-container .orbit-prev,\n  .touch .orbit-container .orbit-next {\n    display: inherit; }\n  .touch .orbit-bullets {\n    display: block; } }\n@media only screen and (max-width: 40em) {\n  .orbit-stack-on-small .orbit-slides-container {\n    height: auto !important; }\n  .orbit-stack-on-small .orbit-slides-container > * {\n    position: relative;\n    margin: 0 !important;\n    opacity: 1 !important; }\n  .orbit-stack-on-small .orbit-slide-number {\n    display: none; }\n\n  .orbit-timer {\n    display: none; }\n\n  .orbit-next, .orbit-prev {\n    display: none; }\n\n  .orbit-bullets {\n    display: none; } }\n[data-magellan-expedition], [data-magellan-expedition-clone] {\n  background: #FFFFFF;\n  z-index: 50;\n  min-width: 100%;\n  padding: 10px; }\n  [data-magellan-expedition] .sub-nav, [data-magellan-expedition-clone] .sub-nav {\n    margin-bottom: 0; }\n    [data-magellan-expedition] .sub-nav dd, [data-magellan-expedition-clone] .sub-nav dd {\n      margin-bottom: 0; }\n    [data-magellan-expedition] .sub-nav a, [data-magellan-expedition-clone] .sub-nav a {\n      line-height: 1.8em; }\n\n.icon-bar {\n  width: 100%;\n  font-size: 0;\n  display: inline-block;\n  background: #333333; }\n  .icon-bar > * {\n    text-align: center;\n    font-size: 1rem;\n    width: 25%;\n    margin: 0 auto;\n    display: block;\n    padding: 1.25rem;\n    float: left; }\n    .icon-bar > * i, .icon-bar > * img {\n      display: block;\n      margin: 0 auto; }\n      .icon-bar > * i + label, .icon-bar > * img + label {\n        margin-top: .0625rem; }\n    .icon-bar > * i {\n      font-size: 1.875rem;\n      vertical-align: middle; }\n    .icon-bar > * img {\n      width: 1.875rem;\n      height: 1.875rem; }\n  .icon-bar.label-right > * i, .icon-bar.label-right > * img {\n    margin: 0 .0625rem 0 0;\n    display: inline-block; }\n    .icon-bar.label-right > * i + label, .icon-bar.label-right > * img + label {\n      margin-top: 0; }\n  .icon-bar.label-right > * label {\n    display: inline-block; }\n  .icon-bar.vertical.label-right > * {\n    text-align: left; }\n  .icon-bar.vertical, .icon-bar.small-vertical {\n    height: 100%;\n    width: auto; }\n    .icon-bar.vertical .item, .icon-bar.small-vertical .item {\n      width: auto;\n      margin: auto;\n      float: none; }\n  @media only screen and (min-width: 40.063em) {\n    .icon-bar.medium-vertical {\n      height: 100%;\n      width: auto; }\n      .icon-bar.medium-vertical .item {\n        width: auto;\n        margin: auto;\n        float: none; } }\n  @media only screen and (min-width: 64.063em) {\n    .icon-bar.large-vertical {\n      height: 100%;\n      width: auto; }\n      .icon-bar.large-vertical .item {\n        width: auto;\n        margin: auto;\n        float: none; } }\n  .icon-bar > * {\n    font-size: 1rem;\n    padding: 1.25rem; }\n    .icon-bar > * i + label, .icon-bar > * img + label {\n      margin-top: .0625rem; }\n    .icon-bar > * i {\n      font-size: 1.875rem; }\n    .icon-bar > * img {\n      width: 1.875rem;\n      height: 1.875rem; }\n  .icon-bar > * label {\n    color: #FFFFFF; }\n  .icon-bar > * i {\n    color: #FFFFFF; }\n  .icon-bar > a:hover {\n    background: #008CBA; }\n    .icon-bar > a:hover label {\n      color: #FFFFFF; }\n    .icon-bar > a:hover i {\n      color: #FFFFFF; }\n  .icon-bar > a.active {\n    background: #008CBA; }\n    .icon-bar > a.active label {\n      color: #FFFFFF; }\n    .icon-bar > a.active i {\n      color: #FFFFFF; }\n  .icon-bar .item.disabled {\n    opacity: 0.7;\n    cursor: not-allowed;\n    pointer-events: none; }\n    .icon-bar .item.disabled > * {\n      opacity: 0.7;\n      cursor: not-allowed; }\n\n.icon-bar.two-up .item {\n  width: 50%; }\n.icon-bar.two-up.vertical .item, .icon-bar.two-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.two-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.two-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.three-up .item {\n  width: 33.3333%; }\n.icon-bar.three-up.vertical .item, .icon-bar.three-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.three-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.three-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.four-up .item {\n  width: 25%; }\n.icon-bar.four-up.vertical .item, .icon-bar.four-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.four-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.four-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.five-up .item {\n  width: 20%; }\n.icon-bar.five-up.vertical .item, .icon-bar.five-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.five-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.five-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.six-up .item {\n  width: 16.66667%; }\n.icon-bar.six-up.vertical .item, .icon-bar.six-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.six-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.six-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.seven-up .item {\n  width: 14.28571%; }\n.icon-bar.seven-up.vertical .item, .icon-bar.seven-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.seven-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.seven-up.large-vertical .item {\n    width: auto; } }\n.icon-bar.eight-up .item {\n  width: 12.5%; }\n.icon-bar.eight-up.vertical .item, .icon-bar.eight-up.small-vertical .item {\n  width: auto; }\n@media only screen and (min-width: 40.063em) {\n  .icon-bar.eight-up.medium-vertical .item {\n    width: auto; } }\n@media only screen and (min-width: 64.063em) {\n  .icon-bar.eight-up.large-vertical .item {\n    width: auto; } }\n\n.tabs {\n  margin-bottom: 0 !important;\n  margin-left: 0; }\n  .tabs:before, .tabs:after {\n    content: \" \";\n    display: table; }\n  .tabs:after {\n    clear: both; }\n  .tabs dd, .tabs .tab-title {\n    position: relative;\n    margin-bottom: 0 !important;\n    list-style: none;\n    float: left; }\n    .tabs dd > a, .tabs .tab-title > a {\n      display: block;\n      background-color: #EFEFEF;\n      color: #222222;\n      padding: 1rem 2rem;\n      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n      font-size: 1rem; }\n      .tabs dd > a:hover, .tabs .tab-title > a:hover {\n        background-color: #e1e1e1; }\n      .tabs dd > a:focus, .tabs .tab-title > a:focus {\n        outline: none; }\n    .tabs dd.active a, .tabs .tab-title.active a {\n      background-color: #FFFFFF;\n      color: #222222; }\n  .tabs.radius dd:first-child a, .tabs.radius .tab:first-child a {\n    -webkit-border-bottom-left-radius: 3px;\n    -webkit-border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    border-top-left-radius: 3px; }\n  .tabs.radius dd:last-child a, .tabs.radius .tab:last-child a {\n    -webkit-border-bottom-right-radius: 3px;\n    -webkit-border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .tabs.vertical dd, .tabs.vertical .tab-title {\n    position: inherit;\n    float: none;\n    display: block;\n    top: auto; }\n\n.tabs-content {\n  margin-bottom: 1.5rem;\n  width: 100%; }\n  .tabs-content:before, .tabs-content:after {\n    content: \" \";\n    display: table; }\n  .tabs-content:after {\n    clear: both; }\n  .tabs-content > .content {\n    display: none;\n    float: left;\n    padding: 0.9375rem 0;\n    width: 100%; }\n    .tabs-content > .content.active {\n      display: block;\n      float: none; }\n    .tabs-content > .content.contained {\n      padding: 0.9375rem; }\n  .tabs-content.vertical {\n    display: block; }\n    .tabs-content.vertical > .content {\n      padding: 0 0.9375rem; }\n\n@media only screen and (min-width: 40.063em) {\n  .tabs.vertical {\n    width: 20%;\n    max-width: 20%;\n    float: left;\n    margin: 0 0 1.25rem; }\n\n  .tabs-content.vertical {\n    width: 80%;\n    max-width: 80%;\n    float: left;\n    margin-left: -1px;\n    padding-left: 1rem; } }\n.no-js .tabs-content > .content {\n  display: block;\n  float: none; }\n\nul.pagination {\n  display: block;\n  min-height: 1.5rem;\n  margin-left: -0.3125rem; }\n  ul.pagination li {\n    height: 1.5rem;\n    color: #222222;\n    font-size: 0.875rem;\n    margin-left: 0.3125rem; }\n    ul.pagination li a, ul.pagination li button {\n      display: block;\n      padding: 0.0625rem 0.625rem 0.0625rem;\n      color: #999999;\n      background: none;\n      border-radius: 3px;\n      font-weight: normal;\n      font-size: 1em;\n      line-height: inherit;\n      transition: background-color 300ms ease-out; }\n    ul.pagination li:hover a,\n    ul.pagination li a:focus, ul.pagination li:hover button,\n    ul.pagination li button:focus {\n      background: #e6e6e6; }\n    ul.pagination li.unavailable a, ul.pagination li.unavailable button {\n      cursor: default;\n      color: #999999; }\n    ul.pagination li.unavailable:hover a, ul.pagination li.unavailable a:focus, ul.pagination li.unavailable:hover button, ul.pagination li.unavailable button:focus {\n      background: transparent; }\n    ul.pagination li.current a, ul.pagination li.current button {\n      background: #008CBA;\n      color: #FFFFFF;\n      font-weight: bold;\n      cursor: default; }\n      ul.pagination li.current a:hover, ul.pagination li.current a:focus, ul.pagination li.current button:hover, ul.pagination li.current button:focus {\n        background: #008CBA; }\n  ul.pagination li {\n    float: left;\n    display: block; }\n\n/* Pagination centred wrapper */\n.pagination-centered {\n  text-align: center; }\n  .pagination-centered ul.pagination li {\n    float: none;\n    display: inline-block; }\n\n.side-nav {\n  display: block;\n  margin: 0;\n  padding: 0.875rem 0;\n  list-style-type: none;\n  list-style-position: outside;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n  .side-nav li {\n    margin: 0 0 0.4375rem 0;\n    font-size: 0.875rem;\n    font-weight: normal; }\n    .side-nav li a:not(.button) {\n      display: block;\n      color: #008CBA;\n      margin: 0;\n      padding: 0.4375rem 0.875rem; }\n      .side-nav li a:not(.button):hover, .side-nav li a:not(.button):focus {\n        background: rgba(0, 0, 0, 0.025);\n        color: #1cc7ff; }\n    .side-nav li.active > a:first-child:not(.button) {\n      color: #1cc7ff;\n      font-weight: normal;\n      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n    .side-nav li.divider {\n      border-top: 1px solid;\n      height: 0;\n      padding: 0;\n      list-style: none;\n      border-top-color: white; }\n    .side-nav li.heading {\n      color: #008CBA;\n      font-size: 0.875rem;\n      font-weight: bold;\n      text-transform: uppercase; }\n\n.accordion {\n  margin-bottom: 0; }\n  .accordion:before, .accordion:after {\n    content: \" \";\n    display: table; }\n  .accordion:after {\n    clear: both; }\n  .accordion .accordion-navigation, .accordion dd {\n    display: block;\n    margin-bottom: 0 !important; }\n    .accordion .accordion-navigation.active > a, .accordion dd.active > a {\n      background: #e8e8e8; }\n    .accordion .accordion-navigation > a, .accordion dd > a {\n      background: #EFEFEF;\n      color: #222222;\n      padding: 1rem;\n      display: block;\n      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n      font-size: 1rem; }\n      .accordion .accordion-navigation > a:hover, .accordion dd > a:hover {\n        background: #e3e3e3; }\n    .accordion .accordion-navigation > .content, .accordion dd > .content {\n      display: none;\n      padding: 0.9375rem; }\n      .accordion .accordion-navigation > .content.active, .accordion dd > .content.active {\n        display: block;\n        background: #FFFFFF; }\n\n.text-left {\n  text-align: left !important; }\n\n.text-right {\n  text-align: right !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-justify {\n  text-align: justify !important; }\n\n@media only screen and (max-width: 40em) {\n  .small-only-text-left {\n    text-align: left !important; }\n\n  .small-only-text-right {\n    text-align: right !important; }\n\n  .small-only-text-center {\n    text-align: center !important; }\n\n  .small-only-text-justify {\n    text-align: justify !important; } }\n@media only screen {\n  .small-text-left {\n    text-align: left !important; }\n\n  .small-text-right {\n    text-align: right !important; }\n\n  .small-text-center {\n    text-align: center !important; }\n\n  .small-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 40.063em) and (max-width: 64em) {\n  .medium-only-text-left {\n    text-align: left !important; }\n\n  .medium-only-text-right {\n    text-align: right !important; }\n\n  .medium-only-text-center {\n    text-align: center !important; }\n\n  .medium-only-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 40.063em) {\n  .medium-text-left {\n    text-align: left !important; }\n\n  .medium-text-right {\n    text-align: right !important; }\n\n  .medium-text-center {\n    text-align: center !important; }\n\n  .medium-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 64.063em) and (max-width: 90em) {\n  .large-only-text-left {\n    text-align: left !important; }\n\n  .large-only-text-right {\n    text-align: right !important; }\n\n  .large-only-text-center {\n    text-align: center !important; }\n\n  .large-only-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 64.063em) {\n  .large-text-left {\n    text-align: left !important; }\n\n  .large-text-right {\n    text-align: right !important; }\n\n  .large-text-center {\n    text-align: center !important; }\n\n  .large-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 90.063em) and (max-width: 120em) {\n  .xlarge-only-text-left {\n    text-align: left !important; }\n\n  .xlarge-only-text-right {\n    text-align: right !important; }\n\n  .xlarge-only-text-center {\n    text-align: center !important; }\n\n  .xlarge-only-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 90.063em) {\n  .xlarge-text-left {\n    text-align: left !important; }\n\n  .xlarge-text-right {\n    text-align: right !important; }\n\n  .xlarge-text-center {\n    text-align: center !important; }\n\n  .xlarge-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 120.063em) and (max-width: 99999999em) {\n  .xxlarge-only-text-left {\n    text-align: left !important; }\n\n  .xxlarge-only-text-right {\n    text-align: right !important; }\n\n  .xxlarge-only-text-center {\n    text-align: center !important; }\n\n  .xxlarge-only-text-justify {\n    text-align: justify !important; } }\n@media only screen and (min-width: 120.063em) {\n  .xxlarge-text-left {\n    text-align: left !important; }\n\n  .xxlarge-text-right {\n    text-align: right !important; }\n\n  .xxlarge-text-center {\n    text-align: center !important; }\n\n  .xxlarge-text-justify {\n    text-align: justify !important; } }\n/* Typography resets */\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\n/* Default Link Styles */\na {\n  color: #008CBA;\n  text-decoration: none;\n  line-height: inherit; }\n  a:hover, a:focus {\n    color: #0078a0; }\n  a img {\n    border: none; }\n\n/* Default paragraph styles */\np {\n  font-family: inherit;\n  font-weight: normal;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n  text-rendering: optimizeLegibility; }\n  p.lead {\n    font-size: 1.21875rem;\n    line-height: 1.6; }\n  p aside {\n    font-size: 0.875rem;\n    line-height: 1.35;\n    font-style: italic; }\n\n/* Default header styles */\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  color: #222222;\n  text-rendering: optimizeLegibility;\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  line-height: 1.4; }\n  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n    font-size: 60%;\n    color: #6f6f6f;\n    line-height: 0; }\n\nh1 {\n  font-size: 2.125rem; }\n\nh2 {\n  font-size: 1.6875rem; }\n\nh3 {\n  font-size: 1.375rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1.125rem; }\n\nh6 {\n  font-size: 1rem; }\n\n.subheader {\n  line-height: 1.4;\n  color: #6f6f6f;\n  font-weight: normal;\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem; }\n\nhr {\n  border: solid #DDDDDD;\n  border-width: 1px 0 0;\n  clear: both;\n  margin: 1.25rem 0 1.1875rem;\n  height: 0; }\n\n/* Helpful Typography Defaults */\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 60%;\n  line-height: inherit; }\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #333333;\n  background-color: #f8f8f8;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #dfdfdf;\n  padding: 0.125rem 0.3125rem 0.0625rem; }\n\n/* Lists */\nul,\nol,\ndl {\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 1.25rem;\n  list-style-position: outside;\n  font-family: inherit; }\n\nul {\n  margin-left: 1.1rem; }\n  ul.no-bullet {\n    margin-left: 0; }\n    ul.no-bullet li ul,\n    ul.no-bullet li ol {\n      margin-left: 1.25rem;\n      margin-bottom: 0;\n      list-style: none; }\n\n/* Unordered Lists */\nul li ul,\nul li ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\nul.square li ul, ul.circle li ul, ul.disc li ul {\n  list-style: inherit; }\nul.square {\n  list-style-type: square;\n  margin-left: 1.1rem; }\nul.circle {\n  list-style-type: circle;\n  margin-left: 1.1rem; }\nul.disc {\n  list-style-type: disc;\n  margin-left: 1.1rem; }\nul.no-bullet {\n  list-style: none; }\n\n/* Ordered Lists */\nol {\n  margin-left: 1.4rem; }\n  ol li ul,\n  ol li ol {\n    margin-left: 1.25rem;\n    margin-bottom: 0; }\n\n/* Definition Lists */\ndl dt {\n  margin-bottom: 0.3rem;\n  font-weight: bold; }\ndl dd {\n  margin-bottom: 0.75rem; }\n\n/* Abbreviations */\nabbr,\nacronym {\n  text-transform: uppercase;\n  font-size: 90%;\n  color: #222;\n  cursor: help; }\n\nabbr {\n  text-transform: none; }\n  abbr[title] {\n    border-bottom: 1px dotted #DDDDDD; }\n\n/* Blockquotes */\nblockquote {\n  margin: 0 0 1.25rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #DDDDDD; }\n  blockquote cite {\n    display: block;\n    font-size: 0.8125rem;\n    color: #555555; }\n    blockquote cite:before {\n      content: \"\\2014 \\0020\"; }\n    blockquote cite a,\n    blockquote cite a:visited {\n      color: #555555; }\n\nblockquote,\nblockquote p {\n  line-height: 1.6;\n  color: #6f6f6f; }\n\n/* Microformats */\n.vcard {\n  display: inline-block;\n  margin: 0 0 1.25rem 0;\n  border: 1px solid #DDDDDD;\n  padding: 0.625rem 0.75rem; }\n  .vcard li {\n    margin: 0;\n    display: block; }\n  .vcard .fn {\n    font-weight: bold;\n    font-size: 0.9375rem; }\n\n.vevent .summary {\n  font-weight: bold; }\n.vevent abbr {\n  cursor: default;\n  text-decoration: none;\n  font-weight: bold;\n  border: none;\n  padding: 0 0.0625rem; }\n\n@media only screen and (min-width: 40.063em) {\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.4; }\n\n  h1 {\n    font-size: 2.75rem; }\n\n  h2 {\n    font-size: 2.3125rem; }\n\n  h3 {\n    font-size: 1.6875rem; }\n\n  h4 {\n    font-size: 1.4375rem; }\n\n  h5 {\n    font-size: 1.125rem; }\n\n  h6 {\n    font-size: 1rem; } }\n.split.button {\n  position: relative;\n  padding-right: 5.0625rem; }\n  .split.button span {\n    display: block;\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-left: solid 1px; }\n    .split.button span:after {\n      position: absolute;\n      content: \"\";\n      width: 0;\n      height: 0;\n      display: block;\n      border-style: inset;\n      top: 50%;\n      left: 50%; }\n    .split.button span:active {\n      background-color: rgba(0, 0, 0, 0.1); }\n  .split.button span {\n    border-left-color: rgba(255, 255, 255, 0.5); }\n  .split.button span {\n    width: 3.09375rem; }\n    .split.button span:after {\n      border-top-style: solid;\n      border-width: 0.375rem;\n      top: 48%;\n      margin-left: -0.375rem; }\n  .split.button span:after {\n    border-color: #FFFFFF transparent transparent transparent; }\n  .split.button.secondary span {\n    border-left-color: rgba(255, 255, 255, 0.5); }\n  .split.button.secondary span:after {\n    border-color: #FFFFFF transparent transparent transparent; }\n  .split.button.alert span {\n    border-left-color: rgba(255, 255, 255, 0.5); }\n  .split.button.success span {\n    border-left-color: rgba(255, 255, 255, 0.5); }\n  .split.button.tiny {\n    padding-right: 3.75rem; }\n    .split.button.tiny span {\n      width: 2.25rem; }\n      .split.button.tiny span:after {\n        border-top-style: solid;\n        border-width: 0.375rem;\n        top: 48%;\n        margin-left: -0.375rem; }\n  .split.button.small {\n    padding-right: 4.375rem; }\n    .split.button.small span {\n      width: 2.625rem; }\n      .split.button.small span:after {\n        border-top-style: solid;\n        border-width: 0.4375rem;\n        top: 48%;\n        margin-left: -0.375rem; }\n  .split.button.large {\n    padding-right: 5.5rem; }\n    .split.button.large span {\n      width: 3.4375rem; }\n      .split.button.large span:after {\n        border-top-style: solid;\n        border-width: 0.3125rem;\n        top: 48%;\n        margin-left: -0.375rem; }\n  .split.button.expand {\n    padding-left: 2rem; }\n  .split.button.secondary span:after {\n    border-color: #333333 transparent transparent transparent; }\n  .split.button.radius span {\n    -webkit-border-bottom-right-radius: 3px;\n    -webkit-border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n    border-top-right-radius: 3px; }\n  .split.button.round span {\n    -webkit-border-bottom-right-radius: 1000px;\n    -webkit-border-top-right-radius: 1000px;\n    border-bottom-right-radius: 1000px;\n    border-top-right-radius: 1000px; }\n  .split.button.no-pip span:before {\n    border-style: none; }\n  .split.button.no-pip span:after {\n    border-style: none; }\n  .split.button.no-pip span > i {\n    top: 50%;\n    display: block;\n    position: absolute;\n    left: 50%;\n    margin-left: -0.28889em;\n    margin-top: -0.48889em; }\n\n.reveal-modal-bg {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 1004;\n  display: none;\n  left: 0; }\n\n.reveal-modal {\n  visibility: hidden;\n  display: none;\n  position: absolute;\n  z-index: 1005;\n  width: 100%;\n  top: 0;\n  border-radius: 3px;\n  left: 0;\n  background-color: #FFFFFF;\n  padding: 1.875rem;\n  border: solid 1px #666666;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  @media only screen and (max-width: 40em) {\n    .reveal-modal {\n      min-height: 100vh; } }\n  .reveal-modal .column, .reveal-modal .columns {\n    min-width: 0; }\n  .reveal-modal > :first-child {\n    margin-top: 0; }\n  .reveal-modal > :last-child {\n    margin-bottom: 0; }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal {\n      width: 80%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal {\n      top: 6.25rem; } }\n  .reveal-modal.radius {\n    border-radius: 3px; }\n  .reveal-modal.round {\n    border-radius: 1000px; }\n  .reveal-modal.collapse {\n    padding: 0; }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal.tiny {\n      width: 30%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal.small {\n      width: 40%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal.medium {\n      width: 60%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal.large {\n      width: 70%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  @media only screen and (min-width: 40.063em) {\n    .reveal-modal.xlarge {\n      width: 95%;\n      max-width: 62.5rem;\n      left: 0;\n      right: 0;\n      margin: 0 auto; } }\n  .reveal-modal.full {\n    top: 0;\n    left: 0;\n    height: 100%;\n    height: 100vh;\n    min-height: 100vh;\n    max-width: none !important;\n    margin-left: 0 !important; }\n    @media only screen and (min-width: 40.063em) {\n      .reveal-modal.full {\n        width: 100%;\n        max-width: 62.5rem;\n        left: 0;\n        right: 0;\n        margin: 0 auto; } }\n  .reveal-modal.toback {\n    z-index: 1003; }\n  .reveal-modal .close-reveal-modal {\n    font-size: 2.5rem;\n    line-height: 1;\n    position: absolute;\n    top: 0.625rem;\n    right: 1.375rem;\n    color: #AAAAAA;\n    font-weight: bold;\n    cursor: pointer; }\n\n/* Tooltips */\n.has-tip {\n  border-bottom: dotted 1px #CCCCCC;\n  cursor: help;\n  font-weight: bold;\n  color: #333333; }\n  .has-tip:hover, .has-tip:focus {\n    border-bottom: dotted 1px #003f54;\n    color: #008CBA; }\n  .has-tip.tip-left, .has-tip.tip-right {\n    float: none !important; }\n\n.tooltip {\n  display: none;\n  position: absolute;\n  z-index: 1006;\n  font-weight: normal;\n  font-size: 0.875rem;\n  line-height: 1.3;\n  padding: 0.75rem;\n  max-width: 300px;\n  left: 50%;\n  width: 100%;\n  color: #FFFFFF;\n  background: #333333; }\n  .tooltip > .nub {\n    display: block;\n    left: 5px;\n    position: absolute;\n    width: 0;\n    height: 0;\n    border: solid 5px;\n    border-color: transparent transparent #333333 transparent;\n    top: -10px;\n    pointer-events: none; }\n    .tooltip > .nub.rtl {\n      left: auto;\n      right: 5px; }\n  .tooltip.radius {\n    border-radius: 3px; }\n  .tooltip.round {\n    border-radius: 1000px; }\n    .tooltip.round > .nub {\n      left: 2rem; }\n  .tooltip.opened {\n    color: #008CBA !important;\n    border-bottom: dotted 1px #003f54 !important; }\n\n.tap-to-close {\n  display: block;\n  font-size: 0.625rem;\n  color: #777777;\n  font-weight: normal; }\n\n@media only screen and (min-width: 40.063em) {\n  .tooltip > .nub {\n    border-color: transparent transparent #333333 transparent;\n    top: -10px; }\n  .tooltip.tip-top > .nub {\n    border-color: #333333 transparent transparent transparent;\n    top: auto;\n    bottom: -10px; }\n  .tooltip.tip-left, .tooltip.tip-right {\n    float: none !important; }\n  .tooltip.tip-left > .nub {\n    border-color: transparent transparent transparent #333333;\n    right: -10px;\n    left: auto;\n    top: 50%;\n    margin-top: -5px; }\n  .tooltip.tip-right > .nub {\n    border-color: transparent #333333 transparent transparent;\n    right: auto;\n    left: -10px;\n    top: 50%;\n    margin-top: -5px; } }\n/* Clearing Styles */\n.clearing-thumbs, [data-clearing] {\n  margin-bottom: 0;\n  margin-left: 0;\n  list-style: none; }\n  .clearing-thumbs:before, .clearing-thumbs:after, [data-clearing]:before, [data-clearing]:after {\n    content: \" \";\n    display: table; }\n  .clearing-thumbs:after, [data-clearing]:after {\n    clear: both; }\n  .clearing-thumbs li, [data-clearing] li {\n    float: left;\n    margin-right: 10px; }\n  .clearing-thumbs[class*=\"block-grid-\"] li, [data-clearing][class*=\"block-grid-\"] li {\n    margin-right: 0; }\n\n.clearing-blackout {\n  background: #333333;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 998; }\n  .clearing-blackout .clearing-close {\n    display: block; }\n\n.clearing-container {\n  position: relative;\n  z-index: 998;\n  height: 100%;\n  overflow: hidden;\n  margin: 0; }\n\n.clearing-touch-label {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #AAAAAA;\n  font-size: 0.6em; }\n\n.visible-img {\n  height: 95%;\n  position: relative; }\n  .visible-img img {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translateY(-50%) translateX(-50%);\n    -webkit-transform: translateY(-50%) translateX(-50%);\n    -ms-transform: translateY(-50%) translateX(-50%);\n    max-height: 100%;\n    max-width: 100%; }\n\n.clearing-caption {\n  color: #CCCCCC;\n  font-size: 0.875em;\n  line-height: 1.3;\n  margin-bottom: 0;\n  text-align: center;\n  bottom: 0;\n  background: #333333;\n  width: 100%;\n  padding: 10px 30px 20px;\n  position: absolute;\n  left: 0; }\n\n.clearing-close {\n  z-index: 999;\n  padding-left: 20px;\n  padding-top: 10px;\n  font-size: 30px;\n  line-height: 1;\n  color: #CCCCCC;\n  display: none; }\n  .clearing-close:hover, .clearing-close:focus {\n    color: #CCCCCC; }\n\n.clearing-assembled .clearing-container {\n  height: 100%; }\n  .clearing-assembled .clearing-container .carousel > ul {\n    display: none; }\n\n.clearing-feature li {\n  display: none; }\n  .clearing-feature li.clearing-featured-img {\n    display: block; }\n\n@media only screen and (min-width: 40.063em) {\n  .clearing-main-prev,\n  .clearing-main-next {\n    position: absolute;\n    height: 100%;\n    width: 40px;\n    top: 0; }\n    .clearing-main-prev > span,\n    .clearing-main-next > span {\n      position: absolute;\n      top: 50%;\n      display: block;\n      width: 0;\n      height: 0;\n      border: solid 12px; }\n      .clearing-main-prev > span:hover,\n      .clearing-main-next > span:hover {\n        opacity: 0.8; }\n\n  .clearing-main-prev {\n    left: 0; }\n    .clearing-main-prev > span {\n      left: 5px;\n      border-color: transparent;\n      border-right-color: #CCCCCC; }\n\n  .clearing-main-next {\n    right: 0; }\n    .clearing-main-next > span {\n      border-color: transparent;\n      border-left-color: #CCCCCC; }\n\n  .clearing-main-prev.disabled,\n  .clearing-main-next.disabled {\n    opacity: 0.3; }\n\n  .clearing-assembled .clearing-container .carousel {\n    background: rgba(51, 51, 51, 0.8);\n    height: 120px;\n    margin-top: 10px;\n    text-align: center; }\n    .clearing-assembled .clearing-container .carousel > ul {\n      display: inline-block;\n      z-index: 999;\n      height: 100%;\n      position: relative;\n      float: none; }\n      .clearing-assembled .clearing-container .carousel > ul li {\n        display: block;\n        width: 120px;\n        min-height: inherit;\n        float: left;\n        overflow: hidden;\n        margin-right: 0;\n        padding: 0;\n        position: relative;\n        cursor: pointer;\n        opacity: 0.4;\n        clear: none; }\n        .clearing-assembled .clearing-container .carousel > ul li.fix-height img {\n          height: 100%;\n          max-width: none; }\n        .clearing-assembled .clearing-container .carousel > ul li a.th {\n          border: none;\n          box-shadow: none;\n          display: block; }\n        .clearing-assembled .clearing-container .carousel > ul li img {\n          cursor: pointer !important;\n          width: 100% !important; }\n        .clearing-assembled .clearing-container .carousel > ul li.visible {\n          opacity: 1; }\n        .clearing-assembled .clearing-container .carousel > ul li:hover {\n          opacity: 0.8; }\n  .clearing-assembled .clearing-container .visible-img {\n    background: #333333;\n    overflow: hidden;\n    height: 85%; }\n\n  .clearing-close {\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    padding-left: 0;\n    padding-top: 0; } }\n/* Progress Bar */\n.progress {\n  background-color: #F6F6F6;\n  height: 1.5625rem;\n  border: 1px solid white;\n  padding: 0.125rem;\n  margin-bottom: 0.625rem; }\n  .progress .meter {\n    background: #008CBA;\n    height: 100%;\n    display: block; }\n  .progress.secondary .meter {\n    background: #e7e7e7;\n    height: 100%;\n    display: block; }\n  .progress.success .meter {\n    background: #43AC6A;\n    height: 100%;\n    display: block; }\n  .progress.alert .meter {\n    background: #f04124;\n    height: 100%;\n    display: block; }\n  .progress.radius {\n    border-radius: 3px; }\n    .progress.radius .meter {\n      border-radius: 2px; }\n  .progress.round {\n    border-radius: 1000px; }\n    .progress.round .meter {\n      border-radius: 999px; }\n\n.sub-nav {\n  display: block;\n  width: auto;\n  overflow: hidden;\n  margin-bottom: -0.25rem 0 1.125rem;\n  padding-top: 0.25rem; }\n  .sub-nav dt {\n    text-transform: uppercase; }\n  .sub-nav dt,\n  .sub-nav dd,\n  .sub-nav li {\n    float: left;\n    margin-left: 1rem;\n    margin-bottom: 0;\n    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n    font-weight: normal;\n    font-size: 0.875rem;\n    color: #999999; }\n    .sub-nav dt a,\n    .sub-nav dd a,\n    .sub-nav li a {\n      text-decoration: none;\n      color: #999999;\n      padding: 0.1875rem 1rem; }\n      .sub-nav dt a:hover,\n      .sub-nav dd a:hover,\n      .sub-nav li a:hover {\n        color: #737373; }\n    .sub-nav dt.active a,\n    .sub-nav dd.active a,\n    .sub-nav li.active a {\n      border-radius: 3px;\n      font-weight: normal;\n      background: #008CBA;\n      padding: 0.1875rem 1rem;\n      cursor: default;\n      color: #FFFFFF; }\n      .sub-nav dt.active a:hover,\n      .sub-nav dd.active a:hover,\n      .sub-nav li.active a:hover {\n        background: #0078a0; }\n\n/* Foundation Joyride */\n.joyride-list {\n  display: none; }\n\n/* Default styles for the container */\n.joyride-tip-guide {\n  display: none;\n  position: absolute;\n  background: #333333;\n  color: #FFFFFF;\n  z-index: 101;\n  top: 0;\n  left: 2.5%;\n  font-family: inherit;\n  font-weight: normal;\n  width: 95%; }\n\n.lt-ie9 .joyride-tip-guide {\n  max-width: 800px;\n  left: 50%;\n  margin-left: -400px; }\n\n.joyride-content-wrapper {\n  width: 100%;\n  padding: 1.125rem 1.25rem 1.5rem; }\n  .joyride-content-wrapper .button {\n    margin-bottom: 0 !important; }\n  .joyride-content-wrapper .joyride-prev-tip {\n    margin-right: 10px; }\n\n/* Add a little css triangle pip, older browser just miss out on the fanciness of it */\n.joyride-tip-guide .joyride-nub {\n  display: block;\n  position: absolute;\n  left: 22px;\n  width: 0;\n  height: 0;\n  border: 10px solid #333333; }\n  .joyride-tip-guide .joyride-nub.top {\n    border-top-style: solid;\n    border-color: #333333;\n    border-top-color: transparent !important;\n    border-left-color: transparent !important;\n    border-right-color: transparent !important;\n    top: -20px; }\n  .joyride-tip-guide .joyride-nub.bottom {\n    border-bottom-style: solid;\n    border-color: #333333 !important;\n    border-bottom-color: transparent !important;\n    border-left-color: transparent !important;\n    border-right-color: transparent !important;\n    bottom: -20px; }\n  .joyride-tip-guide .joyride-nub.right {\n    right: -20px; }\n  .joyride-tip-guide .joyride-nub.left {\n    left: -20px; }\n\n/* Typography */\n.joyride-tip-guide h1,\n.joyride-tip-guide h2,\n.joyride-tip-guide h3,\n.joyride-tip-guide h4,\n.joyride-tip-guide h5,\n.joyride-tip-guide h6 {\n  line-height: 1.25;\n  margin: 0;\n  font-weight: bold;\n  color: #FFFFFF; }\n\n.joyride-tip-guide p {\n  margin: 0 0 1.125rem 0;\n  font-size: 0.875rem;\n  line-height: 1.3; }\n\n.joyride-timer-indicator-wrap {\n  width: 50px;\n  height: 3px;\n  border: solid 1px #555555;\n  position: absolute;\n  right: 1.0625rem;\n  bottom: 1rem; }\n\n.joyride-timer-indicator {\n  display: block;\n  width: 0;\n  height: inherit;\n  background: #666666; }\n\n.joyride-close-tip {\n  position: absolute;\n  right: 12px;\n  top: 10px;\n  color: #777777 !important;\n  text-decoration: none;\n  font-size: 24px;\n  font-weight: normal;\n  line-height: .5 !important; }\n  .joyride-close-tip:hover, .joyride-close-tip:focus {\n    color: #EEEEEE !important; }\n\n.joyride-modal-bg {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  display: none;\n  top: 0;\n  left: 0;\n  cursor: pointer; }\n\n.joyride-expose-wrapper {\n  background-color: #FFFFFF;\n  position: absolute;\n  border-radius: 3px;\n  z-index: 102;\n  box-shadow: 0 0 15px #FFFFFF; }\n\n.joyride-expose-cover {\n  background: transparent;\n  border-radius: 3px;\n  position: absolute;\n  z-index: 9999;\n  top: 0;\n  left: 0; }\n\n/* Styles for screens that are at least 768px; */\n@media only screen and (min-width: 40.063em) {\n  .joyride-tip-guide {\n    width: 300px;\n    left: inherit; }\n    .joyride-tip-guide .joyride-nub.bottom {\n      border-color: #333333 !important;\n      border-bottom-color: transparent !important;\n      border-left-color: transparent !important;\n      border-right-color: transparent !important;\n      bottom: -20px; }\n    .joyride-tip-guide .joyride-nub.right {\n      border-color: #333333 !important;\n      border-top-color: transparent !important;\n      border-right-color: transparent !important;\n      border-bottom-color: transparent !important;\n      top: 22px;\n      left: auto;\n      right: -20px; }\n    .joyride-tip-guide .joyride-nub.left {\n      border-color: #333333 !important;\n      border-top-color: transparent !important;\n      border-left-color: transparent !important;\n      border-bottom-color: transparent !important;\n      top: 22px;\n      left: -20px;\n      right: auto; } }\n.label {\n  font-weight: normal;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  text-align: center;\n  text-decoration: none;\n  line-height: 1;\n  white-space: nowrap;\n  display: inline-block;\n  position: relative;\n  margin-bottom: auto;\n  padding: 0.25rem 0.5rem 0.25rem;\n  font-size: 0.6875rem;\n  background-color: #008CBA;\n  color: #FFFFFF; }\n  .label.radius {\n    border-radius: 3px; }\n  .label.round {\n    border-radius: 1000px; }\n  .label.alert {\n    background-color: #f04124;\n    color: #FFFFFF; }\n  .label.warning {\n    background-color: #f08a24;\n    color: #FFFFFF; }\n  .label.success {\n    background-color: #43AC6A;\n    color: #FFFFFF; }\n  .label.secondary {\n    background-color: #e7e7e7;\n    color: #333333; }\n  .label.info {\n    background-color: #a0d3e8;\n    color: #333333; }\n\n.off-canvas-wrap {\n  -webkit-backface-visibility: hidden;\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n  .off-canvas-wrap.move-right, .off-canvas-wrap.move-left {\n    min-height: 100%;\n    -webkit-overflow-scrolling: touch; }\n\n.inner-wrap {\n  position: relative;\n  width: 100%;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .inner-wrap:before, .inner-wrap:after {\n    content: \" \";\n    display: table; }\n  .inner-wrap:after {\n    clear: both; }\n\n.tab-bar {\n  -webkit-backface-visibility: hidden;\n  background: #333333;\n  color: #FFFFFF;\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  position: relative; }\n  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4, .tab-bar h5, .tab-bar h6 {\n    color: #FFFFFF;\n    font-weight: bold;\n    line-height: 2.8125rem;\n    margin: 0; }\n  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4 {\n    font-size: 1.125rem; }\n\n.left-small {\n  width: 2.8125rem;\n  height: 2.8125rem;\n  position: absolute;\n  top: 0;\n  border-right: solid 1px #1a1a1a;\n  left: 0; }\n\n.right-small {\n  width: 2.8125rem;\n  height: 2.8125rem;\n  position: absolute;\n  top: 0;\n  border-left: solid 1px #1a1a1a;\n  right: 0; }\n\n.tab-bar-section {\n  padding: 0 0.625rem;\n  position: absolute;\n  text-align: center;\n  height: 2.8125rem;\n  top: 0; }\n  @media only screen and (min-width: 40.063em) {\n    .tab-bar-section.left {\n      text-align: left; }\n    .tab-bar-section.right {\n      text-align: right; } }\n  .tab-bar-section.left {\n    left: 0;\n    right: 2.8125rem; }\n  .tab-bar-section.right {\n    left: 2.8125rem;\n    right: 0; }\n  .tab-bar-section.middle {\n    left: 2.8125rem;\n    right: 2.8125rem; }\n\n.tab-bar .menu-icon {\n  text-indent: 2.1875rem;\n  width: 2.8125rem;\n  height: 2.8125rem;\n  display: block;\n  padding: 0;\n  color: #FFFFFF;\n  position: relative;\n  transform: translate3d(0, 0, 0); }\n  .tab-bar .menu-icon span::after {\n    content: \"\";\n    position: absolute;\n    display: block;\n    height: 0;\n    top: 50%;\n    margin-top: -0.5rem;\n    left: 0.90625rem;\n    box-shadow: 0 0 0 1px #FFFFFF, 0 7px 0 1px #FFFFFF, 0 14px 0 1px #FFFFFF;\n    width: 1rem; }\n  .tab-bar .menu-icon span:hover:after {\n    box-shadow: 0 0 0 1px #b3b3b3, 0 7px 0 1px #b3b3b3, 0 14px 0 1px #b3b3b3; }\n\n.left-off-canvas-menu {\n  -webkit-backface-visibility: hidden;\n  width: 15.625rem;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #333333;\n  z-index: 1001;\n  box-sizing: content-box;\n  transition: transform 500ms ease 0s;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate3d(-100%, 0, 0);\n  -o-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  left: 0; }\n  .left-off-canvas-menu * {\n    -webkit-backface-visibility: hidden; }\n\n.right-off-canvas-menu {\n  -webkit-backface-visibility: hidden;\n  width: 15.625rem;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #333333;\n  z-index: 1001;\n  box-sizing: content-box;\n  transition: transform 500ms ease 0s;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  -ms-transform: translate(100%, 0);\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  -ms-transform: translate3d(100%, 0, 0);\n  -o-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  right: 0; }\n  .right-off-canvas-menu * {\n    -webkit-backface-visibility: hidden; }\n\nul.off-canvas-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n  ul.off-canvas-list li label {\n    display: block;\n    padding: 0.3rem 0.9375rem;\n    color: #999999;\n    text-transform: uppercase;\n    font-size: 0.75rem;\n    font-weight: bold;\n    background: #444444;\n    border-top: 1px solid #5e5e5e;\n    border-bottom: none;\n    margin: 0; }\n  ul.off-canvas-list li a {\n    display: block;\n    padding: 0.66667rem;\n    color: rgba(255, 255, 255, 0.7);\n    border-bottom: 1px solid #262626;\n    transition: background 300ms ease; }\n    ul.off-canvas-list li a:hover {\n      background: #242424; }\n\n.move-right > .inner-wrap {\n  -ms-transform: translate(15.625rem, 0);\n  -webkit-transform: translate3d(15.625rem, 0, 0);\n  -moz-transform: translate3d(15.625rem, 0, 0);\n  -ms-transform: translate3d(15.625rem, 0, 0);\n  -o-transform: translate3d(15.625rem, 0, 0);\n  transform: translate3d(15.625rem, 0, 0); }\n.move-right .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  transition: background 300ms ease;\n  cursor: pointer;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1002;\n  -webkit-tap-highlight-color: transparent; }\n  @media only screen and (min-width: 40.063em) {\n    .move-right .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.move-left > .inner-wrap {\n  -ms-transform: translate(-15.625rem, 0);\n  -webkit-transform: translate3d(-15.625rem, 0, 0);\n  -moz-transform: translate3d(-15.625rem, 0, 0);\n  -ms-transform: translate3d(-15.625rem, 0, 0);\n  -o-transform: translate3d(-15.625rem, 0, 0);\n  transform: translate3d(-15.625rem, 0, 0); }\n.move-left .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  transition: background 300ms ease;\n  cursor: pointer;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1002;\n  -webkit-tap-highlight-color: transparent; }\n  @media only screen and (min-width: 40.063em) {\n    .move-left .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap .left-off-canvas-menu, .offcanvas-overlap .right-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  transition: background 300ms ease;\n  cursor: pointer;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1002;\n  -webkit-tap-highlight-color: transparent; }\n  @media only screen and (min-width: 40.063em) {\n    .offcanvas-overlap .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap-left .right-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap-left .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  transition: background 300ms ease;\n  cursor: pointer;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1002;\n  -webkit-tap-highlight-color: transparent; }\n  @media only screen and (min-width: 40.063em) {\n    .offcanvas-overlap-left .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.offcanvas-overlap-right .left-off-canvas-menu {\n  -ms-transform: none;\n  -webkit-transform: none;\n  -moz-transform: none;\n  -o-transform: none;\n  transform: none;\n  z-index: 1003; }\n.offcanvas-overlap-right .exit-off-canvas {\n  -webkit-backface-visibility: hidden;\n  transition: background 300ms ease;\n  cursor: pointer;\n  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1002;\n  -webkit-tap-highlight-color: transparent; }\n  @media only screen and (min-width: 40.063em) {\n    .offcanvas-overlap-right .exit-off-canvas:hover {\n      background: rgba(255, 255, 255, 0.05); } }\n\n.no-csstransforms .left-off-canvas-menu {\n  left: -15.625rem; }\n.no-csstransforms .right-off-canvas-menu {\n  right: -15.625rem; }\n.no-csstransforms .move-left > .inner-wrap {\n  right: 15.625rem; }\n.no-csstransforms .move-right > .inner-wrap {\n  left: 15.625rem; }\n\n.left-submenu {\n  -webkit-backface-visibility: hidden;\n  width: 15.625rem;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #333333;\n  z-index: 1002;\n  box-sizing: content-box;\n  -webkit-overflow-scrolling: touch;\n  -ms-transform: translate(-100%, 0);\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  -ms-transform: translate3d(-100%, 0, 0);\n  -o-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  left: 0;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .left-submenu * {\n    -webkit-backface-visibility: hidden; }\n  .left-submenu .back > a {\n    padding: 0.3rem 0.9375rem;\n    color: #999999;\n    text-transform: uppercase;\n    font-weight: bold;\n    background: #444;\n    border-top: 1px solid #5e5e5e;\n    border-bottom: none;\n    margin: 0; }\n    .left-submenu .back > a:hover {\n      background: #303030;\n      border-top: 1px solid #5e5e5e;\n      border-bottom: none; }\n    .left-submenu .back > a:before {\n      content: \"\\AB\";\n      margin-right: 0.5rem;\n      display: inline; }\n  .left-submenu.move-right, .left-submenu.offcanvas-overlap-right, .left-submenu.offcanvas-overlap {\n    -ms-transform: translate(0%, 0);\n    -webkit-transform: translate3d(0%, 0, 0);\n    -moz-transform: translate3d(0%, 0, 0);\n    -ms-transform: translate3d(0%, 0, 0);\n    -o-transform: translate3d(0%, 0, 0);\n    transform: translate3d(0%, 0, 0); }\n\n.right-submenu {\n  -webkit-backface-visibility: hidden;\n  width: 15.625rem;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #333333;\n  z-index: 1002;\n  box-sizing: content-box;\n  -webkit-overflow-scrolling: touch;\n  -ms-transform: translate(100%, 0);\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  -ms-transform: translate3d(100%, 0, 0);\n  -o-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  right: 0;\n  -webkit-transition: -webkit-transform 500ms ease;\n  -moz-transition: -moz-transform 500ms ease;\n  -ms-transition: -ms-transform 500ms ease;\n  -o-transition: -o-transform 500ms ease;\n  transition: transform 500ms ease; }\n  .right-submenu * {\n    -webkit-backface-visibility: hidden; }\n  .right-submenu .back > a {\n    padding: 0.3rem 0.9375rem;\n    color: #999999;\n    text-transform: uppercase;\n    font-weight: bold;\n    background: #444;\n    border-top: 1px solid #5e5e5e;\n    border-bottom: none;\n    margin: 0; }\n    .right-submenu .back > a:hover {\n      background: #303030;\n      border-top: 1px solid #5e5e5e;\n      border-bottom: none; }\n    .right-submenu .back > a:after {\n      content: \"\\BB\";\n      margin-left: 0.5rem;\n      display: inline; }\n  .right-submenu.move-left, .right-submenu.offcanvas-overlap-left, .right-submenu.offcanvas-overlap {\n    -ms-transform: translate(0%, 0);\n    -webkit-transform: translate3d(0%, 0, 0);\n    -moz-transform: translate3d(0%, 0, 0);\n    -ms-transform: translate3d(0%, 0, 0);\n    -o-transform: translate3d(0%, 0, 0);\n    transform: translate3d(0%, 0, 0); }\n\n.left-off-canvas-menu ul.off-canvas-list li.has-submenu > a:after {\n  content: \"\\BB\";\n  margin-left: 0.5rem;\n  display: inline; }\n\n.right-off-canvas-menu ul.off-canvas-list li.has-submenu > a:before {\n  content: \"\\AB\";\n  margin-right: 0.5rem;\n  display: inline; }\n\n/* Foundation Dropdowns */\n.f-dropdown {\n  position: absolute;\n  left: -9999px;\n  list-style: none;\n  margin-left: 0;\n  outline: none;\n  width: 100%;\n  max-height: none;\n  height: auto;\n  background: #FFFFFF;\n  border: solid 1px #cccccc;\n  font-size: 0.875rem;\n  z-index: 89;\n  margin-top: 2px;\n  max-width: 200px; }\n  .f-dropdown > *:first-child {\n    margin-top: 0; }\n  .f-dropdown > *:last-child {\n    margin-bottom: 0; }\n  .f-dropdown:before {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 6px;\n    border-color: transparent transparent #FFFFFF transparent;\n    border-bottom-style: solid;\n    position: absolute;\n    top: -12px;\n    left: 10px;\n    z-index: 89; }\n  .f-dropdown:after {\n    content: \"\";\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 7px;\n    border-color: transparent transparent #cccccc transparent;\n    border-bottom-style: solid;\n    position: absolute;\n    top: -14px;\n    left: 9px;\n    z-index: 88; }\n  .f-dropdown.right:before {\n    left: auto;\n    right: 10px; }\n  .f-dropdown.right:after {\n    left: auto;\n    right: 9px; }\n  .f-dropdown.drop-right {\n    position: absolute;\n    left: -9999px;\n    list-style: none;\n    margin-left: 0;\n    outline: none;\n    width: 100%;\n    max-height: none;\n    height: auto;\n    background: #FFFFFF;\n    border: solid 1px #cccccc;\n    font-size: 0.875rem;\n    z-index: 89;\n    margin-top: 0;\n    margin-left: 2px;\n    max-width: 200px; }\n    .f-dropdown.drop-right > *:first-child {\n      margin-top: 0; }\n    .f-dropdown.drop-right > *:last-child {\n      margin-bottom: 0; }\n    .f-dropdown.drop-right:before {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 6px;\n      border-color: transparent #FFFFFF transparent transparent;\n      border-right-style: solid;\n      position: absolute;\n      top: 10px;\n      left: -12px;\n      z-index: 89; }\n    .f-dropdown.drop-right:after {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 7px;\n      border-color: transparent #cccccc transparent transparent;\n      border-right-style: solid;\n      position: absolute;\n      top: 9px;\n      left: -14px;\n      z-index: 88; }\n  .f-dropdown.drop-left {\n    position: absolute;\n    left: -9999px;\n    list-style: none;\n    margin-left: 0;\n    outline: none;\n    width: 100%;\n    max-height: none;\n    height: auto;\n    background: #FFFFFF;\n    border: solid 1px #cccccc;\n    font-size: 0.875rem;\n    z-index: 89;\n    margin-top: 0;\n    margin-left: -2px;\n    max-width: 200px; }\n    .f-dropdown.drop-left > *:first-child {\n      margin-top: 0; }\n    .f-dropdown.drop-left > *:last-child {\n      margin-bottom: 0; }\n    .f-dropdown.drop-left:before {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 6px;\n      border-color: transparent transparent transparent #FFFFFF;\n      border-left-style: solid;\n      position: absolute;\n      top: 10px;\n      right: -12px;\n      left: auto;\n      z-index: 89; }\n    .f-dropdown.drop-left:after {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 7px;\n      border-color: transparent transparent transparent #cccccc;\n      border-left-style: solid;\n      position: absolute;\n      top: 9px;\n      right: -14px;\n      left: auto;\n      z-index: 88; }\n  .f-dropdown.drop-top {\n    position: absolute;\n    left: -9999px;\n    list-style: none;\n    margin-left: 0;\n    outline: none;\n    width: 100%;\n    max-height: none;\n    height: auto;\n    background: #FFFFFF;\n    border: solid 1px #cccccc;\n    font-size: 0.875rem;\n    z-index: 89;\n    margin-top: -2px;\n    margin-left: 0;\n    max-width: 200px; }\n    .f-dropdown.drop-top > *:first-child {\n      margin-top: 0; }\n    .f-dropdown.drop-top > *:last-child {\n      margin-bottom: 0; }\n    .f-dropdown.drop-top:before {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 6px;\n      border-color: #FFFFFF transparent transparent transparent;\n      border-top-style: solid;\n      position: absolute;\n      top: auto;\n      bottom: -12px;\n      left: 10px;\n      right: auto;\n      z-index: 89; }\n    .f-dropdown.drop-top:after {\n      content: \"\";\n      display: block;\n      width: 0;\n      height: 0;\n      border: inset 7px;\n      border-color: #cccccc transparent transparent transparent;\n      border-top-style: solid;\n      position: absolute;\n      top: auto;\n      bottom: -14px;\n      left: 9px;\n      right: auto;\n      z-index: 88; }\n  .f-dropdown li {\n    font-size: 0.875rem;\n    cursor: pointer;\n    line-height: 1.125rem;\n    margin: 0; }\n    .f-dropdown li:hover, .f-dropdown li:focus {\n      background: #EEEEEE; }\n    .f-dropdown li.radius {\n      border-radius: 3px; }\n    .f-dropdown li a {\n      display: block;\n      padding: 0.5rem;\n      color: #555555; }\n  .f-dropdown.content {\n    position: absolute;\n    left: -9999px;\n    list-style: none;\n    margin-left: 0;\n    outline: none;\n    padding: 1.25rem;\n    width: 100%;\n    height: auto;\n    max-height: none;\n    background: #FFFFFF;\n    border: solid 1px #cccccc;\n    font-size: 0.875rem;\n    z-index: 89;\n    max-width: 200px; }\n    .f-dropdown.content > *:first-child {\n      margin-top: 0; }\n    .f-dropdown.content > *:last-child {\n      margin-bottom: 0; }\n  .f-dropdown.tiny {\n    max-width: 200px; }\n  .f-dropdown.small {\n    max-width: 300px; }\n  .f-dropdown.medium {\n    max-width: 500px; }\n  .f-dropdown.large {\n    max-width: 800px; }\n  .f-dropdown.mega {\n    width: 100% !important;\n    max-width: 100% !important; }\n    .f-dropdown.mega.open {\n      left: 0 !important; }\n\ntable {\n  background: #FFFFFF;\n  margin-bottom: 1.25rem;\n  border: solid 1px #DDDDDD;\n  table-layout: auto; }\n  table caption {\n    background: transparent;\n    color: #222222;\n    font-size: 1rem;\n    font-weight: bold; }\n  table thead {\n    background: #F5F5F5; }\n    table thead tr th,\n    table thead tr td {\n      padding: 0.5rem 0.625rem 0.625rem;\n      font-size: 0.875rem;\n      font-weight: bold;\n      color: #222222; }\n  table tfoot {\n    background: #F5F5F5; }\n    table tfoot tr th,\n    table tfoot tr td {\n      padding: 0.5rem 0.625rem 0.625rem;\n      font-size: 0.875rem;\n      font-weight: bold;\n      color: #222222; }\n  table tr th,\n  table tr td {\n    padding: 0.5625rem 0.625rem;\n    font-size: 0.875rem;\n    color: #222222;\n    text-align: left; }\n  table tr.even, table tr.alt, table tr:nth-of-type(even) {\n    background: #F9F9F9; }\n  table thead tr th,\n  table tfoot tr th,\n  table tfoot tr td,\n  table tbody tr th,\n  table tbody tr td,\n  table tr td {\n    display: table-cell;\n    line-height: 1.125rem; }\n\n.range-slider {\n  position: relative;\n  border: 1px solid #DDDDDD;\n  margin: 1.25rem 0;\n  -ms-touch-action: none;\n  touch-action: none;\n  display: block;\n  width: 100%;\n  height: 1rem;\n  background: #FAFAFA; }\n  .range-slider.vertical-range {\n    position: relative;\n    border: 1px solid #DDDDDD;\n    margin: 1.25rem 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    display: inline-block;\n    width: 1rem;\n    height: 12.5rem; }\n    .range-slider.vertical-range .range-slider-handle {\n      margin-top: 0;\n      margin-left: -0.5rem;\n      position: absolute;\n      bottom: -10.5rem; }\n    .range-slider.vertical-range .range-slider-active-segment {\n      width: 0.875rem;\n      height: auto;\n      bottom: 0; }\n  .range-slider.radius {\n    background: #FAFAFA;\n    border-radius: 3px; }\n    .range-slider.radius .range-slider-handle {\n      background: #008CBA;\n      border-radius: 3px; }\n      .range-slider.radius .range-slider-handle:hover {\n        background: #007ba4; }\n  .range-slider.round {\n    background: #FAFAFA;\n    border-radius: 1000px; }\n    .range-slider.round .range-slider-handle {\n      background: #008CBA;\n      border-radius: 1000px; }\n      .range-slider.round .range-slider-handle:hover {\n        background: #007ba4; }\n  .range-slider.disabled, .range-slider[disabled] {\n    background: #FAFAFA;\n    cursor: not-allowed;\n    opacity: 0.7; }\n    .range-slider.disabled .range-slider-handle, .range-slider[disabled] .range-slider-handle {\n      background: #008CBA;\n      cursor: default;\n      opacity: 0.7; }\n      .range-slider.disabled .range-slider-handle:hover, .range-slider[disabled] .range-slider-handle:hover {\n        background: #007ba4; }\n\n.range-slider-active-segment {\n  display: inline-block;\n  position: absolute;\n  height: 0.875rem;\n  background: #e5e5e5; }\n\n.range-slider-handle {\n  display: inline-block;\n  position: absolute;\n  z-index: 1;\n  top: -0.3125rem;\n  width: 2rem;\n  height: 1.375rem;\n  border: 1px solid none;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  background: #008CBA; }\n  .range-slider-handle:hover {\n    background: #007ba4; }\n\n[class*=\"block-grid-\"] {\n  display: block;\n  padding: 0;\n  margin: 0 -0.625rem; }\n  [class*=\"block-grid-\"]:before, [class*=\"block-grid-\"]:after {\n    content: \" \";\n    display: table; }\n  [class*=\"block-grid-\"]:after {\n    clear: both; }\n  [class*=\"block-grid-\"] > li {\n    display: block;\n    height: auto;\n    float: left;\n    padding: 0 0.625rem 1.25rem; }\n\n@media only screen {\n  .small-block-grid-1 > li {\n    width: 100%;\n    list-style: none; }\n    .small-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n\n  .small-block-grid-2 > li {\n    width: 50%;\n    list-style: none; }\n    .small-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n\n  .small-block-grid-3 > li {\n    width: 33.33333%;\n    list-style: none; }\n    .small-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n\n  .small-block-grid-4 > li {\n    width: 25%;\n    list-style: none; }\n    .small-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n\n  .small-block-grid-5 > li {\n    width: 20%;\n    list-style: none; }\n    .small-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n\n  .small-block-grid-6 > li {\n    width: 16.66667%;\n    list-style: none; }\n    .small-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n\n  .small-block-grid-7 > li {\n    width: 14.28571%;\n    list-style: none; }\n    .small-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n\n  .small-block-grid-8 > li {\n    width: 12.5%;\n    list-style: none; }\n    .small-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n\n  .small-block-grid-9 > li {\n    width: 11.11111%;\n    list-style: none; }\n    .small-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n\n  .small-block-grid-10 > li {\n    width: 10%;\n    list-style: none; }\n    .small-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n\n  .small-block-grid-11 > li {\n    width: 9.09091%;\n    list-style: none; }\n    .small-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n\n  .small-block-grid-12 > li {\n    width: 8.33333%;\n    list-style: none; }\n    .small-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n@media only screen and (min-width: 40.063em) {\n  .medium-block-grid-1 > li {\n    width: 100%;\n    list-style: none; }\n    .medium-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n\n  .medium-block-grid-2 > li {\n    width: 50%;\n    list-style: none; }\n    .medium-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n\n  .medium-block-grid-3 > li {\n    width: 33.33333%;\n    list-style: none; }\n    .medium-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n\n  .medium-block-grid-4 > li {\n    width: 25%;\n    list-style: none; }\n    .medium-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n\n  .medium-block-grid-5 > li {\n    width: 20%;\n    list-style: none; }\n    .medium-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n\n  .medium-block-grid-6 > li {\n    width: 16.66667%;\n    list-style: none; }\n    .medium-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n\n  .medium-block-grid-7 > li {\n    width: 14.28571%;\n    list-style: none; }\n    .medium-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n\n  .medium-block-grid-8 > li {\n    width: 12.5%;\n    list-style: none; }\n    .medium-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n\n  .medium-block-grid-9 > li {\n    width: 11.11111%;\n    list-style: none; }\n    .medium-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n\n  .medium-block-grid-10 > li {\n    width: 10%;\n    list-style: none; }\n    .medium-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n\n  .medium-block-grid-11 > li {\n    width: 9.09091%;\n    list-style: none; }\n    .medium-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n\n  .medium-block-grid-12 > li {\n    width: 8.33333%;\n    list-style: none; }\n    .medium-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n@media only screen and (min-width: 64.063em) {\n  .large-block-grid-1 > li {\n    width: 100%;\n    list-style: none; }\n    .large-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n\n  .large-block-grid-2 > li {\n    width: 50%;\n    list-style: none; }\n    .large-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n\n  .large-block-grid-3 > li {\n    width: 33.33333%;\n    list-style: none; }\n    .large-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n\n  .large-block-grid-4 > li {\n    width: 25%;\n    list-style: none; }\n    .large-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n\n  .large-block-grid-5 > li {\n    width: 20%;\n    list-style: none; }\n    .large-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n\n  .large-block-grid-6 > li {\n    width: 16.66667%;\n    list-style: none; }\n    .large-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n\n  .large-block-grid-7 > li {\n    width: 14.28571%;\n    list-style: none; }\n    .large-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n\n  .large-block-grid-8 > li {\n    width: 12.5%;\n    list-style: none; }\n    .large-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n\n  .large-block-grid-9 > li {\n    width: 11.11111%;\n    list-style: none; }\n    .large-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n\n  .large-block-grid-10 > li {\n    width: 10%;\n    list-style: none; }\n    .large-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n\n  .large-block-grid-11 > li {\n    width: 9.09091%;\n    list-style: none; }\n    .large-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n\n  .large-block-grid-12 > li {\n    width: 8.33333%;\n    list-style: none; }\n    .large-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n.flex-video {\n  position: relative;\n  padding-top: 1.5625rem;\n  padding-bottom: 67.5%;\n  height: 0;\n  margin-bottom: 1rem;\n  overflow: hidden; }\n  .flex-video.widescreen {\n    padding-bottom: 56.34%; }\n  .flex-video.vimeo {\n    padding-top: 0; }\n  .flex-video iframe,\n  .flex-video object,\n  .flex-video embed,\n  .flex-video video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.keystroke,\nkbd {\n  background-color: #ededed;\n  border-color: #dddddd;\n  color: #222222;\n  border-style: solid;\n  border-width: 1px;\n  margin: 0;\n  font-family: \"Consolas\", \"Menlo\", \"Courier\", monospace;\n  font-size: inherit;\n  padding: 0.125rem 0.25rem 0;\n  border-radius: 3px; }\n\n.switch {\n  padding: 0;\n  border: none;\n  position: relative;\n  outline: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n  .switch label {\n    display: block;\n    margin-bottom: 1rem;\n    position: relative;\n    color: transparent;\n    background: #DDDDDD;\n    text-indent: 100%;\n    width: 4rem;\n    height: 2rem;\n    cursor: pointer;\n    transition: left 0.15s ease-out; }\n  .switch input {\n    opacity: 0;\n    position: absolute;\n    top: 9px;\n    left: 10px;\n    padding: 0; }\n    .switch input + label {\n      margin-left: 0;\n      margin-right: 0; }\n  .switch label:after {\n    content: \"\";\n    display: block;\n    background: #FFFFFF;\n    position: absolute;\n    top: .25rem;\n    left: .25rem;\n    width: 1.5rem;\n    height: 1.5rem;\n    -webkit-transition: left 0.15s ease-out;\n    -moz-transition: left 0.15s ease-out;\n    -o-transition: translate3d(0, 0, 0);\n    transition: left 0.15s ease-out;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  .switch input:checked + label {\n    background: #008CBA; }\n  .switch input:checked + label:after {\n    left: 2.25rem; }\n  .switch label {\n    width: 4rem;\n    height: 2rem; }\n  .switch label:after {\n    width: 1.5rem;\n    height: 1.5rem; }\n  .switch input:checked + label:after {\n    left: 2.25rem; }\n  .switch label {\n    color: transparent;\n    background: #DDDDDD; }\n  .switch label:after {\n    background: #FFFFFF; }\n  .switch input:checked + label {\n    background: #008CBA; }\n  .switch.large label {\n    width: 5rem;\n    height: 2.5rem; }\n  .switch.large label:after {\n    width: 2rem;\n    height: 2rem; }\n  .switch.large input:checked + label:after {\n    left: 2.75rem; }\n  .switch.small label {\n    width: 3.5rem;\n    height: 1.75rem; }\n  .switch.small label:after {\n    width: 1.25rem;\n    height: 1.25rem; }\n  .switch.small input:checked + label:after {\n    left: 2rem; }\n  .switch.tiny label {\n    width: 3rem;\n    height: 1.5rem; }\n  .switch.tiny label:after {\n    width: 1rem;\n    height: 1rem; }\n  .switch.tiny input:checked + label:after {\n    left: 1.75rem; }\n  .switch.radius label {\n    border-radius: 4px; }\n  .switch.radius label:after {\n    border-radius: 3px; }\n  .switch.round {\n    border-radius: 1000px; }\n    .switch.round label {\n      border-radius: 2rem; }\n    .switch.round label:after {\n      border-radius: 2rem; }\n\n/* small displays */\n@media only screen {\n  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n\n  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n\n  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n\n  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n\n  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n\n  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n\n  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n\n  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n/* medium displays */\n@media only screen and (min-width: 40.063em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n/* large displays */\n@media only screen and (min-width: 64.063em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n/* xlarge displays */\n@media only screen and (min-width: 90.063em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xlarge, td.show-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n/* xxlarge displays */\n@media only screen and (min-width: 120.063em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .hidden-for-xxlarge-down {\n    position: absolute !important;\n    height: 1px;\n    width: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px); }\n\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xlarge, table.hide-for-xlarge-down, table.show-for-xxlarge-only, table.show-for-xxlarge-up, table.show-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xlarge, thead.hide-for-xlarge-down, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up, thead.show-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xlarge, tbody.hide-for-xlarge-down, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up, tbody.show-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xlarge, tr.hide-for-xlarge-down, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up, tr.show-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.hide-for-xlarge-down, td.hide-for-xlarge-down, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up, th.show-for-xxlarge, td.show-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n/* Orientation targeting */\n.show-for-landscape,\n.hide-for-portrait {\n  display: inherit !important; }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-landscape, table.show-for-portrait {\n  display: table !important; }\n\nthead.hide-for-landscape, thead.show-for-portrait {\n  display: table-header-group !important; }\n\ntbody.hide-for-landscape, tbody.show-for-portrait {\n  display: table-row-group !important; }\n\ntr.hide-for-landscape, tr.show-for-portrait {\n  display: table-row !important; }\n\ntd.hide-for-landscape, td.show-for-portrait,\nth.hide-for-landscape,\nth.show-for-portrait {\n  display: table-cell !important; }\n\n@media only screen and (orientation: landscape) {\n  .show-for-landscape,\n  .hide-for-portrait {\n    display: inherit !important; }\n\n  .hide-for-landscape,\n  .show-for-portrait {\n    display: none !important; }\n\n  /* Specific visibility for tables */\n  table.show-for-landscape, table.hide-for-portrait {\n    display: table !important; }\n\n  thead.show-for-landscape, thead.hide-for-portrait {\n    display: table-header-group !important; }\n\n  tbody.show-for-landscape, tbody.hide-for-portrait {\n    display: table-row-group !important; }\n\n  tr.show-for-landscape, tr.hide-for-portrait {\n    display: table-row !important; }\n\n  td.show-for-landscape, td.hide-for-portrait,\n  th.show-for-landscape,\n  th.hide-for-portrait {\n    display: table-cell !important; } }\n@media only screen and (orientation: portrait) {\n  .show-for-portrait,\n  .hide-for-landscape {\n    display: inherit !important; }\n\n  .hide-for-portrait,\n  .show-for-landscape {\n    display: none !important; }\n\n  /* Specific visibility for tables */\n  table.show-for-portrait, table.hide-for-landscape {\n    display: table !important; }\n\n  thead.show-for-portrait, thead.hide-for-landscape {\n    display: table-header-group !important; }\n\n  tbody.show-for-portrait, tbody.hide-for-landscape {\n    display: table-row-group !important; }\n\n  tr.show-for-portrait, tr.hide-for-landscape {\n    display: table-row !important; }\n\n  td.show-for-portrait, td.hide-for-landscape,\n  th.show-for-portrait,\n  th.hide-for-landscape {\n    display: table-cell !important; } }\n/* Touch-enabled device targeting */\n.show-for-touch {\n  display: none !important; }\n\n.hide-for-touch {\n  display: inherit !important; }\n\n.touch .show-for-touch {\n  display: inherit !important; }\n\n.touch .hide-for-touch {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-touch {\n  display: table !important; }\n\n.touch table.show-for-touch {\n  display: table !important; }\n\nthead.hide-for-touch {\n  display: table-header-group !important; }\n\n.touch thead.show-for-touch {\n  display: table-header-group !important; }\n\ntbody.hide-for-touch {\n  display: table-row-group !important; }\n\n.touch tbody.show-for-touch {\n  display: table-row-group !important; }\n\ntr.hide-for-touch {\n  display: table-row !important; }\n\n.touch tr.show-for-touch {\n  display: table-row !important; }\n\ntd.hide-for-touch {\n  display: table-cell !important; }\n\n.touch td.show-for-touch {\n  display: table-cell !important; }\n\nth.hide-for-touch {\n  display: table-cell !important; }\n\n.touch th.show-for-touch {\n  display: table-cell !important; }\n\n/*\n * Print styles.\n *\n * Inlined to avoid required HTTP connection: www.phpied.com/delay-loading-your-print-css/\n * Credit to Paul Irish and HTML5 Boilerplate (html5boilerplate.com)\n*/\n.print-only {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000000 !important;\n    /* Black prints faster: h5bp.com/s */\n    box-shadow: none !important;\n    text-shadow: none !important; }\n\n  .show-for-print {\n    display: block; }\n\n  .hide-for-print {\n    display: none; }\n\n  table.show-for-print {\n    display: table !important; }\n\n  thead.show-for-print {\n    display: table-header-group !important; }\n\n  tbody.show-for-print {\n    display: table-row-group !important; }\n\n  tr.show-for-print {\n    display: table-row !important; }\n\n  td.show-for-print {\n    display: table-cell !important; }\n\n  th.show-for-print {\n    display: table-cell !important; }\n\n  a,\n  a:visited {\n    text-decoration: underline; }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n\n  .ir a:after,\n  a[href^=\"javascript:\"]:after,\n  a[href^=\"#\"]:after {\n    content: \"\"; }\n\n  pre,\n  blockquote {\n    border: 1px solid #999999;\n    page-break-inside: avoid; }\n\n  thead {\n    display: table-header-group;\n    /* h5bp.com/t */ }\n\n  tr,\n  img {\n    page-break-inside: avoid; }\n\n  img {\n    max-width: 100% !important; }\n\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n\n  h2,\n  h3 {\n    page-break-after: avoid; }\n\n  .hide-on-print {\n    display: none !important; }\n\n  .print-only {\n    display: block !important; }\n\n  .hide-for-print {\n    display: none !important; }\n\n  .show-for-print {\n    display: inherit !important; } }\n/* Print visibility */\n@media print {\n  .show-for-print {\n    display: block; }\n\n  .hide-for-print {\n    display: none; }\n\n  table.show-for-print {\n    display: table !important; }\n\n  thead.show-for-print {\n    display: table-header-group !important; }\n\n  tbody.show-for-print {\n    display: table-row-group !important; }\n\n  tr.show-for-print {\n    display: table-row !important; }\n\n  td.show-for-print {\n    display: table-cell !important; }\n\n  th.show-for-print {\n    display: table-cell !important; } }\n"; (require("c:\\_projects\\bnwan\\dashboard\\node_modules\\cssify"))(css); module.exports = css;
},{"c:\\_projects\\bnwan\\dashboard\\node_modules\\cssify":4}],3:[function(require,module,exports){
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var i = class_array.length;
    var head = $('head');

    while (i--) {
      if (head.has('.' + class_array[i]).length === 0) {
        head.append('<meta class="' + class_array[i] + '" />');
      }
    }
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) {
            return context;
          }
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) {
      arr.push('data');
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace);
    }
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        bind = function(){
          var $this = S(this),
              should_bind_events = !$this.data(self.attr_name(true) + '-init');
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

          if (should_bind_events) {
            self.events(this);
          }
        };

    if (S(this.scope).is('[' + this.attr_name() +']')) {
      bind.call(this.scope);
    } else {
      S('[' + this.attr_name() +']', this.scope).each(bind);
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*
    https://github.com/paulirish/matchMedia.js
  */

  window.matchMedia = window.matchMedia || (function ( doc ) {

    'use strict';

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( 'body' ),
        div = doc.createElement( 'div' );

    div.id = 'mq-test-1';
    div.style.cssText = 'position:absolute;top:-100em';
    fakeBody.style.background = 'none';
    fakeBody.appendChild(div);

    return function (q) {

      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';

      docElem.insertBefore( fakeBody, refNode );
      bool = div.offsetWidth === 42;
      docElem.removeChild( fakeBody );

      return {
        matches : bool,
        media : q
      };

    };

  }( document ));

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function(jQuery) {


  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( $ ));

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '5.5.1',

    media_queries : {
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global : {
      namespace : undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
              $.extend(true, this.libs[lib].settings, args[lib]);
            } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace : function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) {
            result = func.apply(context, args);
          }
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str);
          }
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) {
            p[1] = true;
          }
          if (/false/i.test(p[1])) {
            p[1] = false;
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }');
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        if (unloaded === 0) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) {
          this.fidx = 0;
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match : function (mq) {
        return window.matchMedia(mq).matches;
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up : function () {
        return this.match(Foundation.media_queries.small);
      },

      is_medium_up : function () {
        return this.match(Foundation.media_queries.medium);
      },

      is_large_up : function () {
        return this.match(Foundation.media_queries.large);
      },

      is_xlarge_up : function () {
        return this.match(Foundation.media_queries.xlarge);
      },

      is_xxlarge_up : function () {
        return this.match(Foundation.media_queries.xxlarge);
      },

      is_small_only : function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_medium_only : function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_large_only : function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xxlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.slider = {
    name : 'slider',

    version : '5.5.1',

    settings : {
      start : 0,
      end : 100,
      step : 1,
      precision : null,
      initial : null,
      display_selector : '',
      vertical : false,
      trigger_input_change : false,
      on_change : function () {}
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.slider')
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function (e) {
          if (!self.cache.active) {
            e.preventDefault();
            self.set_active_slider($(e.target));
          }
        })
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (e) {
          if (!!self.cache.active) {
            e.preventDefault();
            if ($.data(self.cache.active[0], 'settings').vertical) {
              var scroll_offset = 0;
              if (!e.pageY) {
                scroll_offset = window.scrollY;
              }
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);
            } else {
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));
            }
          }
        })
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function (e) {
          self.remove_active_slider();
        })
        .on('change.fndtn.slider', function (e) {
          self.settings.on_change();
        });

      self.S(window)
        .on('resize.fndtn.slider', self.throttle(function (e) {
          self.reflow();
        }, 300));
    },

    get_cursor_position : function (e, xy) {
      var pageXY = 'page' + xy.toUpperCase(),
          clientXY = 'client' + xy.toUpperCase(),
          position;

      if (typeof e[pageXY] !== 'undefined') {
        position = e[pageXY];
      } else if (typeof e.originalEvent[clientXY] !== 'undefined') {
        position = e.originalEvent[clientXY];
      } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];
      } else if (e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {
        position = e.currentPoint[xy];
      }

      return position;
    },

    set_active_slider : function ($handle) {
      this.cache.active = $handle;
    },

    remove_active_slider : function () {
      this.cache.active = null;
    },

    calculate_position : function ($handle, cursor_x) {
      var self = this,
          settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          handle_o = $.data($handle[0], 'handle_o'),
          bar_l = $.data($handle[0], 'bar_l'),
          bar_o = $.data($handle[0], 'bar_o');

      requestAnimationFrame(function () {
        var pct;

        if (Foundation.rtl && !settings.vertical) {
          pct = self.limit_to(((bar_o + bar_l - cursor_x) / bar_l), 0, 1);
        } else {
          pct = self.limit_to(((cursor_x - bar_o) / bar_l), 0, 1);
        }

        pct = settings.vertical ? 1 - pct : pct;

        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);

        self.set_ui($handle, norm);
      });
    },

    set_ui : function ($handle, value) {
      var settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          bar_l = $.data($handle[0], 'bar_l'),
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),
          handle_offset = norm_pct * (bar_l - handle_l) - 1,
          progress_bar_length = norm_pct * 100,
          $handle_parent = $handle.parent(),
          $hidden_inputs = $handle.parent().children('input[type=hidden]');

      if (Foundation.rtl && !settings.vertical) {
        handle_offset = -handle_offset;
      }

      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;
      this.set_translate($handle, handle_offset, settings.vertical);

      if (settings.vertical) {
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');
      } else {
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');
      }

      $handle_parent.attr(this.attr_name(), value).trigger('change').trigger('change.fndtn.slider');

      $hidden_inputs.val(value);
      if (settings.trigger_input_change) {
          $hidden_inputs.trigger('change');
      }

      if (!$handle[0].hasAttribute('aria-valuemin')) {
        $handle.attr({
          'aria-valuemin' : settings.start,
          'aria-valuemax' : settings.end
        });
      }
      $handle.attr('aria-valuenow', value);

      if (settings.display_selector != '') {
        $(settings.display_selector).each(function () {
          if (this.hasOwnProperty('value')) {
            $(this).val(value);
          } else {
            $(this).text(value);
          }
        });
      }

    },

    normalized_percentage : function (val, start, end) {
      return Math.min(1, (val - start) / (end - start));
    },

    normalized_value : function (val, start, end, step, precision) {
      var range = end - start,
          point = val * range,
          mod = (point - (point % step)) / step,
          rem = point % step,
          round = ( rem >= step * 0.5 ? step : 0);
      return ((mod * step + round) + start).toFixed(precision);
    },

    set_translate : function (ele, offset, vertical) {
      if (vertical) {
        $(ele)
          .css('-webkit-transform', 'translateY(' + offset + 'px)')
          .css('-moz-transform', 'translateY(' + offset + 'px)')
          .css('-ms-transform', 'translateY(' + offset + 'px)')
          .css('-o-transform', 'translateY(' + offset + 'px)')
          .css('transform', 'translateY(' + offset + 'px)');
      } else {
        $(ele)
          .css('-webkit-transform', 'translateX(' + offset + 'px)')
          .css('-moz-transform', 'translateX(' + offset + 'px)')
          .css('-ms-transform', 'translateX(' + offset + 'px)')
          .css('-o-transform', 'translateX(' + offset + 'px)')
          .css('transform', 'translateX(' + offset + 'px)');
      }
    },

    limit_to : function (val, min, max) {
      return Math.min(Math.max(val, min), max);
    },

    initialize_settings : function (handle) {
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),
          decimal_places_match_result;

      if (settings.precision === null) {
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }

      if (settings.vertical) {
        $.data(handle, 'bar_o', $(handle).parent().offset().top);
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());
        $.data(handle, 'handle_o', $(handle).offset().top);
        $.data(handle, 'handle_l', $(handle).outerHeight());
      } else {
        $.data(handle, 'bar_o', $(handle).parent().offset().left);
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());
        $.data(handle, 'handle_o', $(handle).offset().left);
        $.data(handle, 'handle_l', $(handle).outerWidth());
      }

      $.data(handle, 'bar', $(handle).parent());
      $.data(handle, 'settings', settings);
    },

    set_initial_position : function ($ele) {
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end - settings.start) * 0.5 / settings.step) * settings.step + settings.start),
          $handle = $ele.children('.range-slider-handle');
      this.set_ui($handle, initial);
    },

    set_value : function (value) {
      var self = this;
      $('[' + self.attr_name() + ']', this.scope).each(function () {
        $(this).attr(self.attr_name(), value);
      });
      if (!!$(this.scope).attr(self.attr_name())) {
        $(this.scope).attr(self.attr_name(), value);
      }
      self.reflow();
    },

    reflow : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var handle = $(this).children('.range-slider-handle')[0],
            val = $(this).attr(self.attr_name());
        self.initialize_settings(handle);

        if (val) {
          self.set_ui($(handle), parseFloat(val));
        } else {
          self.set_initial_position($(this));
        }
      });
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  var Modernizr = Modernizr || false;

  Foundation.libs.joyride = {
    name : 'joyride',

    version : '5.5.1',

    defaults : {
      expose                   : false,     // turn on or off the expose feature
      modal                    : true,      // Whether to cover page with modal during the tour
      keyboard                 : true,      // enable left, right and esc keystrokes
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent
      nub_position             : 'auto',    // override on a per tooltip bases
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)
      next_button              : true,      // true or false to control whether a next button is used
      prev_button              : true,      // true or false to control whether a prev button is used
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip
      pause_after              : [],        // array of indexes where to pause the tour after
      exposed                  : [],        // array of expose elements
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used
      cookie_name              : 'joyride', // Name the cookie you'll use
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      cookie_expires           : 365,       // set when you would like the cookie to expire.
      tip_container            : 'body',    // Where will the tip be attached
      abort_on_close           : true,      // When true, the close event will not fire any callback
      tip_location_patterns    : {
        top : ['bottom'],
        bottom : [], // bottom should not need to be repositioned
        left : ['right', 'top', 'bottom'],
        right : ['left', 'top', 'bottom']
      },
      post_ride_callback     : function () {},    // A method to call once the tour closes (canceled or complete)
      post_step_callback     : function () {},    // A method to call after each step
      pre_step_callback      : function () {},    // A method to call before each step
      pre_ride_callback      : function () {},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function () {},    // A method to call after an element has been exposed
      template : { // HTML segments for tip layout
        link          : '<a href="#close" class="joyride-close-tip">&times;</a>',
        timer         : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip           : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        wrapper       : '<div class="joyride-content-wrapper"></div>',
        button        : '<a href="#" class="small button joyride-next-tip"></a>',
        prev_button   : '<a href="#" class="small button joyride-prev-tip"></a>',
        modal         : '<div class="joyride-modal-bg"></div>',
        expose        : '<div class="joyride-expose-wrapper"></div>',
        expose_cover  : '<div class="joyride-expose-cover"></div>'
      },
      expose_add_class : '' // One or more space-separated class names to be added to exposed element
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle random_str');

      this.settings = this.settings || $.extend({}, this.defaults, (options || method));

      this.bindings(method, options)
    },

    go_next : function () {
      if (this.settings.$li.next().length < 1) {
        this.end();
      } else if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
        this.hide();
        this.show();
        this.startTimer();
      } else {
        this.hide();
        this.show();
      }
    },

    go_prev : function () {
      if (this.settings.$li.prev().length < 1) {
        // Do nothing if there are no prev element
      } else if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
        this.hide();
        this.show(null, true);
        this.startTimer();
      } else {
        this.hide();
        this.show(null, true);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.joyride')
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
          e.preventDefault();
          this.go_next()
        }.bind(this))
        .on('click.fndtn.joyride', '.joyride-prev-tip', function (e) {
          e.preventDefault();
          this.go_prev();
        }.bind(this))

        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {
          e.preventDefault();
          this.end(this.settings.abort_on_close);
        }.bind(this))

        .on('keyup.fndtn.joyride', function (e) {
          // Don't do anything if keystrokes are disabled
          // or if the joyride is not being shown
          if (!this.settings.keyboard || !this.settings.riding) {
            return;
          }

          switch (e.which) {
            case 39: // right arrow
              e.preventDefault();
              this.go_next();
              break;
            case 37: // left arrow
              e.preventDefault();
              this.go_prev();
              break;
            case 27: // escape
              e.preventDefault();
              this.end(this.settings.abort_on_close);
          }
        }.bind(this));

      $(window)
        .off('.joyride')
        .on('resize.fndtn.joyride', self.throttle(function () {
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip && self.settings.riding) {
            if (self.settings.exposed.length > 0) {
              var $els = $(self.settings.exposed);

              $els.each(function () {
                var $this = $(this);
                self.un_expose($this);
                self.expose($this);
              });
            }

            if (self.is_phone()) {
              self.pos_phone();
            } else {
              self.pos_default(false);
            }
          }
        }, 100));
    },

    start : function () {
      var self = this,
          $this = $('[' + this.attr_name() + ']', this.scope),
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],
          int_settings_count = integer_settings.length;

      if (!$this.length > 0) {
        return;
      }

      if (!this.settings.init) {
        this.events();
      }

      this.settings = $this.data(this.attr_name(true) + '-init');

      // non configureable settings
      this.settings.$content_el = $this;
      this.settings.$body = $(this.settings.tip_container);
      this.settings.body_offset = $(this.settings.tip_container).position();
      this.settings.$tip_content = this.settings.$content_el.find('> li');
      this.settings.paused = false;
      this.settings.attempts = 0;
      this.settings.riding = true;

      // can we create cookies?
      if (typeof $.cookie !== 'function') {
        this.settings.cookie_monster = false;
      }

      // generate the tips and insert into dom.
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {
        this.settings.$tip_content.each(function (index) {
          var $this = $(this);
          this.settings = $.extend({}, self.defaults, self.data_options($this));

          // Make sure that settings parsed from data_options are integers where necessary
          var i = int_settings_count;
          while (i--) {
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);
          }
          self.create({$li : $this, index : index});
        });

        // show first tip
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {
          this.show('init');
          this.startTimer();
        } else {
          this.show('init');
        }

      }
    },

    resume : function () {
      this.set_li();
      this.show();
    },

    tip_template : function (opts) {
      var $blank, content;

      opts.tip_class = opts.tip_class || '';

      $blank = $(this.settings.template.tip).addClass(opts.tip_class);
      content = $.trim($(opts.li).html()) +
        this.prev_button_text(opts.prev_button_text, opts.index) +
        this.button_text(opts.button_text) +
        this.settings.template.link +
        this.timer_instance(opts.index);

      $blank.append($(this.settings.template.wrapper));
      $blank.first().attr(this.add_namespace('data-index'), opts.index);
      $('.joyride-content-wrapper', $blank).append(content);

      return $blank[0];
    },

    timer_instance : function (index) {
      var txt;

      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';
      } else {
        txt = $(this.settings.template.timer)[0].outerHTML;
      }
      return txt;
    },

    button_text : function (txt) {
      if (this.settings.tip_settings.next_button) {
        txt = $.trim(txt) || 'Next';
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;
      } else {
        txt = '';
      }
      return txt;
    },

    prev_button_text : function (txt, idx) {
      if (this.settings.tip_settings.prev_button) {
        txt = $.trim(txt) || 'Previous';

        // Add the disabled class to the button if it's the first element
        if (idx == 0) {
          txt = $(this.settings.template.prev_button).append(txt).addClass('disabled')[0].outerHTML;
        } else {
          txt = $(this.settings.template.prev_button).append(txt)[0].outerHTML;
        }
      } else {
        txt = '';
      }
      return txt;
    },

    create : function (opts) {
      this.settings.tip_settings = $.extend({}, this.settings, this.data_options(opts.$li));
      var buttonText = opts.$li.attr(this.add_namespace('data-button')) || opts.$li.attr(this.add_namespace('data-text')),
          prevButtonText = opts.$li.attr(this.add_namespace('data-button-prev')) || opts.$li.attr(this.add_namespace('data-prev-text')),
        tipClass = opts.$li.attr('class'),
        $tip_content = $(this.tip_template({
          tip_class : tipClass,
          index : opts.index,
          button_text : buttonText,
          prev_button_text : prevButtonText,
          li : opts.$li
        }));

      $(this.settings.tip_container).append($tip_content);
    },

    show : function (init, is_prev) {
      var $timer = null;

      // are we paused?
      if (this.settings.$li === undefined || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {

        // don't go to the next li if the tour was paused
        if (this.settings.paused) {
          this.settings.paused = false;
        } else {
          this.set_li(init, is_prev);
        }

        this.settings.attempts = 0;

        if (this.settings.$li.length && this.settings.$target.length > 0) {
          if (init) { //run when we first start
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);
            if (this.settings.modal) {
              this.show_modal();
            }
          }

          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);

          if (this.settings.modal && this.settings.expose) {
            this.expose();
          }

          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));

          this.settings.timer = parseInt(this.settings.timer, 10);

          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];

          // scroll and hide bg if not modal
          if (!/body/i.test(this.settings.$target.selector)) {
            var joyridemodalbg = $('.joyride-modal-bg');
            if (/pop/i.test(this.settings.tipAnimation)) {
                joyridemodalbg.hide();
            } else {
                joyridemodalbg.fadeOut(this.settings.tipAnimationFadeSpeed);
            }
            this.scroll_to();
          }

          if (this.is_phone()) {
            this.pos_phone(true);
          } else {
            this.pos_default(true);
          }

          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');

          if (/pop/i.test(this.settings.tip_animation)) {

            $timer.width(0);

            if (this.settings.timer > 0) {

              this.settings.$next_tip.show();

              setTimeout(function () {
                $timer.animate({
                  width : $timer.parent().width()
                }, this.settings.timer, 'linear');
              }.bind(this), this.settings.tip_animation_fade_speed);

            } else {
              this.settings.$next_tip.show();

            }

          } else if (/fade/i.test(this.settings.tip_animation)) {

            $timer.width(0);

            if (this.settings.timer > 0) {

              this.settings.$next_tip
                .fadeIn(this.settings.tip_animation_fade_speed)
                .show();

              setTimeout(function () {
                $timer.animate({
                  width : $timer.parent().width()
                }, this.settings.timer, 'linear');
              }.bind(this), this.settings.tip_animation_fade_speed);

            } else {
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);
            }
          }

          this.settings.$current_tip = this.settings.$next_tip;

        // skip non-existant targets
        } else if (this.settings.$li && this.settings.$target.length < 1) {

          this.show(init, is_prev);

        } else {

          this.end();

        }
      } else {

        this.settings.paused = true;

      }

    },

    is_phone : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    hide : function () {
      if (this.settings.modal && this.settings.expose) {
        this.un_expose();
      }

      if (!this.settings.modal) {
        $('.joyride-modal-bg').hide();
      }

      // Prevent scroll bouncing...wait to remove from layout
      this.settings.$current_tip.css('visibility', 'hidden');
      setTimeout($.proxy(function () {
        this.hide();
        this.css('visibility', 'visible');
      }, this.settings.$current_tip), 0);
      this.settings.post_step_callback(this.settings.$li.index(),
        this.settings.$current_tip);
    },

    set_li : function (init, is_prev) {
      if (init) {
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);
        this.set_next_tip();
        this.settings.$current_tip = this.settings.$next_tip;
      } else {
        if (is_prev) {
          this.settings.$li = this.settings.$li.prev();
        } else {
          this.settings.$li = this.settings.$li.next();
        }
        this.set_next_tip();
      }

      this.set_target();
    },

    set_next_tip : function () {
      this.settings.$next_tip = $('.joyride-tip-guide').eq(this.settings.$li.index());
      this.settings.$next_tip.data('closed', '');
    },

    set_target : function () {
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),
          id = this.settings.$li.attr(this.add_namespace('data-id')),
          $sel = function () {
            if (id) {
              return $(document.getElementById(id));
            } else if (cl) {
              return $('.' + cl).first();
            } else {
              return $('body');
            }
          };

      this.settings.$target = $sel();
    },

    scroll_to : function () {
      var window_half, tipOffset;

      window_half = $(window).height() / 2;
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight());

      if (tipOffset != 0) {
        $('html, body').stop().animate({
          scrollTop : tipOffset
        }, this.settings.scroll_speed, 'swing');
      }
    },

    paused : function () {
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);
    },

    restart : function () {
      this.hide();
      this.settings.$li = undefined;
      this.show('init');
    },

    pos_default : function (init) {
      var $nub = this.settings.$next_tip.find('.joyride-nub'),
          nub_width = Math.ceil($nub.outerWidth() / 2),
          nub_height = Math.ceil($nub.outerHeight() / 2),
          toggle = init || false;

      // tip must not be "display: none" to calculate position
      if (toggle) {
        this.settings.$next_tip.css('visibility', 'hidden');
        this.settings.$next_tip.show();
      }

      if (!/body/i.test(this.settings.$target.selector)) {
          var topAdjustment = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
              leftAdjustment = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;

          if (this.bottom()) {
            if (this.rtl) {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + leftAdjustment});
            } else {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});
            }

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');

          } else if (this.top()) {
            if (this.rtl) {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});
            }

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');

          } else if (this.right()) {

            this.settings.$next_tip.css({
              top : this.settings.$target.offset().top + topAdjustment,
              left : (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width + leftAdjustment)});

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');

          } else if (this.left()) {

            this.settings.$next_tip.css({
              top : this.settings.$target.offset().top + topAdjustment,
              left : (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width + leftAdjustment)});

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');

          }

          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {

            $nub.removeClass('bottom')
              .removeClass('top')
              .removeClass('right')
              .removeClass('left');

            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];

            this.settings.attempts++;

            this.pos_default();

          }

      } else if (this.settings.$li.length) {

        this.pos_modal($nub);

      }

      if (toggle) {
        this.settings.$next_tip.hide();
        this.settings.$next_tip.css('visibility', 'visible');
      }

    },

    pos_phone : function (init) {
      var tip_height = this.settings.$next_tip.outerHeight(),
          tip_offset = this.settings.$next_tip.offset(),
          target_height = this.settings.$target.outerHeight(),
          $nub = $('.joyride-nub', this.settings.$next_tip),
          nub_height = Math.ceil($nub.outerHeight() / 2),
          toggle = init || false;

      $nub.removeClass('bottom')
        .removeClass('top')
        .removeClass('right')
        .removeClass('left');

      if (toggle) {
        this.settings.$next_tip.css('visibility', 'hidden');
        this.settings.$next_tip.show();
      }

      if (!/body/i.test(this.settings.$target.selector)) {

        if (this.top()) {

            this.settings.$next_tip.offset({top : this.settings.$target.offset().top - tip_height - nub_height});
            $nub.addClass('bottom');

        } else {

          this.settings.$next_tip.offset({top : this.settings.$target.offset().top + target_height + nub_height});
          $nub.addClass('top');

        }

      } else if (this.settings.$li.length) {
        this.pos_modal($nub);
      }

      if (toggle) {
        this.settings.$next_tip.hide();
        this.settings.$next_tip.css('visibility', 'visible');
      }
    },

    pos_modal : function ($nub) {
      this.center();
      $nub.hide();

      this.show_modal();
    },

    show_modal : function () {
      if (!this.settings.$next_tip.data('closed')) {
        var joyridemodalbg =  $('.joyride-modal-bg');
        if (joyridemodalbg.length < 1) {
          var joyridemodalbg = $(this.settings.template.modal);
          joyridemodalbg.appendTo('body');
        }

        if (/pop/i.test(this.settings.tip_animation)) {
            joyridemodalbg.show();
        } else {
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);
        }
      }
    },

    expose : function () {
      var expose,
          exposeCover,
          el,
          origCSS,
          origClasses,
          randId = 'expose-' + this.random_str(6);

      if (arguments.length > 0 && arguments[0] instanceof $) {
        el = arguments[0];
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
        el = this.settings.$target;
      } else {
        return false;
      }

      if (el.length < 1) {
        if (window.console) {
          console.error('element not valid', el);
        }
        return false;
      }

      expose = $(this.settings.template.expose);
      this.settings.$body.append(expose);
      expose.css({
        top : el.offset().top,
        left : el.offset().left,
        width : el.outerWidth(true),
        height : el.outerHeight(true)
      });

      exposeCover = $(this.settings.template.expose_cover);

      origCSS = {
        zIndex : el.css('z-index'),
        position : el.css('position')
      };

      origClasses = el.attr('class') == null ? '' : el.attr('class');

      el.css('z-index', parseInt(expose.css('z-index')) + 1);

      if (origCSS.position == 'static') {
        el.css('position', 'relative');
      }

      el.data('expose-css', origCSS);
      el.data('orig-class', origClasses);
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);

      exposeCover.css({
        top : el.offset().top,
        left : el.offset().left,
        width : el.outerWidth(true),
        height : el.outerHeight(true)
      });

      if (this.settings.modal) {
        this.show_modal();
      }

      this.settings.$body.append(exposeCover);
      expose.addClass(randId);
      exposeCover.addClass(randId);
      el.data('expose', randId);
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);
      this.add_exposed(el);
    },

    un_expose : function () {
      var exposeId,
          el,
          expose,
          origCSS,
          origClasses,
          clearAll = false;

      if (arguments.length > 0 && arguments[0] instanceof $) {
        el = arguments[0];
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
        el = this.settings.$target;
      } else {
        return false;
      }

      if (el.length < 1) {
        if (window.console) {
          console.error('element not valid', el);
        }
        return false;
      }

      exposeId = el.data('expose');
      expose = $('.' + exposeId);

      if (arguments.length > 1) {
        clearAll = arguments[1];
      }

      if (clearAll === true) {
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
      } else {
        expose.remove();
      }

      origCSS = el.data('expose-css');

      if (origCSS.zIndex == 'auto') {
        el.css('z-index', '');
      } else {
        el.css('z-index', origCSS.zIndex);
      }

      if (origCSS.position != el.css('position')) {
        if (origCSS.position == 'static') {// this is default, no need to set it.
          el.css('position', '');
        } else {
          el.css('position', origCSS.position);
        }
      }

      origClasses = el.data('orig-class');
      el.attr('class', origClasses);
      el.removeData('orig-classes');

      el.removeData('expose');
      el.removeData('expose-z-index');
      this.remove_exposed(el);
    },

    add_exposed : function (el) {
      this.settings.exposed = this.settings.exposed || [];
      if (el instanceof $ || typeof el === 'object') {
        this.settings.exposed.push(el[0]);
      } else if (typeof el == 'string') {
        this.settings.exposed.push(el);
      }
    },

    remove_exposed : function (el) {
      var search, i;
      if (el instanceof $) {
        search = el[0]
      } else if (typeof el == 'string') {
        search = el;
      }

      this.settings.exposed = this.settings.exposed || [];
      i = this.settings.exposed.length;

      while (i--) {
        if (this.settings.exposed[i] == search) {
          this.settings.exposed.splice(i, 1);
          return;
        }
      }
    },

    center : function () {
      var $w = $(window);

      this.settings.$next_tip.css({
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
      });

      return true;
    },

    bottom : function () {
      return /bottom/i.test(this.settings.tip_settings.tip_location);
    },

    top : function () {
      return /top/i.test(this.settings.tip_settings.tip_location);
    },

    right : function () {
      return /right/i.test(this.settings.tip_settings.tip_location);
    },

    left : function () {
      return /left/i.test(this.settings.tip_settings.tip_location);
    },

    corners : function (el) {
      var w = $(window),
          window_half = w.height() / 2,
          //using this to calculate since scroll may not have finished yet.
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),
          offsetBottom =  w.height() + tipOffset,
          bottom = w.height() + w.scrollTop(),
          top = w.scrollTop();

      if (tipOffset < top) {
        if (tipOffset < 0) {
          top = 0;
        } else {
          top = tipOffset;
        }
      }

      if (offsetBottom > bottom) {
        bottom = offsetBottom;
      }

      return [
        el.offset().top < top,
        right < el.offset().left + el.outerWidth(),
        bottom < el.offset().top + el.outerHeight(),
        w.scrollLeft() > el.offset().left
      ];
    },

    visible : function (hidden_corners) {
      var i = hidden_corners.length;

      while (i--) {
        if (hidden_corners[i]) {
          return false;
        }
      }

      return true;
    },

    nub_position : function (nub, pos, def) {
      if (pos === 'auto') {
        nub.addClass(def);
      } else {
        nub.addClass(pos);
      }
    },

    startTimer : function () {
      if (this.settings.$li.length) {
        this.settings.automate = setTimeout(function () {
          this.hide();
          this.show();
          this.startTimer();
        }.bind(this), this.settings.timer);
      } else {
        clearTimeout(this.settings.automate);
      }
    },

    end : function (abort) {
      if (this.settings.cookie_monster) {
        $.cookie(this.settings.cookie_name, 'ridden', {expires : this.settings.cookie_expires, domain : this.settings.cookie_domain});
      }

      if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
      }

      if (this.settings.modal && this.settings.expose) {
        this.un_expose();
      }

      // Unplug keystrokes listener
      $(this.scope).off('keyup.joyride')

      this.settings.$next_tip.data('closed', true);
      this.settings.riding = false;

      $('.joyride-modal-bg').hide();
      this.settings.$current_tip.hide();

      if (typeof abort === 'undefined' || abort === false) {
        this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);
        this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);
      }

      $('.joyride-tip-guide').remove();
    },

    off : function () {
      $(this.scope).off('.joyride');
      $(window).off('.joyride');
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
      $('.joyride-tip-guide, .joyride-modal-bg').remove();
      clearTimeout(this.settings.automate);
      this.settings = {};
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.equalizer = {
    name : 'equalizer',

    version : '5.5.1',

    settings : {
      use_tallest : true,
      before_height_change : $.noop,
      after_height_change : $.noop,
      equalize_on_stack : false
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'image_loaded');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function (e) {
        this.reflow();
      }.bind(this));
    },

    equalize : function (equalizer) {
      var isStacked = false,
          vals = equalizer.find('[' + this.attr_name() + '-watch]:visible'),
          settings = equalizer.data(this.attr_name(true) + '-init');

      if (vals.length === 0) {
        return;
      }
      var firstTopOffset = vals.first().offset().top;
      settings.before_height_change();
      equalizer.trigger('before-height-change').trigger('before-height-change.fndth.equalizer');
      vals.height('inherit');
      vals.each(function () {
        var el = $(this);
        if (el.offset().top !== firstTopOffset) {
          isStacked = true;
        }
      });

      if (settings.equalize_on_stack === false) {
        if (isStacked) {
          return;
        }
      };

      var heights = vals.map(function () { return $(this).outerHeight(false) }).get();

      if (settings.use_tallest) {
        var max = Math.max.apply(null, heights);
        vals.css('height', max);
      } else {
        var min = Math.min.apply(null, heights);
        vals.css('height', min);
      }
      settings.after_height_change();
      equalizer.trigger('after-height-change').trigger('after-height-change.fndtn.equalizer');
    },

    reflow : function () {
      var self = this;

      this.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var $eq_target = $(this);
        self.image_loaded(self.S('img', this), function () {
          self.equalize($eq_target)
        });
      });
    }
  };
})(jQuery, window, window.document);
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.dropdown = {
    name : 'dropdown',

    version : '5.5.1',

    settings : {
      active_class : 'open',
      disabled_class : 'disabled',
      mega_class : 'mega',
      align : 'bottom',
      is_hover : false,
      hover_timeout : 150,
      opened : function () {},
      closed : function () {}
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');

      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.dropdown')
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;
          if (!settings.is_hover || Modernizr.touch) {
            e.preventDefault();
            if (S(this).parent('[data-reveal-id]')) {
              e.stopPropagation();
            }
            self.toggle($(this));
          }
        })
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this),
              dropdown,
              target;

          clearTimeout(self.timeout);

          if ($this.data(self.data_attr())) {
            dropdown = S('#' + $this.data(self.data_attr()));
            target = $this;
          } else {
            dropdown = $this;
            target = S('[' + self.attr_name() + '="' + dropdown.attr('id') + '"]');
          }

          var settings = target.data(self.attr_name(true) + '-init') || self.settings;

          if (S(e.currentTarget).data(self.data_attr()) && settings.is_hover) {
            self.closeall.call(self);
          }

          if (settings.is_hover) {
            self.open.apply(self, [dropdown, target]);
          }
        })
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);
          var settings;

          if ($this.data(self.data_attr())) {
              settings = $this.data(self.data_attr(true) + '-init') || self.settings;
          } else {
              var target   = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;
          }

          self.timeout = setTimeout(function () {
            if ($this.data(self.data_attr())) {
              if (settings.is_hover) {
                self.close.call(self, S('#' + $this.data(self.data_attr())));
              }
            } else {
              if (settings.is_hover) {
                self.close.call(self, $this);
              }
            }
          }.bind(this), settings.hover_timeout);
        })
        .on('click.fndtn.dropdown', function (e) {
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');
          var links  = parent.find('a');

          if (links.length > 0 && parent.attr('aria-autoclose') !== 'false') {
              self.close.call(self, S('[' + self.attr_name() + '-content]'));
          }

          if (e.target !== document && !$.contains(document.documentElement, e.target)) {
            return;
          }

          if (S(e.target).closest('[' + self.attr_name() + ']').length > 0) {
            return;
          }

          if (!(S(e.target).data('revealId')) &&
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||
              $.contains(parent.first()[0], e.target)))) {
            e.stopPropagation();
            return;
          }

          self.close.call(self, S('[' + self.attr_name() + '-content]'));
        })
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {
          self.settings.opened.call(this);
        })
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {
          self.settings.closed.call(this);
        });

      S(window)
        .off('.dropdown')
        .on('resize.fndtn.dropdown', self.throttle(function () {
          self.resize.call(self);
        }, 50));

      this.resize();
    },

    close : function (dropdown) {
      var self = this;
      dropdown.each(function () {
        var original_target = $('[' + self.attr_name() + '=' + dropdown[0].id + ']') || $('aria-controls=' + dropdown[0].id + ']');
        original_target.attr('aria-expanded', 'false');
        if (self.S(this).hasClass(self.settings.active_class)) {
          self.S(this)
            .css(Foundation.rtl ? 'right' : 'left', '-99999px')
            .attr('aria-hidden', 'true')
            .removeClass(self.settings.active_class)
            .prev('[' + self.attr_name() + ']')
            .removeClass(self.settings.active_class)
            .removeData('target');

          self.S(this).trigger('closed').trigger('closed.fndtn.dropdown', [dropdown]);
        }
      });
      dropdown.removeClass('f-open-' + this.attr_name(true));
    },

    closeall : function () {
      var self = this;
      $.each(self.S('.f-open-' + this.attr_name(true)), function () {
        self.close.call(self, self.S(this));
      });
    },

    open : function (dropdown, target) {
      this
        .css(dropdown
        .addClass(this.settings.active_class), target);
      dropdown.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class);
      dropdown.data('target', target.get(0)).trigger('opened').trigger('opened.fndtn.dropdown', [dropdown, target]);
      dropdown.attr('aria-hidden', 'false');
      target.attr('aria-expanded', 'true');
      dropdown.focus();
      dropdown.addClass('f-open-' + this.attr_name(true));
    },

    data_attr : function () {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + this.name;
      }

      return this.name;
    },

    toggle : function (target) {
      if (target.hasClass(this.settings.disabled_class)) {
        return;
      }
      var dropdown = this.S('#' + target.data(this.data_attr()));
      if (dropdown.length === 0) {
        // No dropdown found, not continuing
        return;
      }

      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));

      if (dropdown.hasClass(this.settings.active_class)) {
        this.close.call(this, dropdown);
        if (dropdown.data('target') !== target.get(0)) {
          this.open.call(this, dropdown, target);
        }
      } else {
        this.open.call(this, dropdown, target);
      }
    },

    resize : function () {
      var dropdown = this.S('[' + this.attr_name() + '-content].open');
      var target = $(dropdown.data("target"));

      if (dropdown.length && target.length) {
        this.css(dropdown, target);
      }
    },

    css : function (dropdown, target) {
      var left_offset = Math.max((target.width() - dropdown.width()) / 2, 8),
          settings = target.data(this.attr_name(true) + '-init') || this.settings;

      this.clear_idx();

      if (this.small()) {
        var p = this.dirs.bottom.call(dropdown, target, settings);

        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({
          position : 'absolute',
          width : '95%',
          'max-width' : 'none',
          top : p.top
        });

        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);
      } else {

        this.style(dropdown, target, settings);
      }

      return dropdown;
    },

    style : function (dropdown, target, settings) {
      var css = $.extend({position : 'absolute'},
        this.dirs[settings.align].call(dropdown, target, settings));

      dropdown.attr('style', '').css(css);
    },

    // return CSS property object
    // `this` is the dropdown
    dirs : {
      // Calculate target offset
      _base : function (t) {
        var o_p = this.offsetParent(),
            o = o_p.offset(),
            p = t.offset();

        p.top -= o.top;
        p.left -= o.left;

        //set some flags on the p object to pass along
        p.missRight = false;
        p.missTop = false;
        p.missLeft = false;
        p.leftRightFlag = false;

        //lets see if the panel will be off the screen
        //get the actual width of the page and store it
        var actualBodyWidth;
        if (document.getElementsByClassName('row')[0]) {
          actualBodyWidth = document.getElementsByClassName('row')[0].clientWidth;
        } else {
          actualBodyWidth = window.outerWidth;
        }

        var actualMarginWidth = (window.outerWidth - actualBodyWidth) / 2;
        var actualBoundary = actualBodyWidth;

        if (!this.hasClass('mega')) {
          //miss top
          if (t.offset().top <= this.outerHeight()) {
            p.missTop = true;
            actualBoundary = window.outerWidth - actualMarginWidth;
            p.leftRightFlag = true;
          }

          //miss right
          if (t.offset().left + this.outerWidth() > t.offset().left + actualMarginWidth && t.offset().left - actualMarginWidth > this.outerWidth()) {
            p.missRight = true;
            p.missLeft = false;
          }

          //miss left
          if (t.offset().left - this.outerWidth() <= 0) {
            p.missLeft = true;
            p.missRight = false;
          }
        }

        return p;
      },

      top : function (t, s) {
        var self = Foundation.libs.dropdown,
            p = self.dirs._base.call(this, t);

        this.addClass('drop-top');

        if (p.missTop == true) {
          p.top = p.top + t.outerHeight() + this.outerHeight();
          this.removeClass('drop-top');
        }

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth() + t.outerWidth();
        }

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        if (Foundation.rtl) {
          return {left : p.left - this.outerWidth() + t.outerWidth(),
            top : p.top - this.outerHeight()};
        }

        return {left : p.left, top : p.top - this.outerHeight()};
      },

      bottom : function (t, s) {
        var self = Foundation.libs.dropdown,
            p = self.dirs._base.call(this, t);

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth() + t.outerWidth();
        }

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        if (self.rtl) {
          return {left : p.left - this.outerWidth() + t.outerWidth(), top : p.top + t.outerHeight()};
        }

        return {left : p.left, top : p.top + t.outerHeight()};
      },

      left : function (t, s) {
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);

        this.addClass('drop-left');

        if (p.missLeft == true) {
          p.left =  p.left + this.outerWidth();
          p.top = p.top + t.outerHeight();
          this.removeClass('drop-left');
        }

        return {left : p.left - this.outerWidth(), top : p.top};
      },

      right : function (t, s) {
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);

        this.addClass('drop-right');

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth();
          p.top = p.top + t.outerHeight();
          this.removeClass('drop-right');
        } else {
          p.triggeredRight = true;
        }

        var self = Foundation.libs.dropdown;

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        return {left : p.left + t.outerWidth(), top : p.top};
      }
    },

    // Insert rule to style psuedo elements
    adjust_pip : function (dropdown, target, settings, position) {
      var sheet = Foundation.stylesheet,
          pip_offset_base = 8;

      if (dropdown.hasClass(settings.mega_class)) {
        pip_offset_base = position.left + (target.outerWidth() / 2) - 8;
      } else if (this.small()) {
        pip_offset_base += position.left - 8;
      }

      this.rule_idx = sheet.cssRules.length;

      //default
      var sel_before = '.f-dropdown.open:before',
          sel_after  = '.f-dropdown.open:after',
          css_before = 'left: ' + pip_offset_base + 'px;',
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';

      if (position.missRight == true) {
        pip_offset_base = dropdown.outerWidth() - 23;
        sel_before = '.f-dropdown.open:before',
        sel_after  = '.f-dropdown.open:after',
        css_before = 'left: ' + pip_offset_base + 'px;',
        css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';
      }

      //just a case where right is fired, but its not missing right
      if (position.triggeredRight == true) {
        sel_before = '.f-dropdown.open:before',
        sel_after  = '.f-dropdown.open:after',
        css_before = 'left:-12px;',
        css_after  = 'left:-14px;';
      }

      if (sheet.insertRule) {
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);
      } else {
        sheet.addRule(sel_before, css_before, this.rule_idx);
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);
      }
    },

    // Remove old dropdown rule index
    clear_idx : function () {
      var sheet = Foundation.stylesheet;

      if (typeof this.rule_idx !== 'undefined') {
        sheet.deleteRule(this.rule_idx);
        sheet.deleteRule(this.rule_idx);
        delete this.rule_idx;
      }
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    off : function () {
      this.S(this.scope).off('.fndtn.dropdown');
      this.S('html, body').off('.fndtn.dropdown');
      this.S(window).off('.fndtn.dropdown');
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.clearing = {
    name : 'clearing',

    version : '5.5.1',

    settings : {
      templates : {
        viewing : '<a href="#" class="clearing-close">&times;</a>' +
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +
          '<a href="#" class="clearing-main-next"><span></span></a></div>'
      },

      // comma delimited list of selectors that, on click, will close clearing,
      // add 'div.clearing-blackout, div.visible-img' to close on background click
      close_selectors : '.clearing-close, div.clearing-blackout',

      // Default to the entire li element.
      open_selectors : '',

      // Image will be skipped in carousel.
      skip_selector : '',

      touch_label : '',

      // event initializers and locks
      init : false,
      locked : false
    },

    init : function (scope, method, options) {
      var self = this;
      Foundation.inherit(this, 'throttle image_loaded');

      this.bindings(method, options);

      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {
        this.assemble(self.S('li', this.scope));
      } else {
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {
          self.assemble(self.S('li', this));
        });
      }
    },

    events : function (scope) {
      var self = this,
          S = self.S,
          $scroll_container = $('.scroll-container');

      if ($scroll_container.length > 0) {
        this.scope = $scroll_container;
      }

      S(this.scope)
        .off('.clearing')
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,
          function (e, current, target) {
            var current = current || S(this),
                target = target || current,
                next = current.next('li'),
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),
                image = S(e.target);

            e.preventDefault();

            if (!settings) {
              self.init();
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
            }

            // if clearing is open and the current image is
            // clicked, go to the next image in sequence
            if (target.hasClass('visible') &&
              current[0] === target[0] &&
              next.length > 0 && self.is_open(current)) {
              target = next;
              image = S('img', target);
            }

            // set current and target to the clicked li if not otherwise defined.
            self.open(image, current, target);
            self.update_paddles(target);
          })

        .on('click.fndtn.clearing', '.clearing-main-next',
          function (e) { self.nav(e, 'next') })
        .on('click.fndtn.clearing', '.clearing-main-prev',
          function (e) { self.nav(e, 'prev') })
        .on('click.fndtn.clearing', this.settings.close_selectors,
          function (e) { Foundation.libs.clearing.close(e, this) });

      $(document).on('keydown.fndtn.clearing',
          function (e) { self.keydown(e) });

      S(window).off('.clearing').on('resize.fndtn.clearing',
        function () { self.resize() });

      this.swipe_events(scope);
    },

    swipe_events : function (scope) {
      var self = this,
      S = self.S;

      S(this.scope)
        .on('touchstart.fndtn.clearing', '.visible-img', function (e) {
          if (!e.touches) { e = e.originalEvent; }
          var data = {
                start_page_x : e.touches[0].pageX,
                start_page_y : e.touches[0].pageY,
                start_time : (new Date()).getTime(),
                delta_x : 0,
                is_scrolling : undefined
              };

          S(this).data('swipe-transition', data);
          e.stopPropagation();
        })
        .on('touchmove.fndtn.clearing', '.visible-img', function (e) {
          if (!e.touches) {
            e = e.originalEvent;
          }
          // Ignore pinch/zoom events
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {
            return;
          }

          var data = S(this).data('swipe-transition');

          if (typeof data === 'undefined') {
            data = {};
          }

          data.delta_x = e.touches[0].pageX - data.start_page_x;

          if (Foundation.rtl) {
            data.delta_x = -data.delta_x;
          }

          if (typeof data.is_scrolling === 'undefined') {
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }

          if (!data.is_scrolling && !data.active) {
            e.preventDefault();
            var direction = (data.delta_x < 0) ? 'next' : 'prev';
            data.active = true;
            self.nav(e, direction);
          }
        })
        .on('touchend.fndtn.clearing', '.visible-img', function (e) {
          S(this).data('swipe-transition', {});
          e.stopPropagation();
        });
    },

    assemble : function ($li) {
      var $el = $li.parent();

      if ($el.parent().hasClass('carousel')) {
        return;
      }

      $el.after('<div id="foundationClearingHolder"></div>');

      var grid = $el.detach(),
          grid_outerHTML = '';

      if (grid[0] == null) {
        return;
      } else {
        grid_outerHTML = grid[0].outerHTML;
      }

      var holder = this.S('#foundationClearingHolder'),
          settings = $el.data(this.attr_name(true) + '-init'),
          data = {
            grid : '<div class="carousel">' + grid_outerHTML + '</div>',
            viewing : settings.templates.viewing
          },
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +
            data.grid + '</div></div>',
          touch_label = this.settings.touch_label;

      if (Modernizr.touch) {
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();
      }

      holder.after(wrapper).remove();
    },

    open : function ($image, current, target) {
      var self = this,
          body = $(document.body),
          root = target.closest('.clearing-assembled'),
          container = self.S('div', root).first(),
          visible_image = self.S('.visible-img', container),
          image = self.S('img', visible_image).not($image),
          label = self.S('.clearing-touch-label', container),
          error = false;

      // Event to disable scrolling on touch devices when Clearing is activated
      $('body').on('touchmove', function (e) {
        e.preventDefault();
      });

      image.error(function () {
        error = true;
      });

      function startLoad() {
        setTimeout(function () {
          this.image_loaded(image, function () {
            if (image.outerWidth() === 1 && !error) {
              startLoad.call(this);
            } else {
              cb.call(this, image);
            }
          }.bind(this));
        }.bind(this), 100);
      }

      function cb (image) {
        var $image = $(image);
        $image.css('visibility', 'visible');
        // toggle the gallery
        body.css('overflow', 'hidden');
        root.addClass('clearing-blackout');
        container.addClass('clearing-container');
        visible_image.show();
        this.fix_height(target)
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))
          .center_and_label(image, label)
          .shift(current, target, function () {
            target.closest('li').siblings().removeClass('visible');
            target.closest('li').addClass('visible');
          });
        visible_image.trigger('opened.fndtn.clearing')
      }

      if (!this.locked()) {
        visible_image.trigger('open.fndtn.clearing');
        // set the image to the selected thumbnail
        image
          .attr('src', this.load($image))
          .css('visibility', 'hidden');

        startLoad.call(this);
      }
    },

    close : function (e, el) {
      e.preventDefault();

      var root = (function (target) {
            if (/blackout/.test(target.selector)) {
              return target;
            } else {
              return target.closest('.clearing-blackout');
            }
          }($(el))),
          body = $(document.body), container, visible_image;

      if (el === e.target && root) {
        body.css('overflow', '');
        container = $('div', root).first();
        visible_image = $('.visible-img', container);
        visible_image.trigger('close.fndtn.clearing');
        this.settings.prev_index = 0;
        $('ul[' + this.attr_name() + ']', root)
          .attr('style', '').closest('.clearing-blackout')
          .removeClass('clearing-blackout');
        container.removeClass('clearing-container');
        visible_image.hide();
        visible_image.trigger('closed.fndtn.clearing');
      }

      // Event to re-enable scrolling on touch devices
      $('body').off('touchmove');

      return false;
    },

    is_open : function (current) {
      return current.parent().prop('style').length > 0;
    },

    keydown : function (e) {
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),
          NEXT_KEY = this.rtl ? 37 : 39,
          PREV_KEY = this.rtl ? 39 : 37,
          ESC_KEY = 27;

      if (e.which === NEXT_KEY) {
        this.go(clearing, 'next');
      }
      if (e.which === PREV_KEY) {
        this.go(clearing, 'prev');
      }
      if (e.which === ESC_KEY) {
        this.S('a.clearing-close').trigger('click').trigger('click.fndtn.clearing');
      }
    },

    nav : function (e, direction) {
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');

      e.preventDefault();
      this.go(clearing, direction);
    },

    resize : function () {
      var image = $('img', '.clearing-blackout .visible-img'),
          label = $('.clearing-touch-label', '.clearing-blackout');

      if (image.length) {
        this.center_and_label(image, label);
        image.trigger('resized.fndtn.clearing')
      }
    },

    // visual adjustments
    fix_height : function (target) {
      var lis = target.parent().children(),
          self = this;

      lis.each(function () {
        var li = self.S(this),
            image = li.find('img');

        if (li.height() > image.outerHeight()) {
          li.addClass('fix-height');
        }
      })
      .closest('ul')
      .width(lis.length * 100 + '%');

      return this;
    },

    update_paddles : function (target) {
      target = target.closest('li');
      var visible_image = target
        .closest('.carousel')
        .siblings('.visible-img');

      if (target.next().length > 0) {
        this.S('.clearing-main-next', visible_image).removeClass('disabled');
      } else {
        this.S('.clearing-main-next', visible_image).addClass('disabled');
      }

      if (target.prev().length > 0) {
        this.S('.clearing-main-prev', visible_image).removeClass('disabled');
      } else {
        this.S('.clearing-main-prev', visible_image).addClass('disabled');
      }
    },

    center_and_label : function (target, label) {
      if (!this.rtl && label.length > 0) {
        label.css({
          marginLeft : -(label.outerWidth() / 2),
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10
        });
      } else {
        label.css({
          marginRight : -(label.outerWidth() / 2),
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,
          left: 'auto',
          right: '50%'
        });
      }
      return this;
    },

    // image loading and preloading

    load : function ($image) {
      var href;

      if ($image[0].nodeName === 'A') {
        href = $image.attr('href');
      } else {
        href = $image.closest('a').attr('href');
      }

      this.preload($image);

      if (href) {
        return href;
      }
      return $image.attr('src');
    },

    preload : function ($image) {
      this
        .img($image.closest('li').next())
        .img($image.closest('li').prev());
    },

    img : function (img) {
      if (img.length) {
        var new_img = new Image(),
            new_a = this.S('a', img);

        if (new_a.length) {
          new_img.src = new_a.attr('href');
        } else {
          new_img.src = this.S('img', img).attr('src');
        }
      }
      return this;
    },

    // image caption

    caption : function (container, $image) {
      var caption = $image.attr('data-caption');

      if (caption) {
        container
          .html(caption)
          .show();
      } else {
        container
          .text('')
          .hide();
      }
      return this;
    },

    // directional methods

    go : function ($ul, direction) {
      var current = this.S('.visible', $ul),
          target = current[direction]();

      // Check for skip selector.
      if (this.settings.skip_selector && target.find(this.settings.skip_selector).length != 0) {
        target = target[direction]();
      }

      if (target.length) {
        this.S('img', target)
          .trigger('click', [current, target]).trigger('click.fndtn.clearing', [current, target])
          .trigger('change.fndtn.clearing');
      }
    },

    shift : function (current, target, callback) {
      var clearing = target.parent(),
          old_index = this.settings.prev_index || target.index(),
          direction = this.direction(clearing, current, target),
          dir = this.rtl ? 'right' : 'left',
          left = parseInt(clearing.css('left'), 10),
          width = target.outerWidth(),
          skip_shift;

      var dir_obj = {};

      // we use jQuery animate instead of CSS transitions because we
      // need a callback to unlock the next animation
      // needs support for RTL **
      if (target.index() !== old_index && !/skip/.test(direction)) {
        if (/left/.test(direction)) {
          this.lock();
          dir_obj[dir] = left + width;
          clearing.animate(dir_obj, 300, this.unlock());
        } else if (/right/.test(direction)) {
          this.lock();
          dir_obj[dir] = left - width;
          clearing.animate(dir_obj, 300, this.unlock());
        }
      } else if (/skip/.test(direction)) {
        // the target image is not adjacent to the current image, so
        // do we scroll right or not
        skip_shift = target.index() - this.settings.up_count;
        this.lock();

        if (skip_shift > 0) {
          dir_obj[dir] = -(skip_shift * width);
          clearing.animate(dir_obj, 300, this.unlock());
        } else {
          dir_obj[dir] = 0;
          clearing.animate(dir_obj, 300, this.unlock());
        }
      }

      callback();
    },

    direction : function ($el, current, target) {
      var lis = this.S('li', $el),
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,
          target_index = lis.index(target),
          response;

      this.settings.up_count = up_count;

      if (this.adjacent(this.settings.prev_index, target_index)) {
        if ((target_index > up_count) && target_index > this.settings.prev_index) {
          response = 'right';
        } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {
          response = 'left';
        } else {
          response = false;
        }
      } else {
        response = 'skip';
      }

      this.settings.prev_index = target_index;

      return response;
    },

    adjacent : function (current_index, target_index) {
      for (var i = target_index + 1; i >= target_index - 1; i--) {
        if (i === current_index) {
          return true;
        }
      }
      return false;
    },

    // lock management

    lock : function () {
      this.settings.locked = true;
    },

    unlock : function () {
      this.settings.locked = false;
    },

    locked : function () {
      return this.settings.locked;
    },

    off : function () {
      this.S(this.scope).off('.fndtn.clearing');
      this.S(window).off('.fndtn.clearing');
    },

    reflow : function () {
      this.init();
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  var noop = function () {};

  var Orbit = function (el, settings) {
    // Don't reinitialize plugin
    if (el.hasClass(settings.slides_container_class)) {
      return this;
    }

    var self = this,
        container,
        slides_container = el,
        number_container,
        bullets_container,
        timer_container,
        idx = 0,
        animate,
        timer,
        locked = false,
        adjust_height_after = false;

    self.slides = function () {
      return slides_container.children(settings.slide_selector);
    };

    self.slides().first().addClass(settings.active_slide_class);

    self.update_slide_number = function (index) {
      if (settings.slide_number) {
        number_container.find('span:first').text(parseInt(index) + 1);
        number_container.find('span:last').text(self.slides().length);
      }
      if (settings.bullets) {
        bullets_container.children().removeClass(settings.bullets_active_class);
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);
      }
    };

    self.update_active_link = function (index) {
      var link = $('[data-orbit-link="' + self.slides().eq(index).attr('data-orbit-slide') + '"]');
      link.siblings().removeClass(settings.bullets_active_class);
      link.addClass(settings.bullets_active_class);
    };

    self.build_markup = function () {
      slides_container.wrap('<div class="' + settings.container_class + '"></div>');
      container = slides_container.parent();
      slides_container.addClass(settings.slides_container_class);

      if (settings.stack_on_small) {
        container.addClass(settings.stack_on_small_class);
      }

      if (settings.navigation_arrows) {
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));
      }

      if (settings.timer) {
        timer_container = $('<div>').addClass(settings.timer_container_class);
        timer_container.append('<span>');
        timer_container.append($('<div>').addClass(settings.timer_progress_class));
        timer_container.addClass(settings.timer_paused_class);
        container.append(timer_container);
      }

      if (settings.slide_number) {
        number_container = $('<div>').addClass(settings.slide_number_class);
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');
        container.append(number_container);
      }

      if (settings.bullets) {
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);
        container.append(bullets_container);
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');
        self.slides().each(function (idx, el) {
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;
          bullets_container.append(bullet);
        });
      }

    };

    self._goto = function (next_idx, start_timer) {
      // if (locked) {return false;}
      if (next_idx === idx) {return false;}
      if (typeof timer === 'object') {timer.restart();}
      var slides = self.slides();

      var dir = 'next';
      locked = true;
      if (next_idx < idx) {dir = 'prev';}
      if (next_idx >= slides.length) {
        if (!settings.circular) {
          return false;
        }
        next_idx = 0;
      } else if (next_idx < 0) {
        if (!settings.circular) {
          return false;
        }
        next_idx = slides.length - 1;
      }

      var current = $(slides.get(idx));
      var next = $(slides.get(next_idx));

      current.css('zIndex', 2);
      current.removeClass(settings.active_slide_class);
      next.css('zIndex', 4).addClass(settings.active_slide_class);

      slides_container.trigger('before-slide-change.fndtn.orbit');
      settings.before_slide_change();
      self.update_active_link(next_idx);

      var callback = function () {
        var unlock = function () {
          idx = next_idx;
          locked = false;
          if (start_timer === true) {timer = self.create_timer(); timer.start();}
          self.update_slide_number(idx);
          slides_container.trigger('after-slide-change.fndtn.orbit', [{slide_number : idx, total_slides : slides.length}]);
          settings.after_slide_change(idx, slides.length);
        };
        if (slides_container.outerHeight() != next.outerHeight() && settings.variable_height) {
          slides_container.animate({'height': next.outerHeight()}, 250, 'linear', unlock);
        } else {
          unlock();
        }
      };

      if (slides.length === 1) {callback(); return false;}

      var start_animation = function () {
        if (dir === 'next') {animate.next(current, next, callback);}
        if (dir === 'prev') {animate.prev(current, next, callback);}
      };

      if (next.outerHeight() > slides_container.outerHeight() && settings.variable_height) {
        slides_container.animate({'height': next.outerHeight()}, 250, 'linear', start_animation);
      } else {
        start_animation();
      }
    };

    self.next = function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx + 1);
    };

    self.prev = function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx - 1);
    };

    self.link_custom = function (e) {
      e.preventDefault();
      var link = $(this).attr('data-orbit-link');
      if ((typeof link === 'string') && (link = $.trim(link)) != '') {
        var slide = container.find('[data-orbit-slide=' + link + ']');
        if (slide.index() != -1) {self._goto(slide.index());}
      }
    };

    self.link_bullet = function (e) {
      var index = $(this).attr('data-orbit-slide');
      if ((typeof index === 'string') && (index = $.trim(index)) != '') {
        if (isNaN(parseInt(index))) {
          var slide = container.find('[data-orbit-slide=' + index + ']');
          if (slide.index() != -1) {self._goto(slide.index() + 1);}
        } else {
          self._goto(parseInt(index));
        }
      }

    }

    self.timer_callback = function () {
      self._goto(idx + 1, true);
    }

    self.compute_dimensions = function () {
      var current = $(self.slides().get(idx));
      var h = current.outerHeight();
      if (!settings.variable_height) {
        self.slides().each(function(){
          if ($(this).outerHeight() > h) { h = $(this).outerHeight(); }
        });
      }
      slides_container.height(h);
    };

    self.create_timer = function () {
      var t = new Timer(
        container.find('.' + settings.timer_container_class),
        settings,
        self.timer_callback
      );
      return t;
    };

    self.stop_timer = function () {
      if (typeof timer === 'object') {
        timer.stop();
      }
    };

    self.toggle_timer = function () {
      var t = container.find('.' + settings.timer_container_class);
      if (t.hasClass(settings.timer_paused_class)) {
        if (typeof timer === 'undefined') {timer = self.create_timer();}
        timer.start();
      } else {
        if (typeof timer === 'object') {timer.stop();}
      }
    };

    self.init = function () {
      self.build_markup();
      if (settings.timer) {
        timer = self.create_timer();
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);
      }
      animate = new FadeAnimation(settings, slides_container);
      if (settings.animation === 'slide') {
        animate = new SlideAnimation(settings, slides_container);
      }

      container.on('click', '.' + settings.next_class, self.next);
      container.on('click', '.' + settings.prev_class, self.prev);

      if (settings.next_on_click) {
        container.on('click', '.' + settings.slides_container_class + ' [data-orbit-slide]', self.link_bullet);
      }

      container.on('click', self.toggle_timer);
      if (settings.swipe) {
        container.on('touchstart.fndtn.orbit', function (e) {
          if (!e.touches) {e = e.originalEvent;}
          var data = {
            start_page_x : e.touches[0].pageX,
            start_page_y : e.touches[0].pageY,
            start_time : (new Date()).getTime(),
            delta_x : 0,
            is_scrolling : undefined
          };
          container.data('swipe-transition', data);
          e.stopPropagation();
        })
        .on('touchmove.fndtn.orbit', function (e) {
          if (!e.touches) {
            e = e.originalEvent;
          }
          // Ignore pinch/zoom events
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {
            return;
          }

          var data = container.data('swipe-transition');
          if (typeof data === 'undefined') {data = {};}

          data.delta_x = e.touches[0].pageX - data.start_page_x;

          if ( typeof data.is_scrolling === 'undefined') {
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }

          if (!data.is_scrolling && !data.active) {
            e.preventDefault();
            var direction = (data.delta_x < 0) ? (idx + 1) : (idx - 1);
            data.active = true;
            self._goto(direction);
          }
        })
        .on('touchend.fndtn.orbit', function (e) {
          container.data('swipe-transition', {});
          e.stopPropagation();
        })
      }
      container.on('mouseenter.fndtn.orbit', function (e) {
        if (settings.timer && settings.pause_on_hover) {
          self.stop_timer();
        }
      })
      .on('mouseleave.fndtn.orbit', function (e) {
        if (settings.timer && settings.resume_on_mouseout) {
          timer.start();
        }
      });

      $(document).on('click', '[data-orbit-link]', self.link_custom);
      $(window).on('load resize', self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), function () {
        container.prev('.' + settings.preloader_class).css('display', 'none');
        self.update_slide_number(0);
        self.update_active_link(0);
        slides_container.trigger('ready.fndtn.orbit');
      });
    };

    self.init();
  };

  var Timer = function (el, settings, callback) {
    var self = this,
        duration = settings.timer_speed,
        progress = el.find('.' + settings.timer_progress_class),
        start,
        timeout,
        left = -1;

    this.update_progress = function (w) {
      var new_progress = progress.clone();
      new_progress.attr('style', '');
      new_progress.css('width', w + '%');
      progress.replaceWith(new_progress);
      progress = new_progress;
    };

    this.restart = function () {
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      left = -1;
      self.update_progress(0);
    };

    this.start = function () {
      if (!el.hasClass(settings.timer_paused_class)) {return true;}
      left = (left === -1) ? duration : left;
      el.removeClass(settings.timer_paused_class);
      start = new Date().getTime();
      progress.animate({'width' : '100%'}, left, 'linear');
      timeout = setTimeout(function () {
        self.restart();
        callback();
      }, left);
      el.trigger('timer-started.fndtn.orbit')
    };

    this.stop = function () {
      if (el.hasClass(settings.timer_paused_class)) {return true;}
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      var end = new Date().getTime();
      left = left - (end - start);
      var w = 100 - ((left / duration) * 100);
      self.update_progress(w);
      el.trigger('timer-stopped.fndtn.orbit');
    };
  };

  var SlideAnimation = function (settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';
    var animMargin = {};
    animMargin[margin] = '0%';

    this.next = function (current, next, callback) {
      current.animate({marginLeft : '-100%'}, duration);
      next.animate(animMargin, duration, function () {
        current.css(margin, '100%');
        callback();
      });
    };

    this.prev = function (current, prev, callback) {
      current.animate({marginLeft : '100%'}, duration);
      prev.css(margin, '-100%');
      prev.animate(animMargin, duration, function () {
        current.css(margin, '100%');
        callback();
      });
    };
  };

  var FadeAnimation = function (settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';

    this.next = function (current, next, callback) {
      next.css({'margin' : '0%', 'opacity' : '0.01'});
      next.animate({'opacity' :'1'}, duration, 'linear', function () {
        current.css('margin', '100%');
        callback();
      });
    };

    this.prev = function (current, prev, callback) {
      prev.css({'margin' : '0%', 'opacity' : '0.01'});
      prev.animate({'opacity' : '1'}, duration, 'linear', function () {
        current.css('margin', '100%');
        callback();
      });
    };
  };

  Foundation.libs = Foundation.libs || {};

  Foundation.libs.orbit = {
    name : 'orbit',

    version : '5.5.1',

    settings : {
      animation : 'slide',
      timer_speed : 10000,
      pause_on_hover : true,
      resume_on_mouseout : false,
      next_on_click : true,
      animation_speed : 500,
      stack_on_small : false,
      navigation_arrows : true,
      slide_number : true,
      slide_number_text : 'of',
      container_class : 'orbit-container',
      stack_on_small_class : 'orbit-stack-on-small',
      next_class : 'orbit-next',
      prev_class : 'orbit-prev',
      timer_container_class : 'orbit-timer',
      timer_paused_class : 'paused',
      timer_progress_class : 'orbit-progress',
      slides_container_class : 'orbit-slides-container',
      preloader_class : 'preloader',
      slide_selector : '*',
      bullets_container_class : 'orbit-bullets',
      bullets_active_class : 'active',
      slide_number_class : 'orbit-slide-number',
      caption_class : 'orbit-caption',
      active_slide_class : 'active',
      orbit_transition_class : 'orbit-transitioning',
      bullets : true,
      circular : true,
      timer : true,
      variable_height : false,
      swipe : true,
      before_slide_change : noop,
      after_slide_change : noop
    },

    init : function (scope, method, options) {
      var self = this;
      this.bindings(method, options);
    },

    events : function (instance) {
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));
      this.S(instance).data(this.name + '-instance', orbit_instance);
    },

    reflow : function () {
      var self = this;

      if (self.S(self.scope).is('[data-orbit]')) {
        var $el = self.S(self.scope);
        var instance = $el.data(self.name + '-instance');
        instance.compute_dimensions();
      } else {
        self.S('[data-orbit]', self.scope).each(function (idx, el) {
          var $el = self.S(el);
          var opts = self.data_options($el);
          var instance = $el.data(self.name + '-instance');
          instance.compute_dimensions();
        });
      }
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.5.1',

    settings : {
      open_method : 'move',
      close_on_click : false
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          move_class = '',
          right_postfix = '',
          left_postfix = '';

      if (this.settings.open_method === 'move') {
        move_class = 'move-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap_single') {
        move_class = 'offcanvas-overlap-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap') {
        move_class = 'offcanvas-overlap';
      }

      S(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + right_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.left-submenu').removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + right_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + left_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.right-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + left_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          S('.right-submenu').removeClass(move_class + left_postfix);
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            S('.left-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');
          }
        });
    },

    toggle : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      if ($off_canvas.is('.' + class_name)) {
        this.hide(class_name, $off_canvas);
      } else {
        this.show(class_name, $off_canvas);
      }
    },

    show : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('open').trigger('open.fndtn.offcanvas');
      $off_canvas.addClass(class_name);
    },

    hide : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('close').trigger('close.fndtn.offcanvas');
      $off_canvas.removeClass(class_name);
    },

    click_toggle_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.toggle(class_name, $off_canvas);
    },

    click_remove_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.hide(class_name, $off_canvas);
    },

    get_settings : function (e) {
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
    },

    get_wrapper : function (e) {
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');

      if ($off_canvas.length === 0) {
        $off_canvas = this.S('.off-canvas-wrap');
      }
      return $off_canvas;
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.alert = {
    name : 'alert',

    version : '5.5.1',

    settings : {
      callback : function () {}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = this.S;

      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {
        var alertBox = S(this).closest('[' + self.attr_name() + ']'),
            settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;

        e.preventDefault();
        if (Modernizr.csstransitions) {
          alertBox.addClass('alert-close');
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        } else {
          alertBox.fadeOut(300, function () {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        }
      });
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.reveal = {
    name : 'reveal',

    version : '5.5.1',

    locked : false,

    settings : {
      animation : 'fadeAndPop',
      animation_speed : 250,
      close_on_background_click : true,
      close_on_esc : true,
      dismiss_modal_class : 'close-reveal-modal',
      multiple_opened : false,
      bg_class : 'reveal-modal-bg',
      root_element : 'body',
      open : function(){},
      opened : function(){},
      close : function(){},
      closed : function(){},
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity' : 0,
          'visibility' : 'visible',
          'display' : 'block'
        },
        close : {
          'opacity' : 1,
          'visibility' : 'hidden',
          'display' : 'none'
        }
      }
    },

    init : function (scope, method, options) {
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {
          e.preventDefault();

          if (!self.locked) {
            var element = S(this),
                ajax = element.data(self.data_attr('reveal-ajax'));

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;

              self.open.call(self, element, {url : url});
            }
          }
        });

      S(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault();
          if (!self.locked) {
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings,
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];

            if (bg_clicked) {
              if (settings.close_on_background_click) {
                e.stopPropagation();
              } else {
                return;
              }
            }

            self.locked = true;
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open') : S(this).closest('[' + self.attr_name() + ']'));
          }
        });

      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video);
      } else {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);
      }

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on : function (scope) {
      var self = this;

      // PATCH #1: fixing multiple keyup event trigger from single key press
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {
        var open_modal = self.S('[' + self.attr_name() + '].open'),
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);
        }
      });

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off : function (scope) {
      this.S('body').off('keyup.fndtn.reveal');
      return true;
    },

    open : function (target, ajax_settings) {
      var self = this,
          modal;

      if (target) {
        if (typeof target.selector !== 'undefined') {
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();
        } else {
          modal = self.S(this.scope);

          ajax_settings = target;
        }
      } else {
        modal = self.S(this.scope);
      }

      var settings = modal.data(self.attr_name(true) + '-init');
      settings = settings || this.settings;

      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {
        return self.close(modal);
      }

      if (!modal.hasClass('open')) {
        var open_modal = self.S('[' + self.attr_name() + '].open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open

        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');

        if (open_modal.length < 1) {
          this.toggle_bg(modal, true);
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url : ajax_settings
          };
        }

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          if (open_modal.length > 0) {
            if (settings.multiple_opened) {
              this.to_back(open_modal);
            } else {
              this.hide(open_modal, settings.css.close);
            }
          }

          this.show(modal, settings.css.open);
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

          $.extend(ajax_settings, {
            success : function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                var result = old_success(data, textStatus, jqXHR);
                if (typeof result == 'string') {
                  data = result;
                }
              }

              modal.html(data);
              self.S(modal).foundation('section', 'reflow');
              self.S(modal).children().foundation();

              if (open_modal.length > 0) {
                if (settings.multiple_opened) {
                  this.to_back(open_modal);
                } else {
                  this.hide(open_modal, settings.css.close);
                }
              }
              self.show(modal, settings.css.open);
            }
          });

          $.ajax(ajax_settings);
        }
      }
      self.S(window).trigger('resize');
    },

    close : function (modal) {
      var modal = modal && modal.length ? modal : this.S(this.scope),
          open_modals = this.S('[' + this.attr_name() + '].open'),
          settings = modal.data(this.attr_name(true) + '-init') || this.settings;

      if (open_modals.length > 0) {
        this.locked = true;
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('close').trigger('close.fndtn.reveal');
        
        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) {
          this.toggle_bg(modal, false);
          this.to_front(modal);
        }
        
        if (settings.multiple_opened) {
          this.hide(modal, settings.css.close, settings);
          this.to_front($($.makeArray(open_modals).reverse()[1]));
        } else {
          this.hide(open_modals, settings.css.close, settings);
        }
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismiss_modal_class;

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class;
      }

      return base;
    },

    toggle_bg : function (modal, state) {
      if (this.S('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body').hide();
      }

      var visible = this.settings.bg.filter(':visible').length > 0;
      if ( state != visible ) {
        if ( state == undefined ? visible : !state ) {
          this.hide(this.settings.bg);
        } else {
          this.show(this.settings.bg);
        }
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,
            root_element = settings.root_element;

        if (el.parent(root_element).length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent();

          el.on('closed.fndtn.reveal.wrapped', function () {
            el.detach().appendTo(placeholder);
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');
          });

          el.detach().appendTo(root_element);
        }

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';
          var end_css = {opacity: 1};

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.css(css).show().css({opacity : 1}).addClass('open').trigger('opened').trigger('opened.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeIn(settings.animation_speed / 2);
      }

      this.locked = false;

      return el.show();
    },
    
    to_back : function(el) {
      el.addClass('toback');
    },
    
    to_front : function(el) {
      el.removeClass('toback');
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init');
        settings = settings || this.settings;

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          var end_css = {opacity : 0};

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeOut(settings.animation_speed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = $('iframe', video);

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', iframe.attr('src'));
        video.hide();
      }
    },

    open_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
      }
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
    },

    reflow : function () {}
  };

  /*
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}
   */
  function getAnimationData(str) {
    var fade = /fade/i.test(str);
    var pop = /pop/i.test(str);
    return {
      animate : fade || pop,
      pop : pop,
      fade : fade
    };
  }
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.interchange = {
    name : 'interchange',

    version : '5.5.1',

    cache : {},

    images_loaded : false,
    nodes_loaded : false,

    settings : {
      load_attr : 'interchange',

      named_queries : {
        'default'     : 'only screen',
        'small'       : Foundation.media_queries['small'],
        'small-only'  : Foundation.media_queries['small-only'],
        'medium'      : Foundation.media_queries['medium'],
        'medium-only' : Foundation.media_queries['medium-only'],
        'large'       : Foundation.media_queries['large'],
        'large-only'  : Foundation.media_queries['large-only'],
        'xlarge'      : Foundation.media_queries['xlarge'],
        'xlarge-only' : Foundation.media_queries['xlarge-only'],
        'xxlarge'     : Foundation.media_queries['xxlarge'],
        'landscape'   : 'only screen and (orientation: landscape)',
        'portrait'    : 'only screen and (orientation: portrait)',
        'retina'      : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
          'only screen and (min--moz-device-pixel-ratio: 2),' +
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +
          'only screen and (min-device-pixel-ratio: 2),' +
          'only screen and (min-resolution: 192dpi),' +
          'only screen and (min-resolution: 2dppx)'
      },

      directives : {
        replace : function (el, path, trigger) {
          // The trigger argument, if called within the directive, fires
          // an event named after the directive on the element, passing
          // any parameters along to the event that you pass to trigger.
          //
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)
          //
          // This allows you to bind a callback like so:
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {
          //   console.log($(this).html(), a, b, c);
          // });

          if (/IMG/.test(el[0].nodeName)) {
            var orig_path = el[0].src;

            if (new RegExp(path, 'i').test(orig_path)) {
              return;
            }

            el[0].src = path;

            return trigger(el[0].src);
          }
          var last_path = el.data(this.data_attr + '-last-path'),
              self = this;

          if (last_path == path) {
            return;
          }

          if (/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(path)) {
            $(el).css('background-image', 'url(' + path + ')');
            el.data('interchange-last-path', path);
            return trigger(path);
          }

          return $.get(path, function (response) {
            el.html(response);
            el.data(self.data_attr + '-last-path', path);
            trigger();
          });

        }
      }
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle random_str');

      this.data_attr = this.set_data_attr();
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
      this.load('images');
      this.load('nodes');
    },

    get_media_hash : function () {
        var mediaHash = '';
        for (var queryName in this.settings.named_queries ) {
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();
        }
        return mediaHash;
    },

    events : function () {
      var self = this, prevMediaHash;

      $(window)
        .off('.interchange')
        .on('resize.fndtn.interchange', self.throttle(function () {
            var currMediaHash = self.get_media_hash();
            if (currMediaHash !== prevMediaHash) {
                self.resize();
            }
            prevMediaHash = currMediaHash;
        }, 50));

      return this;
    },

    resize : function () {
      var cache = this.cache;

      if (!this.images_loaded || !this.nodes_loaded) {
        setTimeout($.proxy(this.resize, this), 50);
        return;
      }

      for (var uuid in cache) {
        if (cache.hasOwnProperty(uuid)) {
          var passed = this.results(uuid, cache[uuid]);

          if (passed) {
            this.settings.directives[passed
              .scenario[1]].call(this, passed.el, passed.scenario[0], (function (passed) {
                if (arguments[0] instanceof Array) { 
                  var args = arguments[0];
                } else {
                  var args = Array.prototype.slice.call(arguments, 0);
                }

                return function() {
                  passed.el.trigger(passed.scenario[1], args);
                }
              }(passed)));
          }
        }
      }

    },

    results : function (uuid, scenarios) {
      var count = scenarios.length;

      if (count > 0) {
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');

        while (count--) {
          var mq, rule = scenarios[count][2];
          if (this.settings.named_queries.hasOwnProperty(rule)) {
            mq = matchMedia(this.settings.named_queries[rule]);
          } else {
            mq = matchMedia(rule);
          }
          if (mq.matches) {
            return {el : el, scenario : scenarios[count]};
          }
        }
      }

      return false;
    },

    load : function (type, force_update) {
      if (typeof this['cached_' + type] === 'undefined' || force_update) {
        this['update_' + type]();
      }

      return this['cached_' + type];
    },

    update_images : function () {
      var images = this.S('img[' + this.data_attr + ']'),
          count = images.length,
          i = count,
          loaded_count = 0,
          data_attr = this.data_attr;

      this.cache = {};
      this.cached_images = [];
      this.images_loaded = (count === 0);

      while (i--) {
        loaded_count++;
        if (images[i]) {
          var str = images[i].getAttribute(data_attr) || '';

          if (str.length > 0) {
            this.cached_images.push(images[i]);
          }
        }

        if (loaded_count === count) {
          this.images_loaded = true;
          this.enhance('images');
        }
      }

      return this;
    },

    update_nodes : function () {
      var nodes = this.S('[' + this.data_attr + ']').not('img'),
          count = nodes.length,
          i = count,
          loaded_count = 0,
          data_attr = this.data_attr;

      this.cached_nodes = [];
      this.nodes_loaded = (count === 0);

      while (i--) {
        loaded_count++;
        var str = nodes[i].getAttribute(data_attr) || '';

        if (str.length > 0) {
          this.cached_nodes.push(nodes[i]);
        }

        if (loaded_count === count) {
          this.nodes_loaded = true;
          this.enhance('nodes');
        }
      }

      return this;
    },

    enhance : function (type) {
      var i = this['cached_' + type].length;

      while (i--) {
        this.object($(this['cached_' + type][i]));
      }

      return $(window).trigger('resize').trigger('resize.fndtn.interchange');
    },

    convert_directive : function (directive) {

      var trimmed = this.trim(directive);

      if (trimmed.length > 0) {
        return trimmed;
      }

      return 'replace';
    },

    parse_scenario : function (scenario) {
      // This logic had to be made more complex since some users were using commas in the url path
      // So we cannot simply just split on a comma
      var directive_match = scenario[0].match(/(.+),\s*(\w+)\s*$/),
      media_query         = scenario[1];

      if (directive_match) {
        var path  = directive_match[1],
        directive = directive_match[2];
      } else {
        var cached_split = scenario[0].split(/,\s*$/),
        path             = cached_split[0],
        directive        = '';
      }

      return [this.trim(path), this.convert_directive(directive), this.trim(media_query)];
    },

    object : function (el) {
      var raw_arr = this.parse_data_attr(el),
          scenarios = [],
          i = raw_arr.length;

      if (i > 0) {
        while (i--) {
          var split = raw_arr[i].split(/\(([^\)]*?)(\))$/);

          if (split.length > 1) {
            var params = this.parse_scenario(split);
            scenarios.push(params);
          }
        }
      }

      return this.store(el, scenarios);
    },

    store : function (el, scenarios) {
      var uuid = this.random_str(),
          current_uuid = el.data(this.add_namespace('uuid', true));

      if (this.cache[current_uuid]) {
        return this.cache[current_uuid];
      }

      el.attr(this.add_namespace('data-uuid'), uuid);

      return this.cache[uuid] = scenarios;
    },

    trim : function (str) {

      if (typeof str === 'string') {
        return $.trim(str);
      }

      return str;
    },

    set_data_attr : function (init) {
      if (init) {
        if (this.namespace.length > 0) {
          return this.namespace + '-' + this.settings.load_attr;
        }

        return this.settings.load_attr;
      }

      if (this.namespace.length > 0) {
        return 'data-' + this.namespace + '-' + this.settings.load_attr;
      }

      return 'data-' + this.settings.load_attr;
    },

    parse_data_attr : function (el) {
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),
          i = raw.length,
          output = [];

      while (i--) {
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {
          output.push(raw[i]);
        }
      }

      return output;
    },

    reflow : function () {
      this.load('images', true);
      this.load('nodes', true);
    }

  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs['magellan-expedition'] = {
    name : 'magellan-expedition',

    version : '5.5.1',

    settings : {
      active_class : 'active',
      threshold : 0, // pixels from the top of the expedition for it to become fixes
      destination_threshold : 20, // pixels from the top of destination for it to be considered active
      throttle_delay : 30, // calculation throttling to increase framerate
      fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll
      offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration : 700, // animation duration time
      easing : 'swing' // animation easing
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          settings = self.settings;

      // initialize expedition offset
      self.set_expedition_position();

      S(self.scope)
        .off('.magellan')
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href^="#"]', function (e) {
          e.preventDefault();
          var expedition = $(this).closest('[' + self.attr_name() + ']'),
              settings = expedition.data('magellan-expedition-init'),
              hash = this.hash.split('#').join(''),
              target = $('a[name="' + hash + '"]');

          if (target.length === 0) {
            target = $('#' + hash);

          }

          // Account for expedition height if fixed position
          var scroll_top = target.offset().top - settings.destination_threshold + 1;
          if (settings.offset_by_height) {
            scroll_top = scroll_top - expedition.outerHeight();
          }

          $('html, body').stop().animate({
            'scrollTop' : scroll_top
          }, settings.duration, settings.easing, function () {
            if (history.pushState) {
              history.pushState(null, null, '#' + hash);
            } else {
              location.hash = '#' + hash;
            }
          });
        })
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));

      $(window)
        .on('resize.fndtn.magellan', self.throttle(this.set_expedition_position.bind(this), settings.throttle_delay));
    },

    check_for_arrivals : function () {
      var self = this;
      self.update_arrivals();
      self.update_expedition_positions();
    },

    set_expedition_position : function () {
      var self = this;
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function (idx, el) {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('styles'), // save styles
            top_offset, fixed_top;

        expedition.attr('style', '');
        top_offset = expedition.offset().top + settings.threshold;

        //set fixed-top by attribute
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));
        if (!isNaN(fixed_top)) {
          self.settings.fixed_top = fixed_top;
        }

        expedition.data(self.data_attr('magellan-top-offset'), top_offset);
        expedition.attr('style', styles);
      });
    },

    update_expedition_positions : function () {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + '=fixed]', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('style'), // save styles
            top_offset = expedition.data('magellan-top-offset');

        //scroll to the top distance
        if (window_top_offset + self.settings.fixed_top >= top_offset) {
          // Placeholder allows height calculations to be consistent even when
          // appearing to switch between fixed/non-fixed placement
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');
          if (placeholder.length === 0) {
            placeholder = expedition.clone();
            placeholder.removeAttr(self.attr_name());
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'), '');
            expedition.before(placeholder);
          }
          expedition.css({position :'fixed', top : settings.fixed_top}).addClass('fixed');
        } else {
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();
          expedition.attr('style', styles).css('position', '').css('top', '').removeClass('fixed');
        }
      });
    },

    update_arrivals : function () {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + ']', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data(self.attr_name(true) + '-init'),
            offsets = self.offsets(expedition, window_top_offset),
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),
            active_item = false;
        offsets.each(function (idx, item) {
          if (item.viewport_offset >= item.top_offset) {
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');
            arrivals.not(item.arrival).removeClass(settings.active_class);
            item.arrival.addClass(settings.active_class);
            active_item = true;
            return true;
          }
        });

        if (!active_item) {
          arrivals.removeClass(settings.active_class);
        }
      });
    },

    offsets : function (expedition, window_offset) {
      var self = this,
          settings = expedition.data(self.attr_name(true) + '-init'),
          viewport_offset = window_offset;

      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function (idx, el) {
        var name = $(this).data(self.data_attr('magellan-arrival')),
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');
        if (dest.length > 0) {
          var top_offset = dest.offset().top - settings.destination_threshold;
          if (settings.offset_by_height) {
            top_offset = top_offset - expedition.outerHeight();
          }
          top_offset = Math.floor(top_offset);
          return {
            destination : dest,
            arrival : $(this),
            top_offset : top_offset,
            viewport_offset : viewport_offset
          }
        }
      }).sort(function (a, b) {
        if (a.top_offset < b.top_offset) {
          return -1;
        }
        if (a.top_offset > b.top_offset) {
          return 1;
        }
        return 0;
      });
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {
      this.S(this.scope).off('.magellan');
      this.S(window).off('.magellan');
    },

    reflow : function () {
      var self = this;
      // remove placeholder expeditions used for height calculation purposes
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();
    }
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.accordion = {
    name : 'accordion',

    version : '5.5.1',

    settings : {
      content_class : 'content',
      active_class : 'active',
      multi_expand : false,
      toggleable : true,
      callback : function () {}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this;
      var S = this.S;
      S(this.scope)
      .off('.fndtn.accordion')
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > .accordion-navigation > a', function (e) {
        var accordion = S(this).closest('[' + self.attr_name() + ']'),
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,
            target = S('#' + this.href.split('#')[1]),
            aunts = $('> .accordion-navigation', accordion),
            siblings = aunts.children('.' + settings.content_class),
            active_content = siblings.filter('.' + settings.active_class);

        e.preventDefault();

        if (accordion.attr(self.attr_name())) {
          siblings = siblings.add('[' + groupSelector + '] dd > ' + '.' + settings.content_class);
          aunts = aunts.add('[' + groupSelector + '] .accordion-navigation');
        }

        if (settings.toggleable && target.is(active_content)) {
          target.parent('.accordion-navigation').toggleClass(settings.active_class, false);
          target.toggleClass(settings.active_class, false);
          settings.callback(target);
          target.triggerHandler('toggled', [accordion]);
          accordion.triggerHandler('toggled', [target]);
          return;
        }

        if (!settings.multi_expand) {
          siblings.removeClass(settings.active_class);
          aunts.removeClass(settings.active_class);
        }

        target.addClass(settings.active_class).parent().addClass(settings.active_class);
        settings.callback(target);
        target.triggerHandler('toggled', [accordion]);
        accordion.triggerHandler('toggled', [target]);
      });
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.topbar = {
    name : 'topbar',

    version : '5.5.1',

    settings : {
      index : 0,
      sticky_class : 'sticky',
      custom_back_text : true,
      back_text : 'Back',
      mobile_show_parent_link : true,
      is_hover : true,
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked
      sticky_on : 'all'
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'add_custom_rule register_media throttle');
      var self = this;

      self.register_media('topbar', 'foundation-mq-topbar');

      this.bindings(method, options);

      self.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var topbar = $(this),
            settings = topbar.data(self.attr_name(true) + '-init'),
            section = self.S('section, .top-bar-section', this);
        topbar.data('index', 0);
        var topbarContainer = topbar.parent();
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {
          self.settings.sticky_class = settings.sticky_class;
          self.settings.sticky_topbar = topbar;
          topbar.data('height', topbarContainer.outerHeight());
          topbar.data('stickyoffset', topbarContainer.offset().top);
        } else {
          topbar.data('height', topbar.outerHeight());
        }

        if (!settings.assembled) {
          self.assemble(topbar);
        }

        if (settings.is_hover) {
          self.S('.has-dropdown', topbar).addClass('not-click');
        } else {
          self.S('.has-dropdown', topbar).removeClass('not-click');
        }

        // Pad body when sticky (scrolled) or fixed.
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');

        if (topbarContainer.hasClass('fixed')) {
          self.S('body').addClass('f-topbar-fixed');
        }
      });

    },

    is_sticky : function (topbar, topbarContainer, settings) {
      var sticky     = topbarContainer.hasClass(settings.sticky_class);
      var smallMatch = matchMedia(Foundation.media_queries.small).matches;
      var medMatch   = matchMedia(Foundation.media_queries.medium).matches;
      var lrgMatch   = matchMedia(Foundation.media_queries.large).matches;
      
       if (sticky && settings.sticky_on === 'all') {
          return true;
       }
       if (sticky && this.small() && settings.sticky_on.indexOf('small') !== -1) {
           if (smallMatch && !medMatch && !lrgMatch) { return true; }
       }
       if (sticky && this.medium() && settings.sticky_on.indexOf('medium') !== -1) {
           if (smallMatch && medMatch && !lrgMatch) { return true; }
       }
       if (sticky && this.large() && settings.sticky_on.indexOf('large') !== -1) {
           if (smallMatch && medMatch && lrgMatch) { return true; }
       }

       // fix for iOS browsers
       if (sticky && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        return true;
       }
       return false;
    },

    toggle : function (toggleEl) {
      var self = this,
          topbar;

      if (toggleEl) {
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');
      } else {
        topbar = self.S('[' + this.attr_name() + ']');
      }

      var settings = topbar.data(this.attr_name(true) + '-init');

      var section = self.S('section, .top-bar-section', topbar);

      if (self.breakpoint()) {
        if (!self.rtl) {
          section.css({left : '0%'});
          $('>.name', section).css({left : '100%'});
        } else {
          section.css({right : '0%'});
          $('>.name', section).css({right : '100%'});
        }

        self.S('li.moved', section).removeClass('moved');
        topbar.data('index', 0);

        topbar
          .toggleClass('expanded')
          .css('height', '');
      }

      if (settings.scrolltop) {
        if (!topbar.hasClass('expanded')) {
          if (topbar.hasClass('fixed')) {
            topbar.parent().addClass('fixed');
            topbar.removeClass('fixed');
            self.S('body').addClass('f-topbar-fixed');
          }
        } else if (topbar.parent().hasClass('fixed')) {
          if (settings.scrolltop) {
            topbar.parent().removeClass('fixed');
            topbar.addClass('fixed');
            self.S('body').removeClass('f-topbar-fixed');

            window.scrollTo(0, 0);
          } else {
            topbar.parent().removeClass('expanded');
          }
        }
      } else {
        if (self.is_sticky(topbar, topbar.parent(), settings)) {
          topbar.parent().addClass('fixed');
        }

        if (topbar.parent().hasClass('fixed')) {
          if (!topbar.hasClass('expanded')) {
            topbar.removeClass('fixed');
            topbar.parent().removeClass('expanded');
            self.update_sticky_positioning();
          } else {
            topbar.addClass('fixed');
            topbar.parent().addClass('expanded');
            self.S('body').addClass('f-topbar-fixed');
          }
        }
      }
    },

    timer : null,

    events : function (bar) {
      var self = this,
          S = this.S;

      S(this.scope)
        .off('.topbar')
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {
          e.preventDefault();
          self.toggle(this);
        })
        .on('click.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (e) {
            var li = $(this).closest('li');
            if (self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown')) {
              self.toggle();
            }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {
          var li = S(this),
              target = S(e.target),
              topbar = li.closest('[' + self.attr_name() + ']'),
              settings = topbar.data(self.attr_name(true) + '-init');

          if (target.data('revealId')) {
            self.toggle();
            return;
          }

          if (self.breakpoint()) {
            return;
          }

          if (settings.is_hover && !Modernizr.touch) {
            return;
          }

          e.stopImmediatePropagation();

          if (li.hasClass('hover')) {
            li
              .removeClass('hover')
              .find('li')
              .removeClass('hover');

            li.parents('li.hover')
              .removeClass('hover');
          } else {
            li.addClass('hover');

            $(li).siblings().removeClass('hover');

            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
              e.preventDefault();
            }
          }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {
          if (self.breakpoint()) {

            e.preventDefault();

            var $this = S(this),
                topbar = $this.closest('[' + self.attr_name() + ']'),
                section = topbar.find('section, .top-bar-section'),
                dropdownHeight = $this.next('.dropdown').outerHeight(),
                $selectedLi = $this.closest('li');

            topbar.data('index', topbar.data('index') + 1);
            $selectedLi.addClass('moved');

            if (!self.rtl) {
              section.css({left : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
            } else {
              section.css({right : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
            }

            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));
          }
        });

      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {
          self.resize.call(self);
      }, 50)).trigger('resize').trigger('resize.fndtn.topbar').load(function () {
          // Ensure that the offset is calculated after all of the pages resources have loaded
          S(this).trigger('resize.fndtn.topbar');
      });

      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {
        var parent = S(e.target).closest('li').closest('li.hover');

        if (parent.length > 0) {
          return;
        }

        S('[' + self.attr_name() + '] li.hover').removeClass('hover');
      });

      // Go up a level on Click
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {
        e.preventDefault();

        var $this = S(this),
            topbar = $this.closest('[' + self.attr_name() + ']'),
            section = topbar.find('section, .top-bar-section'),
            settings = topbar.data(self.attr_name(true) + '-init'),
            $movedLi = $this.closest('li.moved'),
            $previousLevelUl = $movedLi.parent();

        topbar.data('index', topbar.data('index') - 1);

        if (!self.rtl) {
          section.css({left : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
        } else {
          section.css({right : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
        }

        if (topbar.data('index') === 0) {
          topbar.css('height', '');
        } else {
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));
        }

        setTimeout(function () {
          $movedLi.removeClass('moved');
        }, 300);
      });

      // Show dropdown menus when their items are focused
      S(this.scope).find('.dropdown a')
        .focus(function () {
          $(this).parents('.has-dropdown').addClass('hover');
        })
        .blur(function () {
          $(this).parents('.has-dropdown').removeClass('hover');
        });
    },

    resize : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var topbar = self.S(this),
            settings = topbar.data(self.attr_name(true) + '-init');

        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);
        var stickyOffset;

        if (!self.breakpoint()) {
          var doToggle = topbar.hasClass('expanded');
          topbar
            .css('height', '')
            .removeClass('expanded')
            .find('li')
            .removeClass('hover');

            if (doToggle) {
              self.toggle(topbar);
            }
        }

        if (self.is_sticky(topbar, stickyContainer, settings)) {
          if (stickyContainer.hasClass('fixed')) {
            // Remove the fixed to allow for correct calculation of the offset.
            stickyContainer.removeClass('fixed');

            stickyOffset = stickyContainer.offset().top;
            if (self.S(document.body).hasClass('f-topbar-fixed')) {
              stickyOffset -= topbar.data('height');
            }

            topbar.data('stickyoffset', stickyOffset);
            stickyContainer.addClass('fixed');
          } else {
            stickyOffset = stickyContainer.offset().top;
            topbar.data('stickyoffset', stickyOffset);
          }
        }

      });
    },

    breakpoint : function () {
      return !matchMedia(Foundation.media_queries['topbar']).matches;
    },

    small : function () {
      return matchMedia(Foundation.media_queries['small']).matches;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    assemble : function (topbar) {
      var self = this,
          settings = topbar.data(this.attr_name(true) + '-init'),
          section = self.S('section, .top-bar-section', topbar);

      // Pull element out of the DOM for manipulation
      section.detach();

      self.S('.has-dropdown>a', section).each(function () {
        var $link = self.S(this),
            $dropdown = $link.siblings('.dropdown'),
            url = $link.attr('href'),
            $titleLi;

        if (!$dropdown.find('.title.back').length) {

          if (settings.mobile_show_parent_link == true && url) {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');
          }

          // Copy link to subnav
          if (settings.custom_back_text == true) {
            $('h5>a', $titleLi).html(settings.back_text);
          } else {
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());
          }
          $dropdown.prepend($titleLi);
        }
      });

      // Put element back in the DOM
      section.appendTo(topbar);

      // check for sticky
      this.sticky();

      this.assembled(topbar);
    },

    assembled : function (topbar) {
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled : true}));
    },

    height : function (ul) {
      var total = 0,
          self = this;

      $('> li', ul).each(function () {
        total += self.S(this).outerHeight(true);
      });

      return total;
    },

    sticky : function () {
      var self = this;

      this.S(window).on('scroll', function () {
        self.update_sticky_positioning();
      });
    },

    update_sticky_positioning : function () {
      var klass = '.' + this.settings.sticky_class,
          $window = this.S(window),
          self = this;

      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset');
        if (!self.S(klass).hasClass('expanded')) {
          if ($window.scrollTop() > (distance)) {
            if (!self.S(klass).hasClass('fixed')) {
              self.S(klass).addClass('fixed');
              self.S('body').addClass('f-topbar-fixed');
            }
          } else if ($window.scrollTop() <= distance) {
            if (self.S(klass).hasClass('fixed')) {
              self.S(klass).removeClass('fixed');
              self.S('body').removeClass('f-topbar-fixed');
            }
          }
        }
      }
    },

    off : function () {
      this.S(this.scope).off('.fndtn.topbar');
      this.S(window).off('.fndtn.topbar');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tab = {
    name : 'tab',

    version : '5.5.1',

    settings : {
      active_class : 'active',
      callback : function () {},
      deep_linking : false,
      scroll_to_content : true,
      is_hover : false
    },

    default_tab_hashes : [],

    init : function (scope, method, options) {
      var self = this,
          S = this.S;

      this.bindings(method, options);

      // store the initial href, which is used to allow correct behaviour of the
      // browser back button when deep linking is turned on.
      self.entry_location = window.location.href;

      this.handle_location_hash_change();

      // Store the default active tabs which will be referenced when the
      // location hash is absent, as in the case of navigating the tabs and
      // returning to the first viewing via the browser Back button.
      S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {
        self.default_tab_hashes.push(this.hash);
      });
    },

    events : function () {
      var self = this,
          S = this.S;

      var usual_tab_behavior =  function (e) {
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
          if (!settings.is_hover || Modernizr.touch) {
            e.preventDefault();
            e.stopPropagation();
            self.toggle_active_tab(S(this).parent());
          }
        };

      S(this.scope)
        .off('.tab')
        // Click event: tab title
        .on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        // Hover event: tab title
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
          if (settings.is_hover) {
            self.toggle_active_tab(S(this).parent());
          }
        });

      // Location hash change event
      S(window).on('hashchange.fndtn.tab', function (e) {
        e.preventDefault();
        self.handle_location_hash_change();
      });
    },

    handle_location_hash_change : function () {

      var self = this,
          S = this.S;

      S('[' + this.attr_name() + ']', this.scope).each(function () {
        var settings = S(this).data(self.attr_name(true) + '-init');
        if (settings.deep_linking) {
          // Match the location hash to a label
          var hash;
          if (settings.scroll_to_content) {
            hash = self.scope.location.hash;
          } else {
            // prefix the hash to prevent anchor scrolling
            hash = self.scope.location.hash.replace('fndtn-', '');
          }
          if (hash != '') {
            // Check whether the location hash references a tab content div or
            // another element on the page (inside or outside the tab content div)
            var hash_element = S(hash);
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tabs-content')) {
              // Tab content div
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());
            } else {
              // Not the tab content div. If inside the tab content, find the
              // containing tab and toggle it as active.
              var hash_tab_container_id = hash_element.closest('.content').attr('id');
              if (hash_tab_container_id != undefined) {
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }
            }
          } else {
            // Reference the default tab hashes which were initialized in the init function
            for (var ind = 0; ind < self.default_tab_hashes.length; ind++) {
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }
          }
        }
       });
     },

    toggle_active_tab : function (tab, location_hash) {
      var self = this,
          S = self.S,
          tabs = tab.closest('[' + this.attr_name() + ']'),
          tab_link = tab.find('a'),
          anchor = tab.children('a').first(),
          target_hash = '#' + anchor.attr('href').split('#')[1],
          target = S(target_hash),
          siblings = tab.siblings(),
          settings = tabs.data(this.attr_name(true) + '-init'),
          interpret_keyup_action = function (e) {
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js

            // define current, previous and next (possible) tabs

            var $original = $(this);
            var $prev = $(this).parents('li').prev().children('[role="tab"]');
            var $next = $(this).parents('li').next().children('[role="tab"]');
            var $target;

            // find the direction (prev or next)

            switch (e.keyCode) {
              case 37:
                $target = $prev;
                break;
              case 39:
                $target = $next;
                break;
              default:
                $target = false
                  break;
            }

            if ($target.length) {
              $original.attr({
                'tabindex' : '-1',
                'aria-selected' : null
              });
              $target.attr({
                'tabindex' : '0',
                'aria-selected' : true
              }).focus();
            }

            // Hide panels

            $('[role="tabpanel"]')
              .attr('aria-hidden', 'true');

            // Show panel which corresponds to target

            $('#' + $(document.activeElement).attr('href').substring(1))
              .attr('aria-hidden', null);

          },
          go_to_hash = function(hash) {
            // This function allows correct behaviour of the browser's back button when deep linking is enabled. Without it
            // the user would get continually redirected to the default hash.
            var is_entry_location = window.location.href === self.entry_location,
                default_hash = settings.scroll_to_content ? self.default_tab_hashes[0] : is_entry_location ? window.location.hash :'fndtn-' + self.default_tab_hashes[0].replace('#', '')

            if (!(is_entry_location && hash === default_hash)) {
              window.location.hash = hash;
            }
          };

      // allow usage of data-tab-content attribute instead of href
      if (S(this).data(this.data_attr('tab-content'))) {
        target_hash = '#' + S(this).data(this.data_attr('tab-content')).split('#')[1];
        target = S(target_hash);
      }

      if (settings.deep_linking) {

        if (settings.scroll_to_content) {

          // retain current hash to scroll to content
          go_to_hash(location_hash || target_hash);

          if (location_hash == undefined || location_hash == target_hash) {
            tab.parent()[0].scrollIntoView();
          } else {
            S(target_hash)[0].scrollIntoView();
          }
        } else {
          // prefix the hashes so that the browser doesn't scroll down
          if (location_hash != undefined) {
            go_to_hash('fndtn-' + location_hash.replace('#', ''));
          } else {
            go_to_hash('fndtn-' + target_hash.replace('#', ''));
          }
        }
      }

      // WARNING: The activation and deactivation of the tab content must
      // occur after the deep linking in order to properly refresh the browser
      // window (notably in Chrome).
      // Clean up multiple attr instances to done once
      tab.addClass(settings.active_class).triggerHandler('opened');
      tab_link.attr({'aria-selected' : 'true',  tabindex : 0});
      siblings.removeClass(settings.active_class)
      siblings.find('a').attr({'aria-selected' : 'false',  tabindex : -1});
      target.siblings().removeClass(settings.active_class).attr({'aria-hidden' : 'true',  tabindex : -1});
      target.addClass(settings.active_class).attr('aria-hidden', 'false').removeAttr('tabindex');
      settings.callback(tab);
      target.triggerHandler('toggled', [tab]);
      tabs.triggerHandler('toggled', [target]);

      tab_link.off('keydown').on('keydown', interpret_keyup_action );
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.abide = {
    name : 'abide',

    version : '5.5.1',

    settings : {
      live_validate : true,
      validate_on_blur : true,
      focus_on_invalid : true,
      error_labels : true, // labels with a for="inputId" will recieve an `error` class
      error_class : 'error',
      timeout : 1000,
      patterns : {
        alpha : /^[a-zA-Z]+$/,
        alpha_numeric : /^[a-zA-Z0-9]+$/,
        integer : /^[-+]?\d+$/,
        number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

        // amex, visa, diners
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,

        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

        url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
        // abc.de
        domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

        datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD
        date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
        dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
        // MM/DD/YYYY
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
        // DD/MM/YYYY
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

        // #FFF or #FFFFFF
        color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
      },
      validators : {
        equalTo : function (el, required, parent) {
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
              to    = el.value,
              valid = (from === to);

          return valid;
        }
      }
    },

    timer : null,

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          form = self.S(scope).attr('novalidate', 'novalidate'),
          settings = form.data(this.attr_name(true) + '-init') || {};

      this.invalid_attr = this.add_namespace('data-invalid');

      form
        .off('.abide')
        .on('submit.fndtn.abide validate.fndtn.abide', function (e) {
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));
          return self.validate(self.S(this).find('input, textarea, select').get(), e, is_ajax);
        })
        .on('reset', function () {
          return self.reset($(this));
        })
        .find('input, textarea, select')
          .off('.abide')
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {
            if (settings.validate_on_blur === true) {
              self.validate([this], e);
            }
          })
          .on('keydown.fndtn.abide', function (e) {
            if (settings.live_validate === true && e.which != 9) {
              clearTimeout(self.timer);
              self.timer = setTimeout(function () {
                self.validate([this], e);
              }.bind(this), settings.timeout);
            }
          });
    },

    reset : function (form) {
      form.removeAttr(this.invalid_attr);
      $(this.invalid_attr, form).removeAttr(this.invalid_attr);
      $('.' + this.settings.error_class, form).not('small').removeClass(this.settings.error_class);
    },

    validate : function (els, e, is_ajax) {
      var validations = this.parse_patterns(els),
          validation_count = validations.length,
          form = this.S(els[0]).closest('form'),
          submit_event = /submit/.test(e.type);

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < validation_count; i++) {
        if (!validations[i] && (submit_event || is_ajax)) {
          if (this.settings.focus_on_invalid) {
            els[i].focus();
          }
          form.trigger('invalid').trigger('invalid.fndtn.abide');
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');
          return false;
        }
      }

      if (submit_event || is_ajax) {
        form.trigger('valid').trigger('valid.fndtn.abide');
      }

      form.removeAttr(this.invalid_attr);

      if (is_ajax) {
        return false;
      }

      return true;
    },

    parse_patterns : function (els) {
      var i = els.length,
          el_patterns = [];

      while (i--) {
        el_patterns.push(this.pattern(els[i]));
      }

      return this.check_validation_and_apply_styles(el_patterns);
    },

    pattern : function (el) {
      var type = el.getAttribute('type'),
          required = typeof el.getAttribute('required') === 'string';

      var pattern = el.getAttribute('pattern') || '';

      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {
        return [el, this.settings.patterns[pattern], required];
      } else if (pattern.length > 0) {
        return [el, new RegExp(pattern), required];
      }

      if (this.settings.patterns.hasOwnProperty(type)) {
        return [el, this.settings.patterns[type], required];
      }

      pattern = /.*/;

      return [el, pattern, required];
    },

    // TODO: Break this up into smaller methods, getting hard to read.
    check_validation_and_apply_styles : function (el_patterns) {
      var i = el_patterns.length,
          validations = [],
          form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),
          settings = form.data(this.attr_name(true) + '-init') || {};
      while (i--) {
        var el = el_patterns[i][0],
            required = el_patterns[i][2],
            value = el.value.trim(),
            direct_parent = this.S(el).parent(),
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),
            is_radio = el.type === 'radio',
            is_checkbox = el.type === 'checkbox',
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),
            valid_length = (required) ? (el.value.length > 0) : true,
            el_validations = [];

        var parent, valid;

        // support old way to do equalTo validations
        if (el.getAttribute(this.add_namespace('data-equalto'))) { validator = 'equalTo' }

        if (!direct_parent.is('label')) {
          parent = direct_parent;
        } else {
          parent = direct_parent.parent();
        }

        if (validator) {
          valid = this.settings.validators[validator].apply(this, [el, required, parent]);
          el_validations.push(valid);
        }

        if (is_radio && required) {
          el_validations.push(this.valid_radio(el, required));
        } else if (is_checkbox && required) {
          el_validations.push(this.valid_checkbox(el, required));
        } else {

          if (el_patterns[i][1].test(value) && valid_length ||
            !required && el.value.length < 1 || $(el).attr('disabled')) {
            el_validations.push(true);
          } else {
            el_validations.push(false);
          }

          el_validations = [el_validations.every(function (valid) {return valid;})];

          if (el_validations[0]) {
            this.S(el).removeAttr(this.invalid_attr);
            el.setAttribute('aria-invalid', 'false');
            el.removeAttribute('aria-describedby');
            parent.removeClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.removeClass(this.settings.error_class).removeAttr('role');
            }
            $(el).triggerHandler('valid');
          } else {
            this.S(el).attr(this.invalid_attr, '');
            el.setAttribute('aria-invalid', 'true');

            // Try to find the error associated with the input
            var errorElem = parent.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class);
            var errorID = errorElem.length > 0 ? errorElem[0].id : '';
            if (errorID.length > 0) {
              el.setAttribute('aria-describedby', errorID);
            }

            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);
            parent.addClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.addClass(this.settings.error_class).attr('role', 'alert');
            }
            $(el).triggerHandler('invalid');
          }
        }
        validations.push(el_validations[0]);
      }
      validations = [validations.every(function (valid) {return valid;})];
      return validations;
    },

    valid_checkbox : function (el, required) {
      var el = this.S(el),
          valid = (el.is(':checked') || !required || el.get(0).getAttribute('disabled'));

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
      }

      return valid;
    },

    valid_radio : function (el, required) {
      var name = el.getAttribute('name'),
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='" + name + "']"),
          count = group.length,
          valid = false,
          disabled = false;

      // Has to count up to make sure the focus gets applied to the top error
        for (var i=0; i < count; i++) {
            if( group[i].getAttribute('disabled') ){
                disabled=true;
                valid=true;
            } else {
                if (group[i].checked){
                    valid = true;
                } else {
                    if( disabled ){
                        valid = false;
                    }
                }
            }
        }

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < count; i++) {
        if (valid) {
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
        } else {
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
        }
      }

      return valid;
    },

    valid_equal : function (el, required, parent) {
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
          to    = el.value,
          valid = (from === to);

      if (valid) {
        this.S(el).removeAttr(this.invalid_attr);
        parent.removeClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.removeClass(this.settings.error_class);
        }
      } else {
        this.S(el).attr(this.invalid_attr, '');
        parent.addClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.addClass(this.settings.error_class);
        }
      }

      return valid;
    },

    valid_oneof : function (el, required, parent, doNotValidateOthers) {
      var el = this.S(el),
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),
        valid = others.filter(':checked').length > 0;

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
      }

      if (!doNotValidateOthers) {
        var _this = this;
        others.each(function () {
          _this.valid_oneof.call(_this, this, null, null, true);
        });
      }

      return valid;
    }
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tooltip = {
    name : 'tooltip',

    version : '5.5.1',

    settings : {
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      append_to : 'body',
      touch_close_text : 'Tap To Close',
      disable_for_touch : false,
      hover_delay : 200,
      show_on : 'all',
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';
      }
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'random_str');
      this.bindings(method, options);
    },

    should_show : function (target, tip) {
      var settings = $.extend({}, this.settings, this.data_options(target));

      if (settings.show_on === 'all') {
        return true;
      } else if (this.small() && settings.show_on === 'small') {
        return true;
      } else if (this.medium() && settings.show_on === 'medium') {
        return true;
      } else if (this.large() && settings.show_on === 'large') {
        return true;
      }
      return false;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    events : function (instance) {
      var self = this,
          S = self.S;

      self.create(this.S(instance));

      $(this.scope)
        .off('.tooltip')
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
          '[' + this.attr_name() + ']', function (e) {
          var $this = S(this),
              settings = $.extend({}, self.settings, self.data_options($this)),
              is_touch = false;

          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {
            return false;
          }

          if (/mouse/i.test(e.type) && self.ie_touch(e)) {
            return false;
          }

          if ($this.hasClass('open')) {
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
            }
            self.hide($this);
          } else {
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              return;
            } else if (!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
              S(settings.tooltip_class + '.open').hide();
              is_touch = true;
            }

            if (/enter|over/i.test(e.type)) {
              this.timer = setTimeout(function () {
                var tip = self.showTip($this);
              }.bind(this), self.settings.hover_delay);
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
              clearTimeout(this.timer);
              self.hide($this);
            } else {
              self.showTip($this);
            }
          }
        })
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {
            return false;
          }

          if ($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {
            return;
          } else if ($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {
            self.convert_to_touch($(this));
          } else {
            self.hide($(this));
          }
        })
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {
          self.hide(S(this));
        });
    },

    ie_touch : function (e) {
      // How do I distinguish between IE11 and Windows Phone 8?????
      return false;
    },

    showTip : function ($target) {
      var $tip = this.getTip($target);
      if (this.should_show($target, $tip)) {
        return this.show($target);
      }
      return;
    },

    getTip : function ($target) {
      var selector = this.selector($target),
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip = null;

      if (selector) {
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);
      }

      return (typeof tip === 'object') ? tip : false;
    },

    selector : function ($target) {
      var id = $target.attr('id'),
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');

      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
        dataSelector = this.random_str(6);
        $target
          .attr('data-selector', dataSelector)
          .attr('aria-describedby', dataSelector);
      }

      return (id && id.length > 0) ? id : dataSelector;
    },

    create : function ($target) {
      var self = this,
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip_template = this.settings.tip_template;

      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {
        tip_template = window[settings.tip_template];
      }

      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),
          classes = this.inheritable_classes($target);

      $tip.addClass(classes).appendTo(settings.append_to);

      if (Modernizr.touch) {
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function (e) {
          self.hide($target);
        });
      }

      $target.removeAttr('title').attr('title', '');
    },

    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, column, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerHeight();

      if (this.small()) {
        tip.css({'width' : '100%'});
      } else {
        tip.css({'width' : (width) ? width : 'auto'});
      }

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : (top) ? top : 'auto',
          'bottom' : (bottom) ? bottom : 'auto',
          'left' : (left) ? left : 'auto',
          'right' : (right) ? right : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);

      if (this.small()) {
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());
        tip.addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        var left = target.offset().left;
        if (Foundation.rtl) {
          nub.addClass('rtl');
          left = target.offset().left + target.outerWidth() - tip.outerWidth();
        }
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);
        tip.removeClass('tip-override');
        if (classes && classes.indexOf('tip-top') > -1) {
          if (Foundation.rtl) {
            nub.addClass('rtl');
          }
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        } else if (classes && classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        }
      }

      tip.css('visibility', 'visible').hide();
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    inheritable_classes : function ($target) {
      var settings = $.extend({}, this.settings, this.data_options($target)),
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ') : '';

      return $.trim(filtered);
    },

    convert_to_touch : function ($target) {
      var self = this,
          $tip = self.getTip($target),
          settings = $.extend({}, self.settings, self.data_options($target));

      if ($tip.find('.tap-to-close').length === 0) {
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function (e) {
          self.hide($target);
        });
      }

      $target.data('tooltip-open-event-type', 'touch');
    },

    show : function ($target) {
      var $tip = this.getTip($target);

      if ($target.data('tooltip-open-event-type') == 'touch') {
        this.convert_to_touch($target);
      }

      this.reposition($target, $tip, $target.attr('class'));
      $target.addClass('open');
      $tip.fadeIn(150);
    },

    hide : function ($target) {
      var $tip = this.getTip($target);

      $tip.fadeOut(150, function () {
        $tip.find('.tap-to-close').remove();
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');
        $target.removeClass('open');
      });
    },

    off : function () {
      var self = this;
      this.S(this.scope).off('.fndtn.tooltip');
      this.S(this.settings.tooltip_class).each(function (i) {
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());
      }).remove();
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));

},{}],4:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],5:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}]},{},[1]);
