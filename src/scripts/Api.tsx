import Token from "./Token";

const GET="GET";
const POST="POST";
const PUT="PUT";
const DEL="DELETE";

export default class Api {

	final static url1 = "http://yt-party.com/api";

	public static lobby = (()=>{

		const url2 = this.url1+"/lobby";

		const index = (hash: string)=>{
			const url3 = url2+"/"+hash;
			return {
				get: ()=>   Token.fetch(url3,{method:GET}),
				put: ()=>   Token.fetch(url3,{method:PUT}),
				delete:()=> Token.fetch(url3,{method:DELETE}),
				playlist: (()=>{
					const url4 = url3+"/playlist";
					return {
						get: ()=>   Token.fetch(url4,{method:GET}),
						delete:()=> Token.fetch(url4,{method:DELETE})
					};
				})(),
				song: (()=>{
					const url4 = url3+"/song";
					const index = (songID: string)=>{
						const url5= url4+"/"+songID;
						return { 
							delete: ()=> Token.fetch(url5,{method:DELETE}),
							vote: (action: string)=>{
								const url6= url5+"/vote/"+action;
								return {
									post: ()=> Token.fetch(url6,{method:POST})
								}
							}
						}
					}
					index.post = (data:{url:string,name:string})=> Token.fetch(url4,{method:POST,body:JSON.stringify(data)});
					return index;
				})()
			};
		}

		index.get  = () => Token.fetch(url2,{method: GET});
		index.post = (data:{pass:string,name?:string}) => 
			Token.fetch(url2,{method:POST,body:JSON.stringify(data)});
		return index;
	})();
}
