import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>+021-95-51-84 | email@email.com | 1734 Stonecoal Road</p>
        <div>
          <span>$ USD</span> | <span>My Account</span>
        </div>
      </div>
      <div className="main-bar">
        <div className="logo">Electro<span>.</span></div>
        <div className="search-bar">
          <select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Garden</option>
            <option>Books</option>
            <option>Sports</option>
          </select>
          <input type="text" placeholder="Search here" />
          <button>Search</button>
        </div>
        <div className="icons">
          <span>Your Wishlist</span> | <span>Your Cart</span>
        </div>
      </div>
      <nav className="navbar">
        <a href="/">Home / </a>
        <a href="/hot-deals">Hot Deals / </a>
        <a href="/categories">Categories / </a>
        <a href="/electronics">Electronics / </a>
        <a href="/clothing">Clothing / </a>
        <a href="/homegarden">Home & Garden / </a>
        <a href="/books">Books /</a>
        <a href="/sports">Sports </a>
      </nav>
    </header>
  );
};

export default Header;
