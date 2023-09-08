export function get_environment(){
    const env = process.env.ENV as string;
    if(env == undefined) {
        return "dev";
    }
    return env;
}
/** DO NOT EDIT */
export function get_token(username: string, password: string){
    return btoa(username+password);
}