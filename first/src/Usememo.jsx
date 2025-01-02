import { useMemo, useState } from "react"


let Usememo=()=>{
    let [Number,setNumber]=useState(0);
    let [dark,setDark]=useState(false);
    let double=useMemo(()=>{
        return slowfunc(Number);
    },[Number])

    let theme={
        backgroundColor: dark ? "Black":"White",
        color:dark ? "White":"Black"
    }
    return (
        <>
        <input type="number" value={Number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>setDark(dark=!dark)}>Change Theme</button>
        <div style={theme}>{double}</div>
        </>
    )
}
function slowfunc(n)
{
    for(let i=0;i<100000;i++){}
    return 2*n;
}
export default Usememo;