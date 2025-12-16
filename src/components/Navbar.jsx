import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img
            src="https://placehold.co/100x50?text=MEHRA"
            alt="Mehra Group Logo"
          />
        </div>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Menu */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)} className="active">
            HOME
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            ABOUT
          </Link>
          <Link to="/products" onClick={() => setOpen(false)}>
            PRODUCT
          </Link>
          <Link
            to="/contact"
            className="btn-contact"
            onClick={() => setOpen(false)}
          >
            CONTACT →
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;