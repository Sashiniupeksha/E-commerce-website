import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Boy_banner from './Components/Assets/banner_boys.jpeg';
import Girl_banner from './Components/Assets/girl_banner.jpeg';
import Baby_banner from './Components/Assets/baby.banner.jpeg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Root route */}
          <Route path="/" element={<Shop />} />
          
          {/* Category routes */}
          <Route path="/Boys" element={<ShopCategory banner={Boy_banner} category="Boys" />} />
          <Route path="/Girls" element={<ShopCategory banner={Girl_banner} category="Girls" />} />
          <Route path="/Baby" element={<ShopCategory banner={Baby_banner} category="Baby" />} />
          
          {/* Product route */}
          <Route path="/Product/:productId" element={<Product />} />
          

          
          {/* Cart and Login routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
