import { products } from "../data/products";
import { users } from "../data/users";


function Get(id:number) {
    const user = users.find(user=>(user.id===id ))
    return ( 
        console.log(`El usuario es ${user}`)
        
    )
}


