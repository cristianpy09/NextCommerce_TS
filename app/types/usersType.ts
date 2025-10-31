// interfaces/User.ts

  
  export interface User {
    id: number;
    fullName: string;
    email: string;
    isActive: boolean;
    role: "user" | "admin" | "manager"; // puedes agregar más roles si quieres
    address: string
    createdAt: number; // timestamp en milisegundos
  }
  