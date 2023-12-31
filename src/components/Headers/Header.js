import React from 'react';
import logo from '../../images/Logo.svg' 
import './Header.css'


const Header = () => {
    return (
    <nav className='Header'>
        <img src={logo} alt="" />
        <div>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
            <a href="/log in">Log in</a>
        </div>
    </nav>
    );
};

export default Header;