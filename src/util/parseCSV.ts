import { readFile } from 'fs/promises';

/**
 * An interface for defining how to parse csv rows.
 * Each value in the row will be parsed by it's corresponding function.
 */
interface RowDefinition {
    [key:string]: (value:string)=>any
}

/**
 * Creates a function that will parse csv files.
 * CSV files passed must contain a header that matches
 * the rows defined in RowDefinition. Inputting a csv that fails
 * to do this will cause an error.
 * 
 * @returns an array of objects with a member variable for every column
 */
const parseCSV = async (rowDef:RowDefinition, csvFilePath:string) => {
    const fileString = await readFile(csvFilePath,"utf-8");

    console.log(`fileString:${fileString}`)
    // convert to 2d array of form [row][column] 
    const fileArray = fileString.split("\n")
                                .map((row) => row.split(","));

    // validate and remove header
    const header = fileArray[0];
    

    return fileArray
}

export default parseCSV