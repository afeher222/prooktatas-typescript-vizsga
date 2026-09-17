import { User } from "./models/User";
import { Event } from "./models/Event";
import { UserService } from "./services/UserService";
import { EventType } from "./utils/EventType";

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



let events : Event[] = [
    new Event(1, "Csaba szülinap", "Budapest", new Date('2026-11-01 16:00'), EventType.Birthday),
    new Event(2, "Bálint esküvő", "Afrika", new Date('2026-11-02 17:00'), EventType.Wedding),
    new Event(3, "Typescript konferencia", "Budapest", new Date('2026-11-03 13:00'), EventType.Conference),    
]

console.log(events[0]?.listEventInfo());

