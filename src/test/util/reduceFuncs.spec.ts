import { expect } from "chai"
import { count } from "../../util/reduceFuncs"

describe("reduceFuncs",()=>{
    describe("count",()=>{

        it("Should fail if I try and count items of the wrong type",()=>{
            const thingsToCount = [{bad:{bathThing:1}}]
            expect(function(){count("bad",thingsToCount)}).to.throw("Attempted to count invalid type")
        })
        it("Should work on an empty object",()=>{
            const thingsToCount:{key:number}[] = []
            expect(Object.entries(count("key",thingsToCount)).length).to.equal(0)
        })
        it("Should count strings",()=>{
            let thingsToCount = []
            const addUpTo = 100;

            // Add numToAdd items of each string to thingsToCount
            let stringKey = "1"
            for(let numToAdd = 0; numToAdd < addUpTo; numToAdd++) {
                for(let i = 0; i < numToAdd; i++) {
                    thingsToCount.push({key:stringKey})
                }
                stringKey += numToAdd
            }

            const countedItems = count("key",thingsToCount)

            // Verify that count counted numToAdd items for every string
            stringKey = "10"
            for(let numAdded = 1; numAdded < addUpTo; numAdded++) {
                expect(countedItems[stringKey]).to.equal(numAdded)
                stringKey += numAdded
            }
        })
        it("Should count numbers",()=>{
            let thingsToCount = []
            const addUpTo = 100;

            // Add an object with key numToAdd numToAdd+1 times to the list
            for(let numToAdd = 0; numToAdd < addUpTo; numToAdd++) {
                for(let i = 0; i <= numToAdd; i++) {
                    thingsToCount.push({key:numToAdd})
                }
            }

            const countedItems = count("key",thingsToCount)

            // Verify that count correctly counted numToAdd+1 items for every number
            for(let numAdded = 0; numAdded < addUpTo; numAdded++) {
                expect(countedItems[numAdded]).to.equal(numAdded+1)
            }
        })
    })
})