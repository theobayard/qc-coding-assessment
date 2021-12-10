"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const parseCookieCSV_1 = __importDefault(require("../parseCookieCSV"));
const testInputs_1 = require("./testInputs");
describe("parseCookieCSV", () => {
    it("Should correctly convert a single row", (done) => {
        (0, parseCookieCSV_1.default)(testInputs_1.simpleCookie1CSVPath).then((parsedCSV) => {
            // Type check
            (0, chai_1.expect)(parsedCSV[0].cookie).to.be.a("string");
            (0, chai_1.expect)(parsedCSV[0].timestamp).to.be.instanceOf(Date);
            // Value check
            (0, chai_1.expect)(parsedCSV[0].cookie).to.equal("A");
            (0, chai_1.expect)(parsedCSV[0].timestamp.getTime()).to.equal(new Date("2018").getTime());
            done();
        }, done).catch(done);
    });
    it("Should correctly convert many rows", (done) => {
        (0, parseCookieCSV_1.default)(testInputs_1.givenCSVPath).then((parsedCSV) => {
            // Type check
            (0, chai_1.expect)(parsedCSV[0].cookie).to.be.a("string");
            (0, chai_1.expect)(parsedCSV[0].timestamp).to.be.instanceOf(Date);
            // Value check
            const lastItem = parsedCSV.pop();
            (0, chai_1.expect)(lastItem === null || lastItem === void 0 ? void 0 : lastItem.cookie).to.equal("4sMM2LxV07bPJzwf");
            (0, chai_1.expect)(lastItem === null || lastItem === void 0 ? void 0 : lastItem.timestamp.getTime()).to.equal(new Date("2018-12-07T23:30:00+00:00").getTime());
            done();
        }, done).catch(done);
    });
});
