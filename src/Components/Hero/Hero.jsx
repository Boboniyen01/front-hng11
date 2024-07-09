import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'
import home_icon from '../Assets/home_icon.svg'
import Vector from '../Assets/Vector.svg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="home-product">
                <span>/</span>
               <Link style={{textDecoration:'none'}} to='/'><p>Store front </p></Link> <span>/</span>
          </div>
          <div className='show-container'>
            <p>
                Showing  <span>9</span> result of <span>50</span> items
            </p>
            <div className='select-drop'>
                <label htmlFor="drop-down">Sorted by</label>
                <select id="drop-down">
                    <option >Popularity</option>
                    <option >Luxurious</option>
                    <option >Top Notch</option>
                </select>
            </div>
          </div>
          <div className='change-view'>
            <p>FEATURED PRODUCTS</p>
            {/* <p>Change view <img src={Vector} alt="" /></p> */}
          </div>
    </div>
  )
}

export default Hero