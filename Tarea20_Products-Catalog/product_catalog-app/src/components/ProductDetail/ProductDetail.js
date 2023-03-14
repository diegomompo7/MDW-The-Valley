import React from "react";
import {useParams } from "react-router-dom";
import { AuthContext } from "../../App";
import {products} from "../../product-list"

const ProductDetail = (props) => {

    const authInfo = React.useContext(AuthContext);
    
    console.log(authInfo.user)

    let { id } = useParams();

    return (
        <div className="page productDetail">
            <h1>ProductDetail</h1>

            <img src={products[id].image} alt={products[id].name}></img>
            <p src={products[id].name}></p>
            <p src={products[id].description}></p>
            <button onClick={() => props.login({favorite : products[id].name})}></button>
        </div>
    )
}

export default ProductDetail