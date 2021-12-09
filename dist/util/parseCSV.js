"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const promises_1 = require("fs/promises");
/**
 * Creates a function that will parse csv files.
 * CSV files passed must contain a header that matches
 * the rows defined in RowDefinition. Inputting a csv that fails
 * to do this will cause an error.
 *
 * @returns an array of objects with a member variable for every column
 */
const parseCSV = (rowDef, csvFilePath) => __awaiter(void 0, void 0, void 0, function* () {
    const fileString = yield (0, promises_1.readFile)(csvFilePath, "utf-8");
    // convert to 2d array of form [row][column] 
    let fileArray = fileString.split("\n")
        .map((row) => row.split(","));
    // separate header
    const header = fileArray[0];
    fileArray = fileArray.slice(1);
    /**
     * Validate Header
     * A mismatch between csv columns and the parser definition
     * is an easy mistake that could cause non-obvious problems.
     * Better to catch it early.
     */
    const headerIterator = header.values();
    for (const key in rowDef) {
        (0, chai_1.assert)(key == headerIterator.next().value, "CSV header does not match rowDef");
    }
    // define transformation to row entries
    const rowMap = (row) => {
        const rowIterator = row.values();
        // apply transformation to each row entry
        let parsedRow = {};
        for (const key in rowDef) {
            parsedRow[key] = rowDef[key](rowIterator.next().value);
        }
        return parsedRow;
    };
    // apply transformation to every row
    return fileArray.map(rowMap);
});
exports.default = parseCSV;
