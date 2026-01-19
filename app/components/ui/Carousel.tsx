import React from "react";

export default function Carrousell() {
  return (
    <div className="carousel w-full h-[500px] rounded-box overflow-hidden relative">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
          className="w-full object-cover"
          alt="Tech Sale"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-0 top-0 bg-gradient-to-r from-black/70 to-transparent w-full pl-20 text-white">
          <h2 className="text-5xl font-bold mb-4">Tecnología de Punta</h2>
          <p className="text-xl mb-6 max-w-lg">Descubre lo último en gadgets y electrónica con descuentos de hasta el 40%.</p>
          <button className="btn btn-primary btn-lg border-none bg-blue-600 hover:bg-blue-700 text-white">Ver Ofertas</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-ghost text-white">❮</a>
          <a href="#slide2" className="btn btn-circle btn-ghost text-white">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
          className="w-full object-cover"
          alt="Fashion Sale"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-0 top-0 bg-gradient-to-r from-black/60 to-transparent w-full pl-20 text-white">
          <h2 className="text-5xl font-bold mb-4">Moda Urbana</h2>
          <p className="text-xl mb-6 max-w-lg">Renueva tu estilo con nuestra nueva colección de temporada.</p>
          <button className="btn btn-primary btn-lg border-none bg-pink-600 hover:bg-pink-700 text-white">Comprar Ahora</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-ghost text-white">❮</a>
          <a href="#slide3" className="btn btn-circle btn-ghost text-white">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
          className="w-full object-cover"
          alt="Home & Living"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-0 top-0 bg-gradient-to-r from-black/60 to-transparent w-full pl-20 text-white">
          <h2 className="text-5xl font-bold mb-4">Hogar Inteligente</h2>
          <p className="text-xl mb-6 max-w-lg">Automatiza tu vida con nuestros dispositivos smart home.</p>
          <button className="btn btn-primary btn-lg border-none bg-green-600 hover:bg-green-700 text-white">Explorar</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-ghost text-white">❮</a>
          <a href="#slide4" className="btn btn-circle btn-ghost text-white">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1593640408163-04b69c82599e?q=80&w=2070&auto=format&fit=crop"
          className="w-full object-cover"
          alt="Gaming"
        />
        <div className="absolute flex flex-col justify-center items-start h-full left-0 top-0 bg-gradient-to-r from-black/60 to-transparent w-full pl-20 text-white">
          <h2 className="text-5xl font-bold mb-4">Gaming Zone</h2>
          <p className="text-xl mb-6 max-w-lg">Sube de nivel con los mejores accesorios y componentes.</p>
          <button className="btn btn-primary btn-lg border-none bg-purple-600 hover:bg-purple-700 text-white">Ver Setup</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-ghost text-white">❮</a>
          <a href="#slide1" className="btn btn-circle btn-ghost text-white">❯</a>
        </div>
      </div>
    </div>
  );
}
