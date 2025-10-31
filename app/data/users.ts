// data/users.ts

import { User } from "../types/usersType";

export const users: User[] = [
  {
    id: 1,
    fullName: "Alice Johnson",
    email: "alice.johnson@mail.com",
    isActive: true,
    role: "admin",
    address: "123 Main St, New York, NY",
    createdAt: Date.now(),
  },
  {
    id: 2,
    fullName: "Bob Smith",
    email: "bob.smith@mail.com",
    isActive: true,
    role: "user",
    address: "456 Elm St, Los Angeles, CA",
    createdAt: Date.now(),
  },
  {
    id: 3,
    fullName: "Carol Martinez",
    email: "carol.martinez@mail.com",
    isActive: false,
    role: "user",
    address: "789 Oak St, Chicago, IL",
    createdAt: Date.now(),
  },
  {
    id: 4,
    fullName: "David Lee",
    email: "david.lee@mail.com",
    isActive: true,
    role: "user",
    address: "321 Pine St, Houston, TX",
    createdAt: Date.now(),
  },
  {
    id: 5,
    fullName: "Eva González",
    email: "eva.gonzalez@mail.com",
    isActive: true,
    role: "user",
    address: "654 Maple St, Miami, FL",
    createdAt: Date.now(),
  },
  // ... más usuarios
];
