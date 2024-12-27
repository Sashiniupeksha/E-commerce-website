import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>
            {/* Logo Section */}
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>

            {/* Navigation Menu */}
            <ul className="nav-menu">
                <li onClick={() => setMenu("Shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "Shop" && <hr />}
                </li>
                <li onClick={() => setMenu("Boys")}>
                    <Link style={{ textDecoration: 'none' }} to='/Boys'>Boys</Link>
                    {menu === "Boys" && <hr />}
                </li>
                <li onClick={() => setMenu("Girls")}>
                    <Link style={{ textDecoration: 'none' }} to='/Girls'>Girls</Link>
                    {menu === "Girls" && <hr />}
                </li>
                <li onClick={() => setMenu("Baby")}>
                    <Link style={{ textDecoration: 'none' }} to='/Baby'>Baby</Link>
                    {menu === "Baby" && <hr />}
                </li>
            </ul>

            {/* Login and Cart Section */}
            <div className="nav-login-cart">
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
