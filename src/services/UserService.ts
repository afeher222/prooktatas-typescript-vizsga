import { User } from "../models/User";

export class UserService {
    private users = new Map<number, User>;

    public get count() : number {
        return this.users.size;
    }

    public addUser(user: User) : void {
        if (this.users.has(user.id)){
            console.log(`User with ID=${user.id} already exists`);
        } else {
            this.users.set(user.id, user);
        }
    }


    public deleteUser(id : number) : void {
        if (this.users.has(id)){
            this.users.delete(id);
        } else {
            console.log(`User with ID=${id} does not exist`);
        }
    }


    public findUserById(id : number) : User | undefined {
        return this.users.get(id);
    }


    public listAllUsers() : void {
        this.users.forEach(user => console.log(user.toString()));
    }
}
