export class DailyEscort {
    public date: string;
	public numEscorts : number;

	constructor(public d: string, public n: number){
		this.date = d;
		this.numEscorts = n;
	}
}
