import { User } from "./models/User";
import { Event } from "./models/Event";
import { UserService } from "./services/UserService";
import { EventType } from "./utils/EventType";
import { EventService } from "./services/EventService";

let users : User[] = [
    new User(1, "Adam", "adam@gmail.com"),
    new User(2, "Balint", "balint@gmail.com"),
    new User(3, "Csaba", "csaba@gmail.com"),
    new User(4, "David", "david@gmail.com"),
    new User(5, "Eniko", "eniko@gmail.com")
];

let userService = new UserService();
users.forEach(user => userService.addUser(user));

console.log(userService.findUserById(3)?.toString());
console.log(userService.count);
userService.listAllUsers();


let eventService = new EventService(userService);

let events : Event[] = [
    new Event(1, "Csaba szülinap", "Budapest", new Date('2026-11-01 16:00'), EventType.Birthday),
    new Event(2, "Bálint esküvő", "Afrika", new Date('2026-11-02 17:00'), EventType.Wedding),
    new Event(3, "Typescript konferencia", "Budapest", new Date('2026-11-03 13:00'), EventType.Conference),    
    new Event(4, "Dávid szülinap", "Budapest", new Date('2026-11-04 16:00'), EventType.Birthday),
]

events.forEach(event => eventService.addEvent(event));

eventService.listAllEvents();


eventService.register(1, 1);
eventService.register(2, 1);
eventService.register(3, 1);
eventService.register(1, 2);
eventService.register(2, 2);
eventService.register(3, 2);
eventService.register(4, 2);
eventService.register(5, 2);
eventService.register(2, 3);
eventService.register(3, 3);




console.log('\n\n---Jelentkezések után: ');
eventService.listAllEvents();


eventService.unregister(2, 1);
eventService.unregister(2, 3);

console.log('\n\n---Törlések után');
eventService.listAllEvents();

console.log('\n\nID=3 esemény');
eventService.getEventById(3)?.listEventInfo();

console.log('\n\nSzülinapok');
eventService.getEventsByType(EventType.Birthday).forEach(item => item.listEventInfo());

