import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                        Ecommerce<span className="text-blue-500">Lite</span>
                    </Link>
                    <p className="text-sm text-gray-400 mb-4">
                        Tu tienda online de confianza. Calidad premium y envíos rápidos a todo el país.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social Icons (mock) */}
                        <a href="#" className="hover:text-white transition">Facebook</a>
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition">
                            Contacto
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Comprar</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-blue-400">Nuevos Productos</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Ofertas</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Más Vendidos</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Colecciones</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Ayuda</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:text-blue-400">Envíos y Devoluciones</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Preguntas Frecuentes</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Contacto</Link></li>
                        <li><Link href="#" className="hover:text-blue-400">Términos y Condiciones</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Suscríbete</h3>
                    <p className="text-sm text-gray-400 mb-3">Recibe ofertas exclusivas y novedades.</p>
                    <form className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Tu email"
                            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition font-medium">
                            Suscribirse
                        </button>
                    </form>
                </div>

            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} EcommerceLite. Todos los derechos reservados.
            </div>
        </footer>
    );
}
