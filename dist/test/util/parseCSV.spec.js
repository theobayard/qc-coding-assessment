"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const parseCSV_1 = __importDefault(require("../../util/parseCSV"));
const emptyCSVPath = "./src/test/testInputs/empty.csv";
const justHeaderCSVPath = "./src/test/testInputs/justHeader.csv";
const simple1CSVPath = "./src/test/testInputs/simple1.csv";
describe("parseCSV", () => {
    it("Should return an empty object from an empty file", (done) => {
        (0, parseCSV_1.default)({}, emptyCSVPath).then((parsedCSV) => {
            (0, chai_1.expect)(parsedCSV).to.be.instanceOf(Array);
            (0, chai_1.expect)(parsedCSV.length).to.equal(0);
            done();
        }, done).catch(done);
    });
    it("Should pass when the header matches the rowDef", (done) => {
        const rowDef = {
            test1: (x) => x,
            test2: (x) => x
        };
        (0, parseCSV_1.default)(rowDef, justHeaderCSVPath).then((parsedCSV) => {
            done();
        }, done).catch(done);
    });
    it("Should fail when the header does not match the rowDef", (done) => {
        const rowDef = {
            test1: (x) => x,
            test3: (x) => x // Does not match
        };
        (0, parseCSV_1.default)(rowDef, justHeaderCSVPath).then((parsedCSV) => {
            done("Did not fail when rows did not match");
        }, (err) => { done(); }).catch(done);
    });
    it("Should apply transformations", (done) => {
        const rowDef = {
            number: Number,
            date: (str) => new Date(str),
        };
        (0, parseCSV_1.default)(rowDef, simple1CSVPath).then((parsedCSV) => {
            (0, chai_1.expect)(parsedCSV[0].number).to.be.a("number");
            (0, chai_1.expect)(parsedCSV[0].date).to.be.instanceOf(Date);
            done();
        }, done).catch(done);
    });
});
