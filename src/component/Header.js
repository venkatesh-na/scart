import React from "react";
import { FaShoppingBag } from "react-icons/fa"
import { useGlobalContext } from "./context";
const Header = ()=>{
    const { product } = useGlobalContext()
    return (
        <header>
            <h1>Cart</h1>
            <a href = "/">
                <span>{product.reduce((accumulator,currentValue)=>{
                    return accumulator + currentValue.amount
                },0)}</span>
                <FaShoppingBag/>
            </a>
        </header>
    )
}
export default Header;