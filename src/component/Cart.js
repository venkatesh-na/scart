import React from "react";
import { useGlobalContext } from "./context";
const Cart = ()=>{
    const {product,handleRemove,handleIncrement,handleDecrement} = useGlobalContext()
    console.log(product)
    return (
        <section className = "cart-container">
            <h2>your Bag</h2>
            <div className = "item-container">
                {
                    product.map((e)=>{
                      const {amount,id,img,price,title} = e
                      return <article key = {id}>
                        <div>
                            <div className = "img-container">
                                <img src = {img} alt = "phone"></img>
                            </div>
                            <div className = "info-container">
                                <h3>{title}</h3>
                                <p>${price}</p>
                                <button id = {id} onClick = {handleRemove} className = "remove">remove</button>
                            </div>
                        </div>
                        <div className = "btn-container">
                            <button onClick = {()=>handleIncrement(id)}>+</button>
                            <p>{amount}</p>
                            <button onClick = {()=>handleDecrement(id,amount)}>-</button>
                        </div>
                      </article>
                    })
                }
            </div>
        </section>
    )
}
export default Cart;