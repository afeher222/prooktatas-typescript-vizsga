import { User } from "../src/models/User";
import { Event } from "../src/models/Event";

import { EventService } from "../src/services/EventService";
import { UserService } from "../src/services/UserService";
import { EventType } from "../src/utils/EventType";

describe('Event service test', () => {
    let eventService : EventService;
    beforeEach(() => {
        let users = new UserService();
        users.addUser(new User(1, 'A', 'A@A.com'));
        users.addUser(new User(2, 'B', 'B@B.com'));
        users.addUser(new User(3, 'C', 'C@C.com'));
        eventService= new EventService(users);
    });
    test('Add an event into the collection', () => {
        const event : Event = new Event(1, 'Esemény1', 'Place1', new Date("2026-01-01"), EventType.Birthday);
        eventService.addEvent(event);
        expect(eventService.getEventById(1)?.title).toBe('Esemény1');        
    });
    test('Add an event and register a user', () => {
        const event : Event = new Event(1, 'Esemény1', 'Place1', new Date("2026-01-01"), EventType.Birthday);
        eventService.addEvent(event);
        eventService.register(3, 1);
        expect(eventService.getEventById(1)?.participants.get(3)?.name).toBe('C');
    })
    

});