"use client";
import Link from "next/link";
import { useParams } from "next/navigation";




type Prop = {
  name: string;
  img?: string;
  description?: string;
  species?: string;
  age?: string;
  email?: string;
  gender?: string;
  status?: string;
  id?: number;
  w?: string;
  idUrl?:number
  category?:string
  price?:number
  sku?:string
  
};






async function DeleteUser(id: number) {
  if (!id) return console.error("ID inválido");

  const res = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    alert(" Usuario eliminado correctamente");
    window.location.reload(); // Refresca el dashboard
  } else {
    console.error(" Error al eliminar usuario:", await res.text());
  }
}


export default function Cards(props: Prop) {
 
  
  const { name, img, price, sku,category ,description} = props;
  const params = useParams();
  const idURL = params.id; 
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src={img}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {name}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{price}</div>
        <div className="badge badge-outline">{category}</div>
      </div>
    </div>
  </div>
  );
}

