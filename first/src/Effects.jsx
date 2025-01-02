import React, { useEffect,useState } from 'react'

function Effects() {
    let [Count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Value Updates");
        return(()=>{
            console.log("Code clean")
        })
    },[Count])
  return (
    <div>
      <h1> Count :{ Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Increment</button>
      <button onClick={()=>setCount(Count-1)}>Decrement</button>
    </div>
  )
}

export default Effects
