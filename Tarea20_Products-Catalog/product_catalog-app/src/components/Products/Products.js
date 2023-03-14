import React from "react";
import { Navigate } from "react-router-dom";
import {products} from "../../product-list"

const Products = () =>{
    return (
        <div className="page products">

            <h1>PRODUCTS</h1>
            {
                products.map((product) =>
                    <div key={product.id}>
                        <img src={product.image} alt={product.name}></img>
                        <p>{product.name}</p>
                        <a href={<Navigate to={"product-detail/" + product.id} replace={true}></Navigate>}>Ver producto</a>
                    </div>
                )
            }

        </div>
    )
}
export default Products