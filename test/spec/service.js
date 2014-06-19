/* global inject, should */

describe('angular-accounting', function(){
  var accounting;


  beforeEach(function(){
    module('bulkan.angular-accounting');
           
    inject(function(_accounting_) {
      accounting = _accounting_;
    });
  });


  it('should exist', function(){
    should.exist(accounting);
  });
});
