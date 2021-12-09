import { parse } from 'ts-command-line-args';

/**
 * Basic string -> date function
 */
function parseDate(value: string) {
    const date = new Date(Date.parse(value));

    // Verify date is valid
    if (isNaN(date.getTime()))
        throw("Invalid date argument given")
    
    return date;
}

export interface MostActiveCookieArguments {
    date: Date
    filePath: string
}

export const parseConfig = {
    date: {
        type: parseDate,
        alias: 'd'
    },
    filePath: {
        type: String,
        defaultOption: true
    }
};
/**
 * Returns the arguments passed to the program after being
 * converted into their intended types. Also verifies that
 * the correct arguments were passed
 */
const parseArgs = () =>parse<MostActiveCookieArguments>(parseConfig)

export default parseArgs