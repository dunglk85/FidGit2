describe('box component', function () {
  var $componentController;
  var $compile;
  var $rootScope;

  beforeEach(module('app'));

  beforeEach(inject(function (_$componentController_,_$compile_, _$rootScope_) {
    $componentController = _$componentController_;
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($templateCache) {
    var componentTemplate = null;
    var req = new XMLHttpRequest();
    req.onload = function() {
      componentTemplate = this.responseText;
    };
    req.open("get", "./src/box.tpl.html", false);
    req.send();
    $templateCache.put("./src/box.tpl.html", componentTemplate);
  }));

  beforeEach(inject(function($templateCache) {
    var modalTemplate = null;
    var req = new XMLHttpRequest();
    req.onload = function() {
      componentTemplate = this.responseText;
    };
    req.open("get", "./src/modal.tpl.html", false);
    req.send();
    $templateCache.put("./src/modal.tpl.html", modalTemplate);
  }));

  it('should get content and header', function () {
    // Pass bindings that are needed for the test
    var bindings = {
      content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."], header: 'Quick Tuornament'
    };

    var ctrl = $componentController('box', { $mdDialog: null }, bindings);
    $rootScope.content = ctrl.content;
    $rootScope.header = ctrl.header
    var html = `<box header="{{header}}" content="content"></box>`;
    var element = $compile(html)($rootScope);

    // fire all the watches, so the scope expressions will be evaluated
    $rootScope.$digest();

    expect(ctrl.header).toEqual(bindings.header);
    expect(ctrl.content).toEqual(bindings.content);
    expect(element.html()).toContain(ctrl.content[0].substring(0,100));
    expect(element.html()).toContain(ctrl.header);
  });



});