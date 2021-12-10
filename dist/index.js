#!/usr/bin/env node
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
const getMostCommonCookies_1 = __importDefault(require("./getMostCommonCookies"));
const parseArgs_1 = __importDefault(require("./parseArgs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Get command line arguments
        const parsedArgs = (0, parseArgs_1.default)();
        const mostCommonCookies = yield (0, getMostCommonCookies_1.default)(parsedArgs.filePath, parsedArgs.date).catch((err) => { throw (err); });
        // Print cookies
        for (let cookie of mostCommonCookies) {
            console.log(cookie);
        }
    });
}
main();
