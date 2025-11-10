import { users } from "../data/users";

import { redirect } from "next/navigation";

export default function auth(email: string) {
  const user = users.find((user) => user.email === email);

  if (user?.email === "alice.johnson@mail.com") {
    return redirect("/dashboard");
  }
}
