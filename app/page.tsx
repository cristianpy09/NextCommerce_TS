"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-white">
            Bienvenido a <span className="text-blue-500">NextCommerce</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Explora, aprende y gestiona tu e-commerce con tecnología moderna,
            tipado estricto y arquitectura escalable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="cursor-pointer bg-white text-[#264ECA] font-semibold p-2 mt-2 py-2 rounded-md shadow hover:bg-[#e4e4e4] transition-all" onClick={() => router.push("/login")}>
              {" "}
              iniciar sesion
            </button>
            <button className="cursor-pointer bg-white text-[#264ECA] font-semibold p-2 mt-2 py-2 rounded-md shadow transition-all hover:bg-[#e4e4e4]" onClick={() => router.push("/register")}> registrarse</button>
          </div>
        </section>

        <footer className="absolute bottom-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} NextCommerce — Proyecto académico Full
          Stack
        </footer>
      </main>
    </>
  );
}
