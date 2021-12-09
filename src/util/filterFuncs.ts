/**
 * A function that creates a function that returns true if
 * thisDay is on the same UTC day as someDay
 */
export const isSomeUTCDay = (someDay:Date) => (thisDay:Date) => {
    return someDay.getUTCFullYear() === thisDay.getUTCFullYear() &&
           someDay.getUTCMonth()    === thisDay.getUTCMonth() &&
           someDay.getUTCDate()     === thisDay.getUTCDate();
}

interface TimeStampedData {
    timestamp:Date
}
/**
 * Filter data to specific utc day
 * @param day day to isolate to. Will use UTC regardless of this timezone
 * @param data data to filter
 * @returns data items with timestamp on day
 */
export const isolateUTCDay = <D extends TimeStampedData>(day:Date,data:D[]):D[] => {
    const isThisUTCDay = isSomeUTCDay(day)
    return data.filter((d)=>isThisUTCDay(d.timestamp))
}