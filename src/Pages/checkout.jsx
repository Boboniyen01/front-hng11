import React from 'react'
import'./checkout.css'
import Frame1 from '../Components/Assets/Frame1.png';
import Frame2 from '../Components/Assets/Frame2.png';
import Frame4 from '../Components/Assets/Frame4.png';
import login_icon from'../Components/Assets/login_icon.svg';
import mail_icon from '../Components/Assets/mail_icon.svg';
const checkout = () => {
  return (
    <div> 

      <div className='final-checkout'>



      <div className='checkout-page'>
        <h2>Payment Information</h2>
        <p className='first-paragraph'>Apply Discount</p>
        <div className='discount-page'>
      
          <div className='discount-container'>
          <p>Discount with Subcription points</p>
          <p>
          make use of your Rhapsody points as discount
          </p>
          </div>
          <input type="radio" />
        </div>
        <div className='link-image'>
        </div>
        <a href=""> <img src={login_icon} alt="" />Login to retrieve your points</a>


        <div className="pay-with">
          <h3>Pay With</h3>
          <li>
               <input type="radio" />
          <label>
          Debit / Credit Card</label>
          </li>
       <li>
         <input type="radio" />
          <label>
          Pay on delivery</label>
       </li>
         
        </div>

          <div className="card-info">
            <h4>Enter Card Information</h4>
            <li><label>Card holder's name</label>
            <input type="text" /></li>
            <li> <label>Card holder's name</label>
            <input type="number" /></li>
            <li>
              <div>
              <label >Expiry date</label>
              <input type="date" />
                </div> 
                <div>
                <label>CVV</label>
                <input type="password"  maxlength="3" />
                </div>
            </li>
            
           
           

          </div>
          <div className='payment-calculation'>
            <ul>
              <li><p>Subtotal</p>
                  <span>$450.00</span>
              </li>
              <li>
                <p>Tax(10%)</p>
                <span >$9.00</span>
              </li>
              <hr />
              <li>
                <p>shipping</p>
                <span >$0</span>
              </li>
              <hr />
              <li>
                <p>Total</p>
                <span className='span-color'>$459.00</span>
              </li>
             <button>Pay-$54.00</button>
          </ul>

            </div>



      </div>




      <div className='cart-section' >  
        <ul>
          <h2>Order summary <span style={{backgroundColor:'rgba(15, 29, 64, 1)'}}>3</span></h2>
        <li>
            <img src={Frame1} alt="" className='frame-page' />
         
           <div className='text-link'>
            <h3>Autume dress</h3>
            <p>XXL</p>
          
            </div>
          
            <div className='flex-sec'>
                <span>$150</span>
           
            </div>
            
           
            
          </li>
          <hr />
          <li>
          <img src={Frame2} alt="" className='frame-page'/>
         
            <div className='text-link'>
                 <h3>SleekStyle Couture</h3>
            <p>XXL</p>
            </div>
            <div className='flex-sec'>
                <span>$150</span>
            
            </div>
          
          </li>
          <hr />
          <li>
          <img src={Frame4} alt="" className='frame-page'/>
            
            <div className='text-link'>
              <h3>Office runway</h3>
            <p>XXL</p>
           
            
            </div>
            <div className='flex-sec'>
                <span>$150</span>
             
            </div>
          </li>
        </ul>
        <div>
          
        </div>

                <div id='delivery-page'>
                 
                  <h3>Delivery information</h3>
                  <div className='delivery-section'>
               
                        <div>
                          <label>First name</label>
                          <input type="text" />
                        </div>
                        <div>
                        <label>Last name</label>
                        <input type="text" />
                        </div>
                        <div>
                        <label>Address</label>
                        <input type="text" />
                        </div>
                        <div>
                        <label>City/Town</label>
                        <input type="text" />
                        </div>
                        <div>
                        <label>Zip code</label>
                        <input type="text" />
                        </div>
                        <div>
                        <label>Mobile number</label>
                        <input type="text" />
                        </div>
                        <div>
                        <label>Email address</label>
                        <input type="text" />
                        </div>
                    </div>
                 
                   
                  </div>
             
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

export default checkout