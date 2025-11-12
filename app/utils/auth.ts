
import { users } from "../data/users";
import { User } from "../types/usersType";
import { redirect } from "next/navigation";

export function auth(email: string) {
  const data = users;

  const user = data.find((u) => u?.email === email);

  if (user) {
    
    return(
      alert("Credenciales correctas"),
      redirect("/")
    ) 
    }else alert("Creddenciales incorrectas")
}
