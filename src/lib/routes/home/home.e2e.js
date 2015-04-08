describe('home', function() {
  it('has ui-view of index', function() {
    browser.get('/');
    expect(element(by.css('div[ui-view="index"]')).toBeDefined());
  });
});