import { parseConfig, MostActiveCookieArguments } from "../parseArgs"
import { parse } from 'ts-command-line-args';
import { expect } from "chai";

describe("parseArgs",()=>{
    let parseTheseArgs: (argv: string[]) => MostActiveCookieArguments
    before(()=>{
        parseTheseArgs = (argv:string[])=>{
            return parse<MostActiveCookieArguments>(parseConfig,{argv})
        }
    })
    it("Should return a correct date and file path",()=>{
        const path = 'cookie_log.csv'
        const dateString = '2018-12-09'
        const args = parseTheseArgs([path,'-d',dateString])
        expect(args.filePath).to.equal(path)
        expect(args.date.getTime()).to.equal(new Date(dateString).getTime())
    })
    it("Should fail if it gets an unrecognized argument",()=>{
        const path = 'cookie_log.csv'
        const dateString = '2018-12-09'
        expect(function(){
            parseTheseArgs([path,'-d',dateString,'--fail'])
        }).to.throw("Unknown option: --fail")
    })
    it("Should fail if it gets malformed date",()=>{
        const path = 'cookie_log.csv'
        const dateString = 'bad'
        expect(function(){
            parseTheseArgs([path,'-d',dateString])
        }).to.throw("Invalid date argument given")
    })
    /**
     * I would like to add tests to make sure missing arguments
     * throw an error, but the library I am using halts the entire
     * program when that happens and tbh I'm not dealing with that
     * for a coding assessment.
     */
})