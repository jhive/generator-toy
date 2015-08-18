var should = require('chai').should(),
    sinon = require('sinon'),
    <%= title %> = require('./<%= title %>');

describe('<%= title %>.js', function () {
  it("should be working", function(){
    <%= title %>.should.exist;
  });
});
