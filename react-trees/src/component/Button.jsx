import { useState } from "react"
import "./Button.css"
import { interestingTrees } from "./Example"
import Timer from "./Timer"

export default function Button() {

    let price = 100

        const [likeCount, SetLikeCount] = useState(0)
        const handleLikeClick = () => {
            SetLikeCount(likeCount + 1)
        }
        const handleDisLikeClick = () => {
            SetLikeCount(likeCount - 1)
        }
        const handleBuyClick = () => {
            SetLikeCount(likeCount - price )

        }
    
    return (
        <div>
        <button onClick={() =>{
            alert('click') }}>Click!</button>
        <button onClick={handleLikeClick}>👍</button>
        <span>{likeCount}</span>
        <button onClick={handleDisLikeClick}>👎</button>
        <button onClick={handleBuyClick}>Buy</button>
     
    </div>
    )
        }