import { test, expect } from '@playwright/test';

/** Front end labels (same order as backend data) : 
 * 
 * Some value
 * A really long name
 * Standard
 * Short
 * Another value
 */
/** API doc spec */
const BE_DATA = {
  data: [
    {
      "name": "some-value",
    },
    {
      "name": "a-really-long-name",
    },
    {
      "name": "standard",
    },
    {
      "name": "short",
    },
    {
      "name": "another-kinda-value",
    }
  ]
};

class Api{
  static async get_value(){
    let response: any[] = [];
    
    for(let i = 0;i < 5;i++){
      let idx = Math.floor(Math.random() * 5);
      response.push(BE_DATA.data[idx]);
    }
    return Promise.resolve({data: response});
  }
}

test('Title conversion', async ({page}) => {
  /**
   * Originally it was thought that the data would be in the same order everytime and the below test was written. However when the API
   * was implemented, it was found that the data varies.
   * 
   * Task : Write a test that will check all backend labels match the expected front end label. 
   */
  let json = await Api.get_value();
  console.log(json);
  expect(json.data[0].name).toEqual('Some value');
  expect(json.data[1].name).toEqual('A really long name');
  expect(json.data[2].name).toEqual('Standard');
  expect(json.data[3].name).toEqual('Short');
  expect(json.data[4].name).toEqual('Another value');
});

