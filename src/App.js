
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from'./Pages/checkout';
import Hero from './Components/Hero/Hero';
function App() {
  return (
    <div>
         
      <BrowserRouter>
      <Navbar/>
      <Routes>
   
        <Route path='/' element={<Product/>}>
         <Route path=':productId'element={<Product/>}/>
         </Route>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
