describe('box component', function() {
  var $componentController;

  beforeEach(module('app'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should get content and header', function() {
    // Pass bindings that are needed for the test
    var bindings = {content: ["First", "Second", "Third"], header:'Header'};
    var ctrl = $componentController('box', {$mdDialog: null}, bindings);
    var header = ctrl.header;
    var firtParagraph = ctrl.content[0];
    var secondParagraph = ctrl.content[1];
    var thirdParagraph = ctrl.content[2];
    expect(header).toEqual("Header");
    expect(firtParagraph).toEqual("First");
    expect(secondParagraph).toEqual("Second");
    expect(thirdParagraph).toEqual("Third");
  });

});