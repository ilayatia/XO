import { useState } from "react"
import Cube from "./Cube"

const Board =()=>{
    const [state,setState] = useState("X")
    const pressingLogic = ()=>{
        if (state == "O"){
            setState("X")
        }
        else{
            setState("O")
        }
    }
    return (
    <>
        <h1>{state} Turn!</h1>
    <div className="board">
        <div>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        </div>
        <div>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        </div>
        <div>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        <Cube turn={state} switchTurn={pressingLogic}></Cube>
        </div>
        
    </div>
    </>)
}
export default Board