import parseCSV from "./util/parseCSV"

const cookieRowDef = {
    cookie:String,
    timestamp:(str:string)=>new Date(str)
}

/**
 * A function for parsing csv's of the format: cookie,timestamp
 * @param csvPath the path to the cookie csv file
 */
const parseCookieCSV = (csvPath:string)=> parseCSV(cookieRowDef,csvPath)
export default parseCookieCSV