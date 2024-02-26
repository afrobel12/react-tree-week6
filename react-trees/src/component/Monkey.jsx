import { useState } from "react";

export default function Monkey() {

    const [visible, setVisible] = useState(false)

    return(
        <>
          <button onClick={() =>{setVisible(!visible)}}>Show more</button>
          {visible && <img src="https://images.unsplash.com/photo-1564166174574-a9666f590437?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29sZnxlbnwwfHwwfHx8MA%3D%3D"/>}
          {visible ? <img src="https://images.unsplash.com/photo-1564166174574-a9666f590437?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29sZnxlbnwwfHwwfHx8MA%3D%3D"/> : null}
        </>
    )
}


//both (visible && visible ?)do the samething