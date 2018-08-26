module.exports = function(config) {
  config.addInfoStringParser(/\?(title)/, function(match, string) {
    let docTitle = document.title;
    this.docTitle = string;
  })
}
