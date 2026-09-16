import { User } from "./models/User";
import { UserService } from "./services/UserService";

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

