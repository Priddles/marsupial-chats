import { test, expect } from '@playwright/test';
import { check_answer } from "../data/case3/funcs";

/** This is an example and you do not need to use this. */
function encode(input: string){
    return input;
}

/** Task:
 * Encode the query to be able to be passed in as a get request
 * 
 * Background: 
 * A new search API has been built that can handle complex queries like graphQL. You have a query that you've built and need to execute it to retrieve the correct data. 
 * But the search is a get call and the query gets passed in as a parameter. Since the query contains reserved characters this query needs to be encoded to work. 
 * 
 * To test if the solution has been found, pass in the correctly encoded string to the function check_answer(). If the encoding is correct then true will be returned.
 */

test('Encoding a complex query', async () => {
    /** Characters you need to handle: 
     * https://developers.google.com/maps/url-encoding
     * Encoding guide: 
     * https://www.w3schools.com/tags/ref_urlencode.ASP
     */
    const starting_string = `http://api.marsupials/search?query={ "request": "POST", "data": { "columns": [1, 2, 3], "query": "Select * From table Where 1=1 & text not in (set1,set2) & idx % 2 = 1" } }`;
    console.log(starting_string);
    // do some conversion and check
    let answer = encode(starting_string);
    expect(check_answer(answer)).toBeTruthy(); 
});


