import { useState } from "react"

interface Props{
    turn:string
    switchTurn:()=>void
}
const Cube : React.FC<Props> = ({turn ,switchTurn}:Props)=>{
    const [state,setState] = useState("")
    return <div className="cube" style={{border:"solid",padding:"10px"}} onClick={()=>{if(state==""){setState(turn);switchTurn();}}}>{state}</div>
}
export default Cube