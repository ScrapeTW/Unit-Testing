const assert = require("assert")

describe("file to be tested", () => {
    context("function to be tested", () => {
        before(() => {
            console.log("----before")
        })

        after(() => {
            console.log("----after")
        })

        beforeEach(() => {
            console.log("----beforeEach")
        })

        afterEach(() => {
            console.log("----afterEach")
        })
        
        it("should do something", () => {
            assert.equal(1, 2)
        })

        it("should do something else", () => {
            assert.deepEqual({ name: "joe"}, { name: "steve"});
        })

        it("this is a pending test");
    })
})