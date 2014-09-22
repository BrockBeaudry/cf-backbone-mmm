'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var mathStats = require('../math-stats');

var Statistics = Backbone.Model.extend({

    defaults: {
        numbers: [0],
        mean: 0,
        median: 0,
        mode: 0,
    },

    calculate: function() {
        var data = this.get('numbers');

        this.set({ mean: mathStats.mean(data) });
        this.set({ median: mathStats.median(data) });
        this.set({ mode: mathStats.mode(data) || 'false'});
    }
});

module.exports = Statistics;
