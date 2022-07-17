import React from 'react'
import './Popup1.css'
import image1 from '../img/15.jpg'

function Popup1({setPopup1}) {
  return (
    <div className='popupBackground'>
        <div className='popupContainer'>
            <div>
                <img className='image1' src={image1} alt='this is image1'/>
            </div>
            <div className='content'>
            <button onClick={() => setPopup1(false)} className='cancel'>X</button>
                <h1>$150 Gift Card For Summer Collections</h1>
                <p>Will you be the next winner?</p>
                <button className='nothanks'>NO THANKS</button>
                <button className='shopnow'>SHOP NOW</button>
            </div>
        </div>

    </div>
  )
}

export default Popup1