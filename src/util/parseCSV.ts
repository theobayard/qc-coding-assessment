import { assert } from 'chai';
import { readFile } from 'fs/promises';

/**
 * An interface for defining how to parse csv rows.
 * Each value in the row will be parsed by it's corresponding function.
 * This interface describes one row, so it will have an entry for every column
 */
interface RowDefinition {
    [key:string]: (value:string)=>any
}
type RowType<T extends RowDefinition> = {
    [Property in keyof T]:ReturnType<T[Property]>
}

/**
 * Creates a function that will parse csv files.
 * CSV files passed must contain a header that matches
 * the rows defined in RowDefinition. Inputting a csv that fails
 * to do this will cause an error.
 * 
 * @returns an array of objects with a member variable for every column
 */
async function parseCSV<R extends RowDefinition>(rowDef:R, csvFilePath:string):Promise<RowType<R>[]> {
    const fileString = await readFile(csvFilePath,"utf-8").then((fString)=>{
        //remove carriage returns (booo windows)
        return fString.replace("\r","");
    });


    // convert to 2d array of form [row][column] 
    let fileArray = fileString.split("\n")
                              .map((row) => row.split(","));

    // separate header
    const header = fileArray[0]
    fileArray = fileArray.slice(1)

    /**
     * Validate Header
     * A mismatch between csv columns and the parser definition
     * is an easy mistake that could cause non-obvious problems.
     * Better to catch it early.
     */
    const headerIterator = header.values()
    for(const key in rowDef) {
        assert(key==headerIterator.next().value,"CSV header does not match rowDef")
    }

    // define transformation to row entries
    const rowMap = (row:string[]) => {
        const rowIterator = row.values()
        // apply transformation to each row entry
        let parsedRow:any = {}
        for(const key in rowDef) {
            parsedRow[key] = rowDef[key](rowIterator.next().value)
        }
        return parsedRow as RowType<R>
    }

    // apply transformation to every row
    return fileArray.map(rowMap)
}

export default parseCSV