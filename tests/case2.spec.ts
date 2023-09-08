import { test, expect } from '@playwright/test';
import { Api } from '../data/case2/api';
import { get_environment, get_token } from '../data/case2/funcs';
/**
 * Task : To come up with a way of handling test data that will be used across multiple files. 
 * Any solution you design should be able to work in both case2 and case2.1.
 * 
 * Background : You are working at an airport and an API is being built to get aircraft information. You've written 1 test
 * to ensure that when the plane ID is passed it, then it should return the correct details. However the credentials change 
 * depending on the environment that the test is running in and so you've had to update the credentials based on the environment.
 * 
 * A new aircraft is added to the APIs with the planeId value of 2. You want to create a new spec file to test the new aircraft
 * but don't want to copy paste all your code below, as more aircraft will be added and it will become cumbersome to keep copy pasting.
 * Also be aware that other test data fields may need to be added in the future.
 * 
 * Design a way to handle the test data across multiple files so that it is easy to create any new spec files.
 * 
 * The environment is set in an environment variable called ENV. You can set the environment in the test itself to simulate testing
 * in different environments. There will only ever be 3 environments: dev, uat, trn. 
 * If an invalid auth token is passed to the API call, then an error object will be returned instead.
 * 
 * Currently the get_plane() function only has 2 ids present: 1 and 2. Other ids will result in an error.
 * 
 */
/** All boeing tests go here
 * You can edit the below test to implement your solution.
 */
test('Get boeing plane and confirm details', async ({ }) => {
    const env = get_environment();
    let testdata = { planeId: -1, manufacturerId: -1 };
    let username = '';
    let password = '';
    if(env == 'dev'){
        username = 'Certified';
        password = 'B0mb3r'
        testdata = { planeId: 1, manufacturerId: 1 };
    }else if (env == 'uat'){
        username = 'Pilotwings';
        password = 'gyr0copTER'
        testdata = { planeId: 1, manufacturerId: 1 };
    }else if (env == 'trn'){
        username = 'tom.jones';
        password = 'P2assw0rdt1me'
        testdata = { planeId: 1, manufacturerId: 1 };
    }

    const token = get_token(username,password);
    let res = await Api.get_plane(token, testdata.planeId);
    expect(res.data.name).toEqual('747');
    expect(res.data.manufacturer).toEqual('boeing');
});
