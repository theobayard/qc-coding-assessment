type CountedType = {
    [key: string | symbol | number]:number
} 

/**
 * Count the number of occurrences of some value on a list of
 * objects
 * @param by object member to count occurrences of
 * @param on array of objects to count on
 * @warning on[][by] MUST be a string number or symbol. This is to allow
 * the use of dictionaries to speed up performance
 */
export function count<T,K extends keyof T>(by:K,on:T[]):CountedType {
    let startObj:any = {} // make ts happy

    return on.reduce((prev,current)=>{
        // Turn the thing we are counting into something indexable 
        const countThis = current[by];
        // Type guard against unsupported types
        if(typeof countThis !== "string" && 
           typeof countThis !== "symbol" && 
           typeof countThis !== "number")
            throw(Error("Attempted to count invalid type"));
        // Increase if in dict
        if(countThis in prev) {
            prev[countThis]+= 1;
            return prev
        }
        // Create if not in dict
        else {
            prev[countThis] = 1
            return prev 
        }
    },startObj)
}