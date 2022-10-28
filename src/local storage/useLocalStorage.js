import { useState, useEffect } from "react"

export function useLocalStorage (key, innitialstring){
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null ) return JSON.parse(jsonValue)

        if (innitialstring ==='funtion'){
            return(innitialstring) 
        }
        else{
            return innitialstring
        }
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key, value])
    return [value, setValue] 
}