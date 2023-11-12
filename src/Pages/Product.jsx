import React from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

function Product(){

    const {allProducts} = React.useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.find((item) => item.id === Number(productId));
    return (
        <div>
            <ProductDisplay product={product}/>
        </div>
    )
}

export default Product;