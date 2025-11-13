import { users } from "../data/users";
import type { User } from "../types/usersType";

import { AddUserMetadata } from "./decorators";

export class userMethods {
  

  list(): User[] {
    console.log("Get ejecutandose");
    return users;
  }

  findByName(name: string): User | undefined {
    console.log("get: user ejecutandose");

    const userFind = users.find((user) => user.fullName === name);
    if (userFind) {
      return userFind;
    }
  }

  @AddUserMetadata
  create(user: User): void {
    console.log("post: creando user");

    users.push(user);
  }

  update(id: number, data: Partial<User>): void {
    const userToupdate = users.find((user) => user.id === id);
    if (userToupdate) Object.assign(userToupdate, data);
  }

  remove(id: number): void {
    console.log(" delete: user removed");
    const index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
  }
}
