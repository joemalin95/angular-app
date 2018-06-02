export class Building {
    public building: string;
	public pickupNum : number;

	constructor(public b: string, public p: number){
		this.building = b;
		this.pickupNum = p;
	}
}
