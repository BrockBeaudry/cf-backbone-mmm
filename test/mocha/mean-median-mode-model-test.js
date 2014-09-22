"use strict";

var expect = require('chai').expect;
var Backbone =require('backbone');
var sinon = require('sinon');

var Model = require('../../app/js/models/mean-median-mode');

describe('MMM Model', function() {

  var model;

  before(function(done) {
    this.mock = sinon.mock(Backbone);
    model = new Model();

    done();
  });

  it('should be a backbone model', function(done) {
    expect(model).to.be.an.instanceof(Backbone.Model);
    done();
  });

  it('should have a calculate method', function(done) {
    expect(model.calculate).to.be.a('function');
    done();
  });

  describe('calculate()', function() {
    it('should calculate the mean, median, and mode for an array of numbers', function(done) {
      model.set('numbers', [1, 2, 3, 2]);
      model.calculate();

      expect(model.get('mean')).to.be.eql(2);
      expect(model.get('median')).to.be.eql(2);
      expect(model.get('mode')).to.be.eql(2);

      done();
  });
  });
});