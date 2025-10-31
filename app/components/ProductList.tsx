import React from 'react'
import { User } from '../types/usersType'
import Cards from './ProductCard'
import { users } from '../data/users'
import { products } from '../data/products'
import { Product } from '../types/productsType'

export default async function ProductList() {
    const data = products

  return (
    <div>
         <section className="w-full max-w-400   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((u: Product) => (
          <div
            key={u.sku}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <Cards name={u.name} category={u.category} price={u.price} img={u.imageUrl} description={u.description} />

            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-transparent via-transparent to-white/10"></div>
          </div>
        ))}
      </section>

    </div>
  )
}
