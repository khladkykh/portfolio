import React, {useEffect, useState} from "react";
import data from "./data"

const Context = React.createContext()

function ContextProvider ({children}){

    const [allData, setAllData] = useState([])
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {setAllData(prevData => data)}, [])

    function toggleFavorite(id){
        const newArr = allData.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite: !photo.isFavorite}
            } else{
                return photo
            }
        })
        setAllData(newArr)
    }

    function addItem(newItem){
        setCartItem(prevItem => [...prevItem, newItem])
    }

    function removeItem(id){
        setCartItem(prevItem => prevItem.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItem([])
    }
    return(
        <Context.Provider value={
            {allData,
            toggleFavorite,
            cartItem,
            addItem,
            removeItem,
            emptyCart}
            }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}