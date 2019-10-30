
export default class Hidden<T>{
	private v:T;
	public constructor(value:T){
		this.v=value;
	}
	public get = () => this.v;
	public set(value:T){
		this.v=value;
	}
}
