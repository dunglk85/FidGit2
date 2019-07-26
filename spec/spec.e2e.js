describe('Protractor Demo App', function () {
  var boxes = element.all(by.tagName('box'));
  var cards = element(by.tagName('md-card'));
  var learnmoreButton = element(by.css('md-card-actions .md-button'));
  var cancelButton = element(by.css('md-dialog-actions .md-button'));
  var dialog = element(by.tagName('md-dialog'));


  beforeEach(function () {
    browser.get('http://localhost:3000/');
  });

  it('should have 2 boxes', function () {
    expect(boxes.count()).toEqual(2);
  });

  // color hex code #5fcce0 equal rgba(95, 204, 224, 1)
  it('should have background-color to rgba(95, 204, 224, 1)', function () {
    cards.click();
    expect(cards.getCssValue('background-color')).toEqual('rgba(95, 204, 224, 1)');
  });

  it('should show up modal', function () {
    expect(dialog.isPresent()).toBe(false)
    learnmoreButton.click();
    expect(dialog.isPresent()).toBe(true)
  });

  it('should close modal', function () {
    learnmoreButton.click();
    expect(dialog.isPresent()).toBe(true)
    cancelButton.click();
    expect(dialog.isPresent()).toBe(false)
  });
  
});