import { expect } from "chai"
import getMostCommonCookies from "../getMostCommonCookies"

describe("getMostCommonCookies",()=>{
    it("Should work on a file with no data",(done)=>{
        getMostCommonCookies("src/test/testInputs/cookie1.csv",new Date()).then((cookies)=>{
            expect(cookies.length).to.equal(0)
            done()
        },done).catch(done)
    })
    it("Should work on the example input with date 2018-12-09",(done)=>{
        const givenPath = "src/test/testInputs/given.csv"
        getMostCommonCookies(givenPath,new Date("2018-12-09")).then((cookies)=>{
            expect(cookies.length).to.equal(1)
            expect(cookies[0]).to.equal("AtY0laUfhglK3lC7")
            done()
        },done).catch(done)
    })
    it("Should work on the example input with date 2018-12-08",(done)=>{
        const givenPath = "src/test/testInputs/given.csv"
        getMostCommonCookies(givenPath,new Date("2018-12-08")).then((cookies)=>{
            expect(cookies.length).to.equal(3)
            expect(cookies.find((x)=>x=="SAZuXPGUrfbcn5UA")?1:0).to.equal(1)
            expect(cookies.find((x)=>x=="4sMM2LxV07bPJzwf")?1:0).to.equal(1)
            expect(cookies.find((x)=>x=="fbcn5UAVanZf6UtG")?1:0).to.equal(1)
            done()
        },done).catch(done)
    })
})