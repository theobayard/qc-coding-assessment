import { expect } from "chai";
import parseCookieCSV from "../parseCookieCSV";
import {
    simpleCookie1CSVPath,
    givenCSVPath
} from "./testInputs"

describe("parseCookieCSV",()=>{
    it("Should correctly convert a single row",(done)=>{
        parseCookieCSV(simpleCookie1CSVPath).then((parsedCSV)=>{
            // Type check
            expect(parsedCSV[0].cookie).to.be.a("string");
            expect(parsedCSV[0].timestamp).to.be.instanceOf(Date);

            // Value check
            expect(parsedCSV[0].cookie).to.equal("A")
            expect(parsedCSV[0].timestamp.getTime()).to.equal(new Date("2018").getTime())
            done()
        },done).catch(done)
    })
    it("Should correctly convert many rows",(done)=>{
        parseCookieCSV(givenCSVPath).then((parsedCSV)=>{
            // Type check
            expect(parsedCSV[0].cookie).to.be.a("string");
            expect(parsedCSV[0].timestamp).to.be.instanceOf(Date);

            // Value check
            const lastItem = parsedCSV.pop()
            expect(lastItem?.cookie).to.equal("4sMM2LxV07bPJzwf")
            expect(lastItem?.timestamp.getTime()).to.equal(new Date("2018-12-07T23:30:00+00:00").getTime())
            done()
        },done).catch(done)
    })
})