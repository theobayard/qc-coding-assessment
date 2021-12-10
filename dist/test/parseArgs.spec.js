"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs_1 = require("../parseArgs");
const ts_command_line_args_1 = require("ts-command-line-args");
const chai_1 = require("chai");
describe("parseArgs", () => {
    let parseTheseArgs;
    before(() => {
        parseTheseArgs = (argv) => {
            return (0, ts_command_line_args_1.parse)(parseArgs_1.parseConfig, { argv });
        };
    });
    it("Should return a correct date and file path", () => {
        const path = 'cookie_log.csv';
        const dateString = '2018-12-09';
        const args = parseTheseArgs([path, '-d', dateString]);
        (0, chai_1.expect)(args.filePath).to.equal(path);
        (0, chai_1.expect)(args.date.getTime()).to.equal(new Date(dateString).getTime());
    });
    it("Should fail if it gets an unrecognized argument", () => {
        const path = 'cookie_log.csv';
        const dateString = '2018-12-09';
        (0, chai_1.expect)(function () {
            parseTheseArgs([path, '-d', dateString, '--fail']);
        }).to.throw("Unknown option: --fail");
    });
    it("Should fail if it gets malformed date", () => {
        const path = 'cookie_log.csv';
        const dateString = 'bad';
        (0, chai_1.expect)(function () {
            parseTheseArgs([path, '-d', dateString]);
        }).to.throw("Invalid date argument given");
    });
    /**
     * I would like to add tests to make sure missing arguments
     * throw an error, but the library I am using halts the entire
     * program when that happens and tbh I'm not dealing with that
     * for a coding assessment.
     */
});
