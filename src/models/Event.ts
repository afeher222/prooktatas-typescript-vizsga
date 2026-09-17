import { EventType } from "../utils/EventType";
import { IEvent } from "./IEvent";
import { User } from "./User";

export class Event implements IEvent {
    private _participants: Map<number, User> = new Map<number, User>;

    constructor(public id: number, public title: string, public place: string, public date: Date, public eventType: EventType) { }

    public get participants() : Map<number, User> {
        return this._participants;
    }

    public addParticipant(user: User): void {
        this._participants.set(user.id, user);        
    }

    public deleteParticipant(id: number): void {
        if (this._participants.has(id)){
            this._participants.delete(id);
        } else {
            console.log(`User ID=${id} nem volt résztvevője ennek az eseménynek, eventID=${this.id}`);
        }
    }

    public getAllParticipants(): User[] {
        return Array.from(this._participants.values());
    }

    public listEventInfo() : void {
        console.log(`Event ID=${this.id}, Cím: ${this.title}, Típus: ${this.eventType}`);
        console.log(`  Helyszín: ${this.place}, Időpont: ${this.date}`);
        console.log('  Résztvevők:');
        this._participants.forEach(user=> console.log(`   - ${user.toString()}`));
    }
}