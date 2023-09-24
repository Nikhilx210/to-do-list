import { createContext, useContext, useEffect, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({children}) =>{
    const [todos, setTodos] = useState( () => {
        const localval = localStorage.getItem("ITEMS")
        if(localval == null) return[]
        return JSON.parse(localval)
    });
    useEffect(()=>{
        localStorage.setItem("ITEMS",JSON.stringify(todos))
    },[todos])
    return(
        <ListContext.Provider value={[todos,setTodos]}>
            {children}
        </ListContext.Provider>
    )
    
}

export const useList=()=> {return useContext(ListContext)}