import { UserService } from "./UserService"
import { Event } from "../models/Event"
import { EventType } from "../utils/EventType";
import { LogMethod } from "../utils/Logger";


export class EventService {
    private _events : Map<number, Event> = new Map<number, Event>;
    private _users : UserService;

    constructor(public users : UserService) { 
        this._users = users;
    }

    public addEvent(event: Event) : void {
        if (this._events.has(event.id)){
            console.log(`HIBA: Event ID=${event.id} már létező esemény.`);
        } else {
            this._events.set(event.id, event);
        }
    }

    public deleteEvent(id: number) : void {
        if (this._events.has(id)){
            this._events.delete(id);
        } else {
            console.log(`HIBA: Event ID=${id} nem létezik`);
        }
    }

    public listAllEvents() : void {
        this._events.forEach(event => event.listEventInfo());
    }

    @LogMethod("Jelentkezés")
    public register(userId: number, eventId: number) : void {
        let event = this._events.get(eventId)
        let user = this._users.findUserById(userId);
        if (!user){
            console.log(`HIBA!  User ID=${userId} nem létezik`);
            return;
        }
        if (!event){
            console.log(`HIBA!  Event ID=${eventId} nem létezik`);
            return;
        }
        event.addParticipant(user);
    }

    @LogMethod("Jelentkezés törlése")    
    public unregister(userId: number, eventId: number) : void {
        let event = this._events.get(eventId)
        let user = this._users.findUserById(userId);
        if (!user){
            console.log(`HIBA!  User ID=${userId} nem létezik`);
            return;
        }
        if (!event){
            console.log(`HIBA!  Event ID=${eventId} nem létezik`);
            return;
        }
        event.deleteParticipant(userId);
    }

    public getEventById(id: number) : Event | undefined {
        return this._events.get(id);
    }

    public getEventsByType(eventType : EventType) : Event[] {
        return Array.from(this._events.values()).filter(event => event.eventType === eventType);
    }

}