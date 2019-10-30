const AUTH="Authorization";
const GET="GET";
const POST="POST";
const PUT="PUT";
const DEL="DELETE";

export default class Api {
	public static lobby={
		get = (hash: string) => {
			return this.get("http://yt-party.com/api/lobby/"+hash);
		}
	}
	public static get(url: string){
		return fetch(url, {
			method: GET,
			headers: {
				AUTH: this.token()
			}
		});
	}
	public static post(url: string, body: FormData) {
		return fetch("https://cors-anywhere.herokuapp.com/" + url, {
      method: POST,
			body: body,
			headers: {
				AUTH: this.token()
			}
		});
	}

    public static get(url: string, callbackF: (d: any) => any) {
        fetch(url, {
            method: "GET",
            headers: {
                'X-USER-ID': "12345679801234567"
            }
        })
            .then(r => r.json())
            .then(j => j.data)
            .then(callbackF);
    }

    public static getToken(callback: (token: string) => any) {
        if (localStorage.token) {
            callback(localStorage.token);
            return;
        }
        fetch("http://yt-party.com/api/token", {method: "post"}).then(r => {
            const token = r.headers.get("Authorization")!;
            localStorage.token = token;
            callback(token);
        });
    }


    public static lobby(method: string, body: any, callback: (lobby: any) => any) {
        this.getToken(token => {
            fetch("http://yt-party.com/api/lobby", {
                method: method,
                body: body,
                headers: {Authorization: token}
            }).then(r => {
                if (r.status === 200) {
                    r.json().then(d => {
                        callback(d.data.lobby)
                    })
                } else {
                    console.error(r);
                    callback(null);
                }
            })
        });
    }

    public static postLobby(password: string, callback: (lobby: object | null) => any) {
        const body = JSON.stringify({pass: password});
        this.lobby("post", body, lobby => {
            if (lobby) {
                localStorage.lobby = JSON.stringify(lobby);
            }
            callback(lobby);
        });
    }

    public static getLobby(callback: (lobby: object | null) => any) {
        if (localStorage.lobby) {
            callback(JSON.parse(localStorage.lobby));
            return;
        }
        this.lobby("get", undefined, lobby => {
            if (lobby) {
                localStorage.lobby = JSON.stringify(lobby[0]);
                callback(lobby[0]);
            } else {
                callback(null);
            }
        });
    }

    public static deleteLobby(callback: (lobby: object | null) => any) {
        this.lobby("delete", undefined, callback);
    }

    public static getPlaylist(hash: string, callback:(playlist: any)=>any){
        this.getToken(token=>{
            fetch("http://yt-party.com/api/lobby/"+hash+"/playlist",{
                method: "get",
                headers: { Authorization: token }
            }).then(r=>{
                if (r.status === 200) {
                    r.json().then(d => {
                        callback(d.data.playlist);
                    })
                } else {
                    console.error(r);
                    callback(null);
                }
            })
        });
    }

    public static postSong(hash: string, url: string, title: string){
        this.getToken(token=>{
            fetch("http://yt-party.com/api/lobby/"+hash+"/song",{
                method: "post",
                headers: {Authorization: token},
                body: JSON.stringify({url:url,title:title})
            }).then(r=>{
                r.json().then(console.log)
            });
        })
    }
}

class Token {
	private final GET_TOKEN_URL = "http://yt-party.com/api/token";
	private token = new Secret<string>(localStorage["token"])
	private static setToken(token: string){
		this.tokenDontUseDirectly = token;
		localStorage
	private interface iData {
		method: string,
		[any: string]: any
	}
	private fetchWithToken(url:string, data?: iData){
		data.headers = data.headers || {};
		data.headers.Authorization = this.token;
		return fetch(url, data);
	}	

	public fetch(url: string, data: iData){
		return new Promise((y,n)=>{
			if (token){
				fetchWithToken(url,data).then(r=>{
					

(window as any).api = API;
