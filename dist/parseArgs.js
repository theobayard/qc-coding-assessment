"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_command_line_args_1 = require("ts-command-line-args");
/**
 * Basic string -> date function
 */
function parseDate(value) {
    return value ? new Date(Date.parse(value)) : undefined;
}
/**
 * Returns the arguments passed to the program after being
 * converted into their intended types. Also verifies that
 * the correct arguments were passed
 */
const parsedArgs = (0, ts_command_line_args_1.parse)({
    date: {
        type: parseDate,
        alias: 'd'
    },
    filePath: {
        type: String,
        defaultOption: true
    }
});
exports.default = parsedArgs;
