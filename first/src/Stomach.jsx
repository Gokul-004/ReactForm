import React, { useContext, useState } from 'react'
import { colorContext } from './Gokul'

const Stomach = (props) => {
  let [color,setColor]=useState("White");
  let [c1,setC1]=useState("Black");
  let [toggle,setToggle]=useState(false);
  const handleToggle=()=>{
    setToggle(!toggle)
    if(!toggle)
    {
      setColor(name.bg),
      setC1(name.c)
    }
    else
    {
      setColor("White"),
      setC1("Black");
    }
  }
   let name= useContext(colorContext);
//  let handleToggle=()=>{
//     setColor((bgcolor)=>(bgcolor=="white"?name.bg :"white"));
//     setC1((txtcolor)=>(txtcolor=="black"?name.c :"black"))
//   }

  return (
    <div>
      <h1 style={{backgroundColor:color,color:c1}}>Stomach  </h1>
      <button onClick={handleToggle}>Submit</button>
      
    </div>
  )
}

export default Stomach

