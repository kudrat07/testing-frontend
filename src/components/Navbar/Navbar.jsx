import React from 'react'
import "../Home/Home.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <header className="top-header">
        <div className="header-items first">
          <img className="logo" src={starLogo} alt="star logo" />
          <p className="header-text">
            {" "}
            Get 5% Off your first order,{" "}
            <span className="span-text">Promo: ORDER5</span>
          </p>
        </div>
        <div className="header-items">
          <img
            className="logo location-logo"
            src={locationLogo}
            alt="location logo"
          />
          <p className="header-text">
            Regent Street, <span className="text-underline">A4,</span> A4201,
            London
          </p>
          <span className="span-text location-text text-underline">
            Change Location
          </span>
        </div>
        <div className="header-items">
          <div className="header-btn header-first">
            <div className="cart-wrapper">
              <img className="cart-logo" src={cartLogo} alt="cart logo" />
              <p className="cart-text">My Cart</p>
            </div>
          </div>
          <div className="header-btn header-second"></div>
          <div className="header-btn header-third">
            <img src={arrowLogo} alt="" />
          </div>
        </div>
      </header>
      <nav className="nav-container">
        <div>
          <img className="nav-logo" src={appLogo} alt="app-logo" />
        </div>
        <div className="nav-links">
          <Link to="/home" className="nav-links--list">
            Home
          </Link>
          <Link className="nav-links--list">Broswe Menu</Link>
          <Link className="nav-links--list">Home</Link>
          <Link className="nav-links--list">Special Offers</Link>
          <Link to="/restaurants" className="nav-links--list">
            Restaurants
          </Link>
          <Link className="nav-links--list">Track Order</Link>
        </div>
        <div className="user-wrapper">
          <img
            src={userLogo}
            alt="user profile logo"
            className="profile-logo"
          />
          <p className="profile-text">Login/Signup</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar