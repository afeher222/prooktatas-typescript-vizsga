export class User {
    private _id : number;
    private _name: string;
    private _email: string;

    constructor(userId: number, name: string, email: string){
        this._id = userId;
        this._name = name;
        this._email = email;
    }

    public get id() : number {
        return this._id;
    }

    public get name() : string {
        return this._name;
    }

    public get email() : string {
        return this._email;
    }

    public toString(): string{
        return `ID=${this.id} | Name: ${this.name} | Email: ${this.email}`;
    } 
}