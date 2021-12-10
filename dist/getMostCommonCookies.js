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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseCookieCSV_1 = __importDefault(require("./parseCookieCSV"));
const filterFuncs_1 = require("./util/filterFuncs");
const getHighestValues_1 = __importDefault(require("./util/getHighestValues"));
const reduceFuncs_1 = require("./util/reduceFuncs");
/**
 * A function for finding the most common cookies
 * @param date optionally specify a day to restrict search to
 * @param filePath the path of the csv to be parsed
 * @returns A list of the most common cookies
 */
function getMostCommonCookies(filePath, date) {
    return __awaiter(this, void 0, void 0, function* () {
        const cookieData = yield (0, parseCookieCSV_1.default)(filePath).catch((err) => {
            throw (new Error("The following error ocurred while parsing the cookie csv: " + err.message));
        });
        const dataFromDay = date ? (0, filterFuncs_1.isolateUTCDay)(date, cookieData) : cookieData;
        const countedCookies = (0, reduceFuncs_1.count)("cookie", dataFromDay);
        return (0, getHighestValues_1.default)(countedCookies);
    });
}
exports.default = getMostCommonCookies;
