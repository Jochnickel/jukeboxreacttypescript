const AUTH = "Authorization";
const GET_TOKEN_URL = "http://yt-party.com/api/token";

interface iData {
    method: string;

    [any: string]: any;
}

export default class Token {
    private static token = localStorage["token"]; //TODO: Token = null im localStorage

    private static setToken(token: string) {
        Token.token = token;
        localStorage["token"] = token;
    }

    private static fetchWithToken(url: string, data?: iData | undefined):Promise<Response>{
        data = data || {method: ""};
        data.headers = data.headers || {};
        data.headers[AUTH] = Token.token;
        return new Promise(done => fetch(url, data).then(r => {
            Token.setToken(r.headers.get(AUTH)!);
            done(r);
        }));
    }

    public static fetch(url: string, data: iData):Promise<Response> {
        if (Token.token) {
            return this.fetchWithToken(url, data);
        }
        return new Promise(done =>
            fetch(GET_TOKEN_URL, {method: "POST"}).then(r => {
            	this.setToken(r.headers.get(AUTH)!);
                Token.fetchWithToken(url, data).then(done);
            })
        );
    }
}
