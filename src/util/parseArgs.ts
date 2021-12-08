import { parse } from 'ts-command-line-args';

/**
 * Basic string -> date function
 */
function parseDate(value?: string) {
    return value ? new Date(Date.parse(value)) : undefined;
}

interface MostActiveCookieArguments {
    date: Date
    filePath: string
}

/**
 * Returns the arguments passed to the program after being
 * converted into their intended types. Also verifies that
 * the correct arguments were passed
 */
const parsedArgs = parse<MostActiveCookieArguments>({
    date:{
        type:parseDate, 
        alias:'d'
    },
    filePath:{
        type:String,
        defaultOption:true
    }
})


export default parsedArgs