import { Timing } from "./Timing.model";

export class Branch {

    public name: string;
    public address:string;
    public timing:Timing;

    constructor(name: string, address: string, timing: Timing) {


        this.name = name;
        this.address = address;
        this.timing = timing;

    }



}