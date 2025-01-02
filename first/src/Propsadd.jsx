import { useState } from "react";
function Propsadd(props)
{
    let [add,setAdd]=useState(0);
    let [disp,setDisp]=useState();
        return (
        <>
        <h1> Addition : {add}</h1>
        <b>Enter the Value :</b> <input type="text" name="v1" onChange={()=>setAdd(event.target.value)}></input><br/><br/>
        <label><b>Added Value of Prop value and Given Value : </b></label>
        <input type="text" value={disp}></input>
        <button onClick={()=>setDisp(Number(add)+props.value)}>Submit</button>

        <h1> Prop Value :{props.value}</h1></>
    )
}
export default Propsadd;