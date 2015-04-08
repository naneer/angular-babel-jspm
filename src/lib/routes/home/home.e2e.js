describe('home', function() {
  it('has ui-view of index', function() {
    browser.get('/');
    expect(element(by.css('ui-view')).getText()).toEqual('index');
  });
});