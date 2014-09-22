'use strict';

var $ = require('jquery');

var MeanMedianModeView = require('./views/mean-median-mode-view');
var MeanMedianMode = require('./models/mean-median-mode');

var meanMedianMode = new MeanMedianMode();
var meanMedianModeView = new MeanMedianModeView({ model: meanMedianMode });

$('div').append(meanMedianModeView.$el);