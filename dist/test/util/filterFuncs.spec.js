"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const filterFuncs_1 = require("../../util/filterFuncs");
describe("filterFuncs", () => {
    let isMyBirthday;
    const myBirthday = new Date("2000-05-07T00:00:00");
    isMyBirthday = (0, filterFuncs_1.isSomeUTCDay)(myBirthday);
    describe("isSomeUTCDay", () => {
        it("Should return false when two dates are not on the same day", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-08"))).to.be.false;
        });
        it("Should return false when two dates are not on the same month", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-06-07"))).to.be.false;
        });
        it("Should return false when two dates are not on the same year", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2001-05-07"))).to.be.false;
        });
        it("Should return true when two dates are on the same day but different hours", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-07T01:00:00"))).to.be.true;
        });
        it("Should return true when two dates are on the same day but different minutes", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-07T00:01:00"))).to.be.true;
        });
        it("Should return true when two dates are on the same day but different seconds", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-07T00:00:01"))).to.be.true;
        });
        it("Should account for different timezones", () => {
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-08T00:00:00+01:00"))).to.be.true;
            (0, chai_1.expect)(isMyBirthday(new Date("2000-05-06T23:00:00-01:00"))).to.be.true;
        });
    });
    describe("isolateUTCDay", () => {
        it("Should not error when given an empty array", () => {
            (0, filterFuncs_1.isolateUTCDay)(new Date(), []);
        });
        it("Should remove all items with a timestamp not on the specified day and keep the rest", () => {
            // Create an entry for every hour in 2000
            let everyHourIn2000 = [];
            const firstSecondIn2000 = new Date("2000-01-01T00:00:00").getTime();
            const numMillisecondsInAYear = 1000 * 60 * 60 * 24 * 365;
            const numMillisecondsInAHour = 1000 * 60 * 60;
            for (let time = firstSecondIn2000; time < firstSecondIn2000 + numMillisecondsInAYear; time += numMillisecondsInAHour) {
                everyHourIn2000.push({ timestamp: new Date(time) });
            }
            const everyHourOnMyBirthday = (0, filterFuncs_1.isolateUTCDay)(myBirthday, everyHourIn2000);
            // Make sure dates on my birthday were kept
            (0, chai_1.expect)(everyHourOnMyBirthday.length).to.equal(24);
            // Make sure dates not on my birthday were removed
            for (const hour of everyHourOnMyBirthday) {
                (0, chai_1.expect)(isMyBirthday(hour.timestamp)).to.be.true;
            }
        });
    });
});
