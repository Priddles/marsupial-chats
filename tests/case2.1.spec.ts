import { test, expect } from '@playwright/test';
import { Api } from '../data/case2/api';
import { get_environment, get_token } from '../data/case2/funcs';

/** This is the spec file that will need updating */

/** Below is what should be returned if the Id of 2 is passed in
 * { 
 * name: "sr71", 
 * fuelCapacity: 18000, 
 * wingspan: 50.0, 
 * passengers: 4, 
 * manufacturer: "lockheed"
 * }
 */
test('Check lockheed ID returns correctly', async ({ page }) => {
    let testdata = { planeId: 2, manufacturerId: 2 };
    // Below works for dev only
    let username = 'Certified';
    let password = 'B0mb3r';

    const token = get_token(username,password);
    let res = await Api.get_plane(token, testdata.planeId);
    expect(res.data.name).toEqual('sr71');
    expect(res.data.manufacturer).toEqual('lockheed');
});
  
  