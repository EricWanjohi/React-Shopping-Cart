import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const Navbar = () => {
    return(
        <BrowserRouter>
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link> </li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default Navbar;
