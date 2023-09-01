/** DO NOT EDIT */
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

export class Api{
    static async get_value(){
      let response: any[] = [];
      
      for(let i = 0;i < 5;i++){
        let idx = Math.floor(Math.random() * 5);
        response.push(BE_DATA.data[idx]);
      }
      return Promise.resolve({data: response});
    }
  }