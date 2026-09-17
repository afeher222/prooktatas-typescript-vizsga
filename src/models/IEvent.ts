import { EventType } from "../utils/EventType";
import { User } from "./User";

export interface IEvent {
    id: number,
    title: string,
    place: string,
    date: Date,
    participants: Map<number, User>,
    eventType: EventType,
    addParticipant(user: User) : void,
    deleteParticipant(id: number) : void,
    getAllParticipants() : User[]
}