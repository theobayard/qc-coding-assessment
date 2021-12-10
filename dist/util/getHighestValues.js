"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Function to get the keys with the highest values in an object.
 * Runs in O(n) time.
 */
function getHighestValues(insideThis) {
    let highestKeys = [];
    let highestValue = -Infinity;
    for (const key in insideThis) {
        // Had to do some funky logic to be able to initialize highest
        // value to -Infinity because "string" > -Infinity is false
        if (!(insideThis[key] <= highestValue)) {
            highestValue = insideThis[key];
            highestKeys = [key];
        }
        else if (insideThis[key] === highestValue) {
            highestKeys.push(key);
        }
    }
    return highestKeys;
}
exports.default = getHighestValues;
