import { expect } from "chai"
import getHighestValues from "../../util/getHighestValues"

describe("getHighestValue",()=>{
    it("Should not fail on an empty object",()=>{
        expect(getHighestValues({}).length).to.equal(0)
    })
    it("Should work with only one element",()=>{
        expect(getHighestValues({test:1})[0]).to.equal("test")
    })
    it("Should work with multiple elements of equal value",()=>{
        const numElementsToAdd = 1000
        const testingObject:any = {
            low:1,
        }
        // Keep adding elements and checking to make sure the correct number of elements are returned
        for(let numEqualElements = 1; numEqualElements < numElementsToAdd; numEqualElements++) {
            testingObject[numEqualElements] = 2
            const highestValues = getHighestValues(testingObject)
            expect(highestValues.length).to.equal(numEqualElements)
        }
    })
    it("Should only return the highest value",()=>{
        // Function that guarantees it found find and only find as the key
        // with the highest value
        const findsThisHighest = (find:string,inThis:any) => {
            const highestValues = getHighestValues(inThis)
            expect(highestValues[0]).to.equal(find)
            expect(highestValues.length).to.equal(1)
        }

        let testingObject:any = {
            test1:1,
            test2:2
        }
        findsThisHighest("test2",testingObject)

        testingObject = {
            test1:2,
            test2:1,
            test3:-5,
        }
        findsThisHighest("test1",testingObject)
        testingObject = {
            test1:2,
            test2:1,
            test3:-5,
            test4:2,
            test5:3
        }
        findsThisHighest("test5",testingObject)
        testingObject = {
            test1:2,
            test2:2,
            test3:10,
            test4:2,
            test5:3
        }
        findsThisHighest("test3",testingObject)
    })
})