// data/users.ts

import { User } from "../types/usersType";


export const users: User[] = [
  { id: 1, fullName: "Alice", email: "alice@mail.com", isActive: true, role: "user", createdAt: Date.now(),address:"laceiba-cra324" },
  { id: 2, fullName: "Bob", email: "bob@mail.com", isActive: true, role: "admin", createdAt: Date.now(),address:"laceiba-cra324" },
  // ... más usuarios
];
