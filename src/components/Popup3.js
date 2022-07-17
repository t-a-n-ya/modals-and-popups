import React from 'react'
import './Popup3.css'
import image3 from '../img/10.jpg'

function Popup3({setPopup3}) {
  return (
    <div className='popupBackground'>
    <div className='popupContainer3'>
        <div>
            <img className='image3' src={image3} alt='this is image1'/>
        </div>
        <div className='content'>
            <button onClick={() => setPopup3(false)} className='cancel'>X</button>
            <h1>Summer Sale</h1>
            <p>Where we should send your 30% off?</p>
            <input type='text' name='name' placeholder='Full Name....'></input>
            <input type='email' name='email' placeholder='Enter your email....'></input>
            <button className='offer'>GET MY 30% OFF</button>
        </div>
    </div>

</div>
  )
}

export default Popup3