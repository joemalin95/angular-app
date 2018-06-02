export class Driver {
	public driver: string;
	public numEscorts : number;

	constructor(public d: string, public n: number){
		this.driver = d;
		this.numEscorts = n;
	}
}
