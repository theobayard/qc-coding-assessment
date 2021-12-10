#!/usr/bin/env node
import getMostCommonCookies from "./getMostCommonCookies";
import parseArgs from "./parseArgs"

/**
 * This program will return the most common cookie from a csv file of the form cookie,timestamp
 * on a given day.
 */
async function main() {
    // Get command line arguments
    const parsedArgs = parseArgs()

    const mostCommonCookies = 
        await getMostCommonCookies(parsedArgs.filePath,parsedArgs.date).catch((err)=>{throw(err)});

    // Print cookies
    for(let cookie of mostCommonCookies) {
        console.log(cookie)
    }
}

main()
