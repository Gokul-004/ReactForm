import React from 'react'
import './D4t1.css'
function D4t1() {
  return (
    <div>
     <ol >
        <li >Fruits
            <ul className='star'>
                <li>apple</li>
                <li>mango</li>
                <li>banana</li>
            </ul>
        </li>
        <li>
            Mango 
            <ol type='i'>
                <li>carrot</li>
                <li>Beans</li>
                <li>BeetRoot</li>
            </ol>
        </li>
        <li>
            Birds
            <ul className='hash'>
                <li>Peacock</li>
                <li>Parrot</li>
                <li>Crow</li>
            </ul>
        </li>


     </ol>
    </div>
  )
}

export default D4t1
