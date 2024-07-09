import React from 'react'
import './cart.css'

import Frame1 from '../Components/Assets/Frame1.png';
import Frame2 from '../Components/Assets/Frame2.png';
import Frame4 from '../Components/Assets/Frame4.png';
import mail_icon from '../Components/Assets/mail_icon.svg';
import delete_icon from '../Components/Assets/delete_icon.svg'
import delete_2 from '../Components/Assets/delete_2.svg'
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';
 const Cart = () => {
  return (
    <div>
 <div className="home-product">
                <div className="home-container">
                
                <Link style={{textDecoration:'none'}} to='/product'>
                   <p>Store front <span>/</span></p>
                </Link>  
                </div>
               <Link style={{textDecoration:'none'}} to='/cart'><p>Cart </p></Link> <span>/</span>
          </div>
              <div  className='cart-page'>
             
   
            <div className='cart-section'>

            <div className='cart-header'>
        <h3>Cart</h3>
        <button>
        <img src={delete_2} alt="" /><span>Remove all</span>
        </button>
      </div>
            <li>
            <img src={Frame1} alt="" className='frame-page' />
         
           <div className='text-link'>
            <h3>Autume dress</h3>
            <p>XXL</p>
            <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
            </div>
            </div>
          
            <div className='flex-sec'>
                <span>$150</span>
              <img src={delete_icon} alt="" />
            </div>
            
           
            
          </li>
          <hr />
          <li>
          <img src={Frame2} alt="" className='frame-page'/>
         
            <div className='text-link'>
                 <h3>SleekStyle Couture</h3>
            <p>XXL</p>
            <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
            </div>
            </div>
            <div className='flex-sec'>
                <span>$150</span>
              <img src={delete_icon} alt="" />
            </div>
          
          </li>
          <hr />
          <li>
          <img src={Frame4} alt="" className='frame-page'/>
            
            <div className='text-link'>
              <h3>Office runway</h3>
            <p>XXL</p>
            <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
            </div>
            
            </div>
            <div className='flex-sec'>
                <span>$150</span>
              <img src={delete_icon} alt="" />
            </div>
          </li>
            </div>

<div className='checkout-section'>
  <ul>
    <li><p>Subtotal</p>
        <span className='span-color'>$450</span>
    </li>
    <li>
      <p>Discount</p>
      <span >$0</span>
    </li>
    <hr />
    <li>
      <p>Grand Total</p>
      <span className='span-color'>$450</span>
    </li>
    <Link to='/checkout'><button>Check out now</button></Link>
</ul>

</div>
</div>

<div className="contact-us">
          <h2>
          Subscribe to our news update to get our latest collection
          </h2>
          <p>
          By subcribing to our news you get 10% off on your first order
          </p>
          <div className='mail_to'>
            <img src={mail_icon} alt="" />
          <input type="email" placeholder='Enter your email'/>
          <button>Subscribe</button>
          </div>
          
        </div>
        <div className='footer'>
              <ul>
                <li>
                  <p><h4>TIMBU</h4></p>
                  <p>Cloud Shop</p>
                  <p>Specializes in providing high quality and stylish products for your cupboard</p>
                </li>
              </ul>
              <hr />
              <footer><p>© 2023 . Powered by Ryvision. All Rights Reserved.</p></footer>
          </div>    
    </div>
  )
}
export default Cart;
