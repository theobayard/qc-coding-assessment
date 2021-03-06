"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = void 0;
const ts_command_line_args_1 = require("ts-command-line-args");
/**
 * Basic string -> date function
 */
function parseDate(value) {
    const date = new Date(Date.parse(value));
    // Verify date is valid
    if (isNaN(date.getTime()))
        throw ("Invalid date argument given");
    return date;
}
exports.parseConfig = {
    date: {
        type: parseDate,
        alias: 'd'
    },
    filePath: {
        type: String,
        defaultOption: true
    }
};
/**
 * Returns the arguments passed to the program after being
 * converted into their intended types. Also verifies that
 * the correct arguments were passed
 */
const parseArgs = () => (0, ts_command_line_args_1.parse)(exports.parseConfig);
exports.default = parseArgs;
