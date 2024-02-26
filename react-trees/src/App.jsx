import TreeCArd from "./component/TreeCard"
import Header from "./component/Header"
import UseStateAndConditional from "./component/useStateAnd Conditional"
import Monkey from "./component/Monkey"
import { interestingTrees } from "./component/Example"
import Timer from "./component/Timer"
import ResetButton from "./component/ResetButton"
import AddCookieButton from "./component/AddCookiesButton"

import { useState } from "react"


export default function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="parent-box">
      <Header />
      <Monkey />
      <UseStateAndConditional />
      <Timer count={count} setCount={setCount}/>
      <ResetButton functiontoChangeCount={setCount} />
      <AddCookieButton functiontoAddCookie={setCount} />
      <div className="treecard-container">
      <TreeCArd treeName='Baobaoo' location='Across Africa' imgLink= 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhfGVufDB8fDB8fHww'/>
      <TreeCArd treeName='kangaroo' location='Australia' imgLink='https://images.unsplash.com/photo-1509259305526-037fbbf698fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D' />
        {interestingTrees.map((tree) => (
          <TreeCArd key={tree.id} treeName={tree.name} location={tree.location}
          imgLink={tree.img} />
        ))}
        
      </div>
    </div>
  )
}