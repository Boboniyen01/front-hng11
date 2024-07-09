import React from 'react'
import'./Navbar.css'
//import logo from'../Assets/logo.png'
import { Link } from 'react-router-dom';
import  cart_icon from'../Assets/cart_icon.svg' 
import search_icon from '../Assets/search_icon.svg'
import user_logo from '../Assets/user_logo.svg'
 const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
           <p>TImbu</p>
            <p>Cloud Shop</p>
        </div>
        <ul className="nav-menu">
         <Link to='/product' style={{textDecoration:'none'}}> <li>Store front</li></Link>  
            {/* <li>About us</li>
            <li>Connect with us</li> */}
        </ul>
        <div className='search-element'>
          <img src={search_icon} alt="" />
          <input type="search" className='search-bar' placeholder='Search' />
        </div>
        <ul className="nav-cart">
            <li> 
             <Link to='/cart' style={{textDecoration:'none'}}> <img src={cart_icon} alt="" /></Link>
              
            </li>
            {/* <li>
             <Link to='/profile' style={{textDecoration:'none'}}> <img src={user_logo} alt="" /></Link>
              
            </li> */}
          </ul>
         
         
    </div>
  )
}
export default Navbar;