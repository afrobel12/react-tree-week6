import { useState,useEffect } from "react";


export default function Timer({count, setCount}) {

    
    

    
    useEffect(() => {

       let interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
            
        }, 1000)

        return () => clearInterval(interval)
    

    }, [count])

     

     const handleClickCount = () => {
        setCount(count + 1)
     }
    
    return (
        <>
        
    
         <button onClick={handleClickCount}>count:{count}</button>
        </>

    )
}