#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseArgs_1 = __importDefault(require("./parseArgs"));
function main() {
    // parse file
    // isolate day
    // find most common cookie
    console.log(parseArgs_1.default);
}
main();
// Support require style import for command line file
module.exports = main;
