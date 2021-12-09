#!/usr/bin/env node
import parseArgs from "./parseArgs"
import parseCookieCSV from "./parseCookieCSV";
import { isolateUTCDay } from "./util/filterFuncs";

async function main() {
    // Get command line arguments
    const parsedArgs = parseArgs()

    // parse cookie file
    const cookieData = await parseCookieCSV(parsedArgs.filePath)

    // isolate day
    const dataFromDay = isolateUTCDay(parsedArgs.date,cookieData)

    // find most common cookie

    console.log(process.argv);
}

main()

// Support require style import for command line file
module.exports = main;