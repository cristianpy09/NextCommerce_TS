import { User } from "../types/usersType";

export function AddUserMetadata(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const user: User = args[0]; // el primer argumento del método create

    const extendedUser: User & { role: string; createdAt: number } = {
      ...user,
      role: "user",
      createdAt: Date.now(),
    };

    console.log(
      " extendiendo usuario con role y createdAt"
    );

    return originalMethod.apply(this, [extendedUser]);
  };

  return descriptor;
}
