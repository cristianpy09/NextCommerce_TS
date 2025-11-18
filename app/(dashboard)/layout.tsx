import React from "react";
import Header from "../components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 w-screen ">
      <Header />

      <aside>
        <div className="drawer lg:drawer-open">
          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

          {/* MAIN CONTENT */}
          <div className="drawer-content pt-20 px-4 lg:px-8">
            <div className=" mx-scren">{children}</div>

            <label
              htmlFor="dashboard-drawer"
              className="btn bg-blue-600 text-white hover:bg-blue-700 drawer-button lg:hidden mt-4"
            >
              Abrir menú
            </label>
          </div>

          {/* SIDEBAR */}
          <div className="drawer-side pt-16">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

            <aside
              className="
                w-85 bg-gray-50 border-r border-gray-500 shadow-sm 
                min-h-screen p-4
              "
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">
                Categorías
              </h2>

              <ul className="menu text-gray-700">
                {/* ITEM SIMPLE */}
                <li>
                  <a className="hover:bg-gray-100 rounded-lg">Computadoras</a>
                </li>

                {/* GRUPO */}
                <li>
                  <details className="mb-1 open">
                    <summary className="cursor-pointer">Componentes</summary>
                    <ul className="pl-4">
                      <li>
                        <a className="hover:bg-gray-100 rounded-lg">
                          Tarjetas gráficas
                        </a>
                      </li>
                      <li>
                        <a className="hover:bg-gray-100 rounded-lg">
                          Procesadores
                        </a>
                      </li>

                      <li>
                        <details className="open">
                          <summary className="cursor-pointer">Más opciones</summary>
                          <ul className="pl-4">
                            <li>
                              <a className="hover:bg-gray-100 rounded-lg">
                                RAM
                              </a>
                            </li>
                            <li>
                              <a className="hover:bg-gray-100 rounded-lg">
                                Motherboards
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <a className="hover:bg-gray-100 rounded-lg">Tablets</a>
                </li>

                <li>
                  <details className="open mb-1">
                    <summary className="cursor-pointer">Accesorios</summary>
                    <ul className="pl-4">
                      <li>
                        <a className="hover:bg-gray-100 rounded-lg">Cables</a>
                      </li>
                      <li>
                        <a className="hover:bg-gray-100 rounded-lg">
                          Audífonos
                        </a>
                      </li>

                      <li>
                        <details className="open">
                          <summary className="cursor-pointer">Más</summary>
                          <ul className="pl-4">
                            <li>
                              <a className="hover:bg-gray-100 rounded-lg">
                                Teclados
                              </a>
                            </li>
                            <li>
                              <a className="hover:bg-gray-100 rounded-lg">
                                Mouse
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <a className="hover:bg-gray-100 rounded-lg">Otros</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </aside>
    </div>
  );
}
