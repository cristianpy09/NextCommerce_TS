
import { users } from "../data/users";
import { User } from "../types/usersType";

export function authenticate(email: string): User | null {
  const user = users.find(
    (u) => u.email === email 
  );
  return user || null;
}

export function loginUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem("user");
}

export function getCurrentUser(): User | null {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
}

export function isAuthenticated(): boolean {
  return !!getCurrentUser();
}
