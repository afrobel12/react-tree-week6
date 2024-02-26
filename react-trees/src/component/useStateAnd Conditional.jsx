import { useState } from "react"


export default function UseStateAndConditional() {
    const counterArray = useState(1)
    let count = counterArray[0]
    let setCount  = counterArray[1]

    function handleClickIncrease() {
        setCount(count + 1)
    }
    function handleClickDecrease() {
        setCount(count - 1)
    }
    
    return(
        <div>
            <p>{count}</p>
            <button onClick={handleClickIncrease}>hola</button>
            <button onClick={handleClickDecrease}>Chaw</button>
        </div>
    )

}

