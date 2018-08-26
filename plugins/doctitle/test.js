const { Document } = require("../..")
const plugin = require(".")

describe("Info strings", () => {
  it("should add a string as document title", () => {
    const input = unindent`
      <?title Test>
    `
    const doc = new Document(input)
    doc.config.use(plugin)
    const html = doc.render()
    expect(document.title).to.equal('Test');
  })

})
