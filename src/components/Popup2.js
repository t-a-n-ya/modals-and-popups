import React from 'react'
import './Popup2.css'
import image2 from '../img/1.png'

function Popup2({setPopup2}) {
  return (
    <div className='popupBackground'>
    <div className='popupContainer2'>
    <button onClick={() => setPopup2(false)} className='cancel'>X</button>
        <div>
            <img className='image2' src={image2} alt='this is image2'/>
        </div>
        <div className='content2'>
            <h2>Don't Miss New Updates From Us </h2>
            <input type='email' name='email' placeholder='Enter your email....'></input>
            <button className='subscribe'>SUBSCRIBE</button>
        </div>
    </div>

</div>
  )
}

export default Popup2