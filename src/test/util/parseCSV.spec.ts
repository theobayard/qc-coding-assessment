import { assert, expect } from "chai"
import parseCSV from "../../util/parseCSV"

import {
    emptyCSVPath,
    justHeaderCSVPath,
    simple1CSVPath,
    tenKRowsCSVPath,
    carriageReturnsCSVPath
} from "../testInputs"

describe("parseCSV",()=>{
    it("Should return an empty object from an empty file", (done)=>{
        parseCSV({},emptyCSVPath).then((parsedCSV)=>{
            expect(parsedCSV).to.be.instanceOf(Array);
            expect(parsedCSV.length).to.equal(0);
            done()
        },done).catch(done)
    })
    it("Should pass when the header matches the rowDef", (done)=>{
        const rowDef = {
            test1:(x:string)=>x,
            test2:(x:string)=>x
        }
        parseCSV(rowDef,justHeaderCSVPath).then((parsedCSV)=>{
            done()
        },done).catch(done)
    })
    it("Should fail when the header does not match the rowDef", (done)=>{
        const rowDef = {
            test1:(x:string)=>x,
            test3:(x:string)=>x // Does not match
        }
        parseCSV(rowDef,justHeaderCSVPath).then((parsedCSV)=>{
            done("Did not fail when rows did not match")
        },(err)=>{done()}).catch(done)
    })
    it("Should apply transformations", (done)=>{
        const rowDef = {
            number:Number,
            date:(str:string)=>new Date(str),
        }
        parseCSV(rowDef,simple1CSVPath).then((parsedCSV)=>{
            expect(parsedCSV[0].number).to.be.a("number");
            expect(parsedCSV[0].date).to.be.instanceOf(Date);
            done()
        },done).catch(done)
    })
    it("Should work if there are carriage returns", (done)=>{
        const rowDef = {
            number:Number
        }
        parseCSV(rowDef,carriageReturnsCSVPath).then((parsedCSV)=>{
            expect(parsedCSV[0].number).to.be.a("number");
            done()
        },done).catch(done)
    })
    it("Should work on files with lots of rows", (done)=>{
        const rowDef = {
            number:Number
        }
        parseCSV(rowDef,tenKRowsCSVPath).then((parsedCSV)=>{
            let expectedVal = 1;
            for(const row of parsedCSV){
                expect(row.number).to.equal(expectedVal);
                expectedVal++;
            }
            done()
        },done).catch(done)
    })
})

