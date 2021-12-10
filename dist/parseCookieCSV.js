"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseCSV_1 = __importDefault(require("./util/parseCSV"));
const cookieRowDef = {
    cookie: String,
    timestamp: (str) => new Date(str)
};
/**
 * A function for parsing csv's of the format: cookie,timestamp
 * @param csvPath the path to the cookie csv file
 */
const parseCookieCSV = (csvPath) => (0, parseCSV_1.default)(cookieRowDef, csvPath);
exports.default = parseCookieCSV;
