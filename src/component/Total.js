import React from "react";
import { useGlobalContext } from "./context";
const Total = ()=>{
    const {handleClear,product} = useGlobalContext()
    return (
        <section className = "sub-total">
            <div>
                <p>Total</p>
                <h4>${product.reduce((accumulator,currentValue)=>{
                    return accumulator + (currentValue.price*currentValue.amount)
                },0)}</h4>
            </div>
            <button onClick = {handleClear}>CLEAR CART</button>
        </section>

    )
}
export default Total;