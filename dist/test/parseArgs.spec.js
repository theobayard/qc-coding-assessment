"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs_1 = require("../parseArgs");
const ts_command_line_args_1 = require("ts-command-line-args");
const chai_1 = require("chai");
describe("parseArgs", () => {
    let myParse;
    before(() => {
        myParse = (argv) => {
            return (0, ts_command_line_args_1.parse)(parseArgs_1.parseConfig, { argv });
        };
    });
    it("Should return a correct date and file path", () => {
        const path = 'cookie_log.csv';
        const dateString = '2018-12-09';
        const args = myParse(['', '', path, '-d', '2018-12-09']);
        (0, chai_1.expect)(args.filePath).to.equal(path);
        (0, chai_1.expect)(args.date.getTime()).to.equal(new Date(dateString).getTime());
    });
});
