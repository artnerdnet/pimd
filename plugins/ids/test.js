const {Document} = require('../..');
const plugin = require('.');
var expect = require('chai').expect;


describe('Info strings', () => {
  it('should add an id to a headline', () => {
    const input = unindent`
      # Test <?: #my-id ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('h1 #my-id')
  })

  it('should add multiple ids to a paragraph', () => {
    const input = unindent`
      Test <?: #my-id #my-second-id ?>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('p#my-id#my-second-class')
  })

  it('should add an id to a code block', () => {
    const input = unindent`
      ~~~ html #my-id
      <p>Lorem</p>
      ~~~
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(html)
      .to.have.selector('div#my-id')
  })
})
