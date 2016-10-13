describe('angularjs homepage todo list', function() {
  // var EC = protractor.ExpectedConditions;

  it('should try to login', function() {
    browser.get('http://scnext.intellifield.no');

    element(by.css('input[name="username"]')).sendKeys('gistia');
    element(by.css('input[name="password"]')).sendKeys('DYUBjzfX');
    element(by.css('input[type="submit"]')).click();

    // browser.wait(EC.presenceOf(e), 10000);
  });
});
