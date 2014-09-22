'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var StatisticsView = Backbone.View.extend({

    initialize: function() {
        this.model.on('change', this.render, this);

        this.render();
    },

    render: function() {
        var template = require('../templates/mean-median-mode.hbs');
        var data = this.model.attributes;

        this.$el.html(template(data));

        return this;
    },

    events: {
        'submit form': 'submit'
    },

    submit: function(e) {
        e.preventDefault();

        var input = this.$el.find('#data-set').val();
        var dataSet = input.split(' ').map(Number);

        console.log('input: ' + input);
        console.log('dataSet: ' + dataSet);

        this.model.set({ numbers: dataSet });
        this.model.calculate();
    },
});

module.exports = StatisticsView;
