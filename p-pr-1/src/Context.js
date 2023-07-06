import React, {useState} from "react";

const Context = React.createContext()

function ContextProvider ({children}){

    const [formData, setFormData] = useState({email: ""})
    const [item, setItem] = useState([])
    
    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevData => {
            return{
                ...prevData,
                [name]: value
            }
        })
    }

    function addItem(newItem){
        setItem(prevItem => [...prevItem, newItem])
    }
    
    return(
        <Context.Provider value={{formData, handleChange,item, addItem}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}