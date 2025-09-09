import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="brand">HAUTE </span>
          <span className="accent">Thread</span>
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
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
