import React, { useState,useRef } from 'react'

function EffectsuseRef() {
  let [name,setName]=useState("");
  let nameref=useRef("");
  let disp=(event)=>{
    setName(event.target.value);
    nameref.current=event.target.value;
    console.log(nameref.current);
  }
  return (
    <div>
      <h2>Entered name: {name}</h2>
      <input type='text' name='name' id='name' onChange={()=>disp(event)}></input><br/>
        
    </div>
  )
}

export default EffectsuseRef; 