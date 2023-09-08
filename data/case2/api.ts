import { get_environment } from './funcs';
/** DO NOT EDIT */
interface Plane{
  name: string;
  fuelCapacity: number;
  wingspan: number;
  passengers: number;
  manufacturer: string;
}
/** DO NOT EDIT */
export class Api{
    static async get_plane(authtoken: string, plane_id: number){
      let response: Plane;
      const error = { name: "error", fuelCapacity: -1, wingspan: -1.0, passengers: -1, manufacturer: "error" };
      if(authtoken.length < 1){
        throw new Error('A token is required');
      }
      const env = get_environment();
      if(env == 'dev'){
        if(authtoken != 'Q2VydGlmaWVkQjBtYjNy'){
          return Promise.resolve({data: error});
        }
      }else if (env == 'uat'){
        if(authtoken != 'UGlsb3R3aW5nc2d5cjBjb3BURVI='){
          return Promise.resolve({data: error});
        }
      }else if (env == 'trn'){
        if(authtoken != 'dG9tLmpvbmVzUDJhc3N3MHJkdDFtZQ=='){
          return Promise.resolve({data: error});
        }
      }
      if(plane_id == 1){
        response = {name: "747", fuelCapacity: 12000, wingspan: 30.0, passengers: 100, manufacturer: "boeing"};
        return Promise.resolve({data: response});
      }else{
        response = {name: "sr71", fuelCapacity: 18000, wingspan: 50.0, passengers: 4, manufacturer: "lockheed"};
      }
      return Promise.resolve({data: response});
    }
  }