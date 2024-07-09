import React from 'react'
import { Link } from 'react-router-dom';
import './product.css';
import Hero from '../Components/Hero/Hero';
import box from'../Components/Assets/box.png'
import cart_product from'../Components/Assets/cart_product.svg';
import long from'../Components/Assets/long.jpg';
import mail_icon from '../Components/Assets/mail_icon.svg';
import Frame1 from '../Components/Assets/Frame1.png';
import Frame2 from '../Components/Assets/Frame2.png';
import Frame3 from '../Components/Assets/Frame3.png';
import Frame4 from '../Components/Assets/Frame4.png';
import Frame5 from '../Components/Assets/Frame5.png';
import Frame6 from '../Components/Assets/Frame6.png';
import Frame7 from '../Components/Assets/Frame7.png';
import Frame8 from '../Components/Assets/Frame8.png';
import Frame9 from '../Components/Assets/Frame9.png';
import Rectangle1 from '../Components/Assets/Rectangle1.png';
import arrow from '../Components/Assets/arrow.svg';
 const Product = () => {
  return (
    <div className='product-page'>
      <Hero/>
      <div className='product-section'>
        <ul>
          <li>
            <img src={Frame1} alt="" className='frame-page' />
            <h3>Autume dress</h3>
            <div>
            <p>Timeless and motion  elegant fashion for the summer all sizes availabe</p>
             <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame2} alt="" className='frame-page'/>
            <h3>SleekStyle Couture</h3>
            <div>
            <p>Elegant suit feature  a sophisticated design with luxurious fabric perfect for any ocassion.</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame3} alt="" className='frame-page'/>
            <h3>NeatNexus</h3>
           
            <div>
            <p>Timeless silhouette and equisite details make it a wardrobe essential for effortless chic.</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame4} alt="" className='frame-page'/>
            <h3>Office runway</h3>
            <div>
            <p>Our classic t-shirt.Made from soft, high-quality cotton, it features a perfect fit</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
            <img src={Frame5} alt=""className='frame-page' />
            <h3>Classic mens Combo</h3>
            <div>
            <p>Crafted from premium fabric,it offers a relax fit and modern look</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame6} alt=""className='frame-page' />
            <h3>Autume jumper</h3>
            <div>
            <p>Made from soft , high quality knit,it features a relaxed fit and classic design</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame7} alt="" className='frame-page'/>
            <h3>Fanell Turtleneck</h3>
            <div>
            <p>Luxurious fabric offers , it offers a snug fit and sophisticated style.</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li> <img src={Frame8} alt="" className='frame-page'/>
            <h3>Slender gown</h3>
            <div>
            <p>Perfect for layering or wearing lone ,it's a versatile addition to any wardrobe.</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
          <li>
          <img src={Frame9} alt="" className='frame-page'/>
          <h3>Turtle neck Givenchy </h3>
            <div>
            <p>Embrace timelesselegance with our chic turtleneck . Crafted from soft , lusurious fabric.</p>
                 <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_product} alt="" /></Link>
            </div>
            <span>$150</span>
          </li>
        </ul>
      </div>
      <div className="middle-section">
        <img src={Rectangle1} alt="" />
        <div className='offer-container'>
          <h4>LIMITED OFFER</h4>
        <p> 30% Off this weekend  </p>
        <p>and get free gift</p>
        </div>
        </div>
        <div className='brands'>
          <p>Our trusted brand</p>
          <img src={long} alt=""/>
          <img src={box} alt="" />
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
export default Product;
