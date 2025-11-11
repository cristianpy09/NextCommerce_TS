import { users } from "../data/users";
import { User } from "../types/usersType";

export function auth(email: string) {
  const data = users;

  const user = data.find((u) => user?.email === email);

  if (user) {
    return console.log("encontrado");
  }
}
