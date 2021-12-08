import { assert, expect } from "chai"
import parseCSV from "../util/parseCSV"

const emptyCSVPath = "./src/test/testInputs/empty.csv"

describe("parseCSV",()=>{
    it("Should return an empty object from an empty file", (done)=>{
        parseCSV({},emptyCSVPath).then((parsedCSV)=>{
            console.log(`The Boy:${parsedCSV==[["test"]]}`)
            // Since [['']]!==[['']] in js this has to get weird
            expect(parsedCSV).to.be.instanceOf(Array);
            expect(parsedCSV.length).to.equal(1)
            expect(parsedCSV[0].length).to.equal(1);
            expect(parsedCSV[0][0]).to.equal("");
            done()
        },done).catch(done)
    })
})

