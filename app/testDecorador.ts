import { userMethods } from "./utils/UserStore";

const store = new userMethods();

console.log("Usuarios iniciales:", store.list());

store.create({
  id: 3,
  fullName: "Charlie",
  email: "charlie@example.com",
  address: "sdasd",
  isActive: true,
  createdAt: Date.now(),
  role: "admin",
});

console.log("Usuarios después de create():", store.list());
