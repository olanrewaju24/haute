import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from "./Pages/About";
import Skincare from "./categories/skincare";
import Bags from "./categories/Bags";
import Cart from "./Pages/Cart";   
import CartProvider from "./Features/ContextProvider";
import Makeup from "./categories/Makeup";
import Accessories from "./categories/Accessories";
import Shoes from "./categories/Shoes";
import Signup from "./Pages/Signup";
import Corporate from "./Style/corporate";
import Casual from "./Style/casual";
import Dinner from "./Style/Dinner";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories/skincare" element={<Skincare />} />
          <Route path="/categories/bags" element={<Bags />} />
          <Route path="/categories/makeup" element={<Makeup />} />
          <Route path="/categories/accessories" element={<Accessories />} />
          <Route path="/categories/shoes" element={<Shoes />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup/>} />

          <Route path="/Style/corporate" element={<Corporate/>} />
          <Route path="/Style/casual" element= {<Casual/>}/>
          <Route path="/style/dinner" element={<Dinner/>}/>
        </Routes>
        <Footer />
      </CartProvider>
      
    </>
  );
}

export default App;
