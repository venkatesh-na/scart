import React, { useContext, useState } from "react"
import data from "./data"
const AppContext = React.createContext()
//dynamic changes from changes in an product object

const AppProvider = ({children})=>{
    const [product,setProduct] = useState(data)
    const handleRemove = (e)=>{
        setProduct(product.filter((item)=>item.id.toString() !== e.target.id))
    }
    const handleClear = ()=>{
        setProduct([])
    }
    const handleDecrement = (returnedId,returnedAmount)=>{
        console.log(returnedId,returnedAmount)
        //returned amount is 1 and not zero becuase we are not decreasing an amount ,we are decreasing an aount adter we check
        if(returnedAmount === 1)
        {
            console.log("amount is zero")
            setProduct(product.filter((e)=> e.id !== returnedId))
        }
        else
        {
        setProduct(product.map((item)=>{
            const {amount,id,img,price,title} = item
                if(id === returnedId)
                {
                    return {"amount":amount-1,"id":id,"img":img,"price":price,"title":title}
                }
                return {...item}
        }))
    }
}

    const handleIncrement = (returnedId)=>{
        setProduct(product.map((item)=>{
            const {amount,id,img,price,title} = item
            if(id === returnedId)
            {
                return {"amount":amount+1,"id":id,"img":img,"price":price,"title":title}
            }
            return {...item}
        }))
    }
    return (
        <AppContext.Provider value = {{product,handleRemove,handleClear,handleIncrement,handleDecrement}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppProvider, useGlobalContext};