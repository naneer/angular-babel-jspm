describe('home index', function() {
  it('has heading', function() {
    browser.get('/');
    expect(element(by.css('h1')).getText()).toEqual('first to 5');
  });
});