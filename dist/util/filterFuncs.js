"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isolateUTCDay = exports.isSomeUTCDay = void 0;
/**
 * A function that creates a function that returns true if
 * thisDay is on the same UTC day as someDay
 */
const isSomeUTCDay = (someDay) => (thisDay) => {
    return someDay.getUTCFullYear() === thisDay.getUTCFullYear() &&
        someDay.getUTCMonth() === thisDay.getUTCMonth() &&
        someDay.getUTCDate() === thisDay.getUTCDate();
};
exports.isSomeUTCDay = isSomeUTCDay;
/**
 * Filter data to specific utc day
 * @param day day to isolate to. Will use UTC regardless of this timezone
 * @param data data to filter
 * @returns data items with timestamp on day
 */
const isolateUTCDay = (day, data) => {
    const isThisUTCDay = (0, exports.isSomeUTCDay)(day);
    return data.filter((d) => isThisUTCDay(d.timestamp));
};
exports.isolateUTCDay = isolateUTCDay;
