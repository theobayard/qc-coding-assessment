import { MostActiveCookieArguments } from "./parseArgs";
import parseCookieCSV from "./parseCookieCSV";
import { isolateUTCDay } from "./util/filterFuncs";
import getHighestValues from "./util/getHighestValues";
import { count } from "./util/reduceFuncs";

/**
 * A function for finding the most common cookies
 * @param date optionally specify a day to restrict search to
 * @param filePath the path of the csv to be parsed
 * @returns A list of the most common cookies
 */
export default async function getMostCommonCookies(filePath:string,date?:Date):Promise<string[]> {
    const cookieData = await parseCookieCSV(filePath).catch((err:Error)=>{
        throw(new Error("The following error ocurred while parsing the cookie csv: " + err.message))
    });

    const dataFromDay = date ? isolateUTCDay(date, cookieData) : cookieData;

    const countedCookies = count("cookie", dataFromDay);

    return getHighestValues(countedCookies);
}