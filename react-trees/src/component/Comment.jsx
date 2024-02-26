import { useState } from "react";

export default function Comment(){
     
    const [show, setShow]=useState(false)

    return(
        <>
        <button onClick={() =>{setShow(!show)}}>comment</button>
        {show && <p>😲</p>}
        </>
    )
}