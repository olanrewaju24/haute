import { Link } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
   const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <span className="brand">HAUTE </span>
        <span className="accent">Thread
            </span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          <span className="dropbtn">Shop ▾</span>
          <div className="dropdown-content">
            <Link to="/categories/skincare">Skincare</Link>
            <Link to="/categories/bags">Bags</Link>
            <Link to="/categories/makeup">Makeup</Link>
            <Link to="/categories/shoes">Shoes</Link>
          </div>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/cart">🛒 Cart({cart.length})</Link>
        </li>

        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
