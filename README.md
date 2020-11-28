# Unit-Testing
Unit Testing courses on Udemy by Murtez Alrohani


## Architecture de base

Le [script de test](./test/test.js)

```
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
            asser.deepEqual({ name: "joe" }, { name: "steve" })
        })

        it("this is a pending test");
    })

    context("An other function", () => {
        it("an other pending test");
    })
})
```

#### Explication

- La fonction __before()__ permet d'effectuer une action au démarrage du context
- La fonction __after()__ permet d'effectuer une action en sortie de context
- La fonction __beforeEach()__ permet d'effectuer une action en début de test
- La fonction __afterEach()__ permet d'effectuer une action en sortie de test

#### Éxécution

```
name@computer: ~/$ mocha test/test.js
```