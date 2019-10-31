const AUTH="Authorization";
const GET_TOKEN_URL = "http://yt-party.com/api/token";

export default class Token { 
	private token = localStorage["token"];

	private static setToken(token: string){
		this.token = token;
		localStorage["token"]= token;
	}
	private interface iData {
		method: string,
		[any: string]: any
	}
	private fetchWithToken(url:string, data?: iData){
		data = data || {};
		data.headers = data.headers || {};
		data.headers[AUTH] = this.token;
		return new Promise(done=>fetch(url,data).then(r=>{
			this.setToken(r.headers[AUTH]);
			done(r);
		}));
		return fetch(url, data);
	}	

	public fetch(url: string, data: iData){
		if (token){
			return this.fetchWithToken(url,data);
		}
		return new Promise(done=>
			this.fetchWithToken(GET_TOKEN_URL).then(
				this.fetchWithToken(url,data).then(done)
			)
		);
	}
}
