#!/usr/bin/env node
import getMostCommonCookies from "./getMostCommonCookies";
import parseArgs from "./parseArgs"

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
