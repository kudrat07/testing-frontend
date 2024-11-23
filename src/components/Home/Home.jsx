import React from "react";
import starLogo from "../../assets/star-icon.png";
import locationLogo from "../../assets/Location.png";
import cartLogo from "../../assets/cart-icon.png";
import arrowLogo from "../../assets/download-icon.png";
import appLogo from "../../assets/app-logo.png";
import userLogo from "../../assets/user-logo.png";
import { Link } from "react-router-dom";
import "./Home.css";
const girlEatingPizzaImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732256539/girl-eating-pizza_ws4no2.png";
const girlEatingChowmingImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732255215/chowmin-eating-girl_zdxugf.png";

const Home = () => {
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
      <section className="home-section--container">
        <div className="section-text--wrapper">
          <p className="section-text">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="section-title">
            Feast Your Senses,
          </h1>
          <h1 className="section-title section-title--colored">Fast and Fresh</h1>
          <p className="input-label--text">
            Enter a postal code to see what we deliver
          </p>
          <div className="section-input--wrapper">
            <input
              className="section-input"
              type="text"
              placeholder="e.g. EC4R 3TE"
            />
            <input className="submit-btn" type="submit" value="Search" />
          </div>
        </div>
        <img
          className="section-first--img"
          src={girlEatingPizzaImg}
          alt="girl eating pizza"
        />
        <div className="corner-border">
        <div className="section-order--container">
          <div className="order-wrapper first-order">
          <p className="number-text">1</p>
          <div className="content-wrapper">
            <div className="order-content-wrapper">
              <img className="section-corner--appLogo" src={appLogo} alt="app logo" />
              <p className="corner-text text-bold">We’ve Received your order!</p>
              <p className="corner-text">Awaiting Restaurant acceptance </p>
            </div>
            <p className="now-text">now</p>
          </div>
          </div>
        </div>
        <div className="section-order--container">
          <div className="order-wrapper second-order">
          <p className="number-text">2</p>
          <div className="content-wrapper">
            <div className="order-content-wrapper">
              <img className="section-corner--appLogo" src={appLogo} alt="app logo" />
              <p className="corner-text text-bold">Order Accepted! <span className="tick-emoji">✅</span></p>
              <p className="corner-text">Your order will be delivered shortly</p>
            </div>
            <p className="now-text">now</p>
          </div>
          </div>
        </div>
        <div className="section-order--container">
          <div className="order-wrapper third-order">
          <p className="number-text">3</p>
          <div className="content-wrapper">
            <div className="order-content-wrapper">
              <img className="section-corner--appLogo" src={appLogo} alt="app logo" />
              <p className="corner-text text-bold">Your rider's nearby</p>
              <p className="corner-text">They're almost there - get ready🎉</p>
            </div>
            <p className="now-text">now</p>
          </div>
          </div>
        </div>
          <img
            className="section-second--img"
            src={girlEatingChowmingImg}
            alt="girl eating chowmin"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
