import { useState } from "react";
function State()
{
    let [name,setName]=useState("");
    let [count,setCount]=useState(0);
    let [disp,setDisp]=useState("")
    return ( 
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+100)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <h1>Name : {name}</h1>
        <input type="text" id="name" name="name" onChange={()=>setName(event.target.value)}></input><br></br><br/>
        <input type="text" value={disp}></input><br/><br/>
        <button onClick={()=>setDisp(name)}>Submit</button>
        </>
    )
}
export default State;