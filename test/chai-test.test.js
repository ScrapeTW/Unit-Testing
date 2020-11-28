const chai = require("chai")
const expect = chai.expect;

describe("chai test", () => {
    it("should do something", () => {
        expect(1).to.equal(1);
    })

    it("should do something other", () => {
        expect({ name: "joe" }).to.deep.equal({ name: "joe" });
        expect({ name: "joe" }).to.have.property("name").to.have.equal("joe");
        expect({}).to.be.a("object");
        expect('foo').to.be.a("string").with.lengthOf(3);
        expect([1, 2, 3].length).to.equal(3);
        expect(null).to.be.null;
        expect(5 > 0).to.be.true;
        expect(undefined).to.not.exist;
        expect(1).to.exist;
    })
})  