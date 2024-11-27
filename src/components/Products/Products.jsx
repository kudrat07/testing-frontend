import React from "react";
import "./Products.css";
import starLogo from "../../assets/star-icon.png";
import locationLogo from "../../assets/Location.png";
import cartLogo from "../../assets/cart-icon.png";
import arrowLogo from "../../assets/download-icon.png";
import appLogo from "../../assets/app-logo.png";
import userLogo from "../../assets/user-logo.png";
import { Link } from "react-router-dom";
import bikeIcon from "../../assets/bike-icon.png";
import tickIcon from "../../assets/completed-icon.png";
import clockIcon from "../../assets/Clock.png";
import searchIcon from "../../assets/search-icon.png";
import plusIcon from "../../assets/Plus.png";

const backgroundImg =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732603468/background-burger-img_oetzmt.png";

const burgerImgTop =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732613524/product-header-burger_hyajtj.png";

const ratingLogo =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732613611/rating-logo_u7kyci.png";

const girlLaughing =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604796/girl-photo_qkwpon.png";

const boyAndGirlLaughing =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604815/girl-and-boy_vnusvn.png";

const iceCream =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604830/ice-cream_xqiqxr.png";

const burger =
  "https://res.cloudinary.com/duicg4gyd/image/upload/v1732604934/burger-img_t8ay4v.png";

const Products = () => {
  return (
    <div className="product-container">
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
      <div className="product-header--container">
        <img src={backgroundImg} className="product-header--bgImg" />
        <div className="product-header--wrapper">
          <div className="product-header--text">
            <p className="produuct-header--first text-white">I'm lovin it!</p>
            <h1 className=" product-header--title text-white">
              McDonald’s East London
            </h1>
            <div className="product-icon--container">
              <div className="product-icon--wrapper">
                <img src={tickIcon} className="product-header--icon" />
                <p className="product-icon--text text-white">
                  Minimum Order: 12 GBP
                </p>
              </div>
              <div className="product-icon--wrapper">
                <img src={bikeIcon} className="product-header--icon" />
                <p className="product-icon--text text-white">
                  Delivery in 20-25 Minutes
                </p>
              </div>
            </div>
          </div>
          <div className="header-img--wrapper">
            <img src={burgerImgTop} alt="" className="product-header--img" />
            <img src={ratingLogo} alt="" className="product-rating--logo" />
          </div>
          <div></div>
        </div>
        <div className="product-clockIcon--wrapper">
          <img src={clockIcon} className="clockIcon" />
          <p className="clock-icon--text text-white">Open until 3:00 AM</p>
        </div>
      </div>
      <div className="product-search--container">
        <h2 className="product-search--title">
          All Offers from McDonald’s East London
        </h2>
        <div className="product-input--wrapper">
          <img
            src={searchIcon}
            alt="search icon"
            className="product-search--icon"
          />
          <input
            type="text"
            placeholder="Search from menu..."
            className="product-input"
          />
        </div>
      </div>
      <div className="product-items--container">
        <div className="product-item-wrapper">
          <p className="product-item item-first">Offers</p>
          <p className="product-item">Burgers</p>
          <p className="product-item">Fries</p>
          <p className="product-item">Snacks</p>
          <p className="product-item">Salads</p>
          <p className="product-item">Cold drinks</p>
          <p className="product-item">Happy Meal®</p>
          <p className="product-item">Desserts</p>
          <p className="product-item">Hot drinks</p>
          <p className="product-item">Sauces</p>
          <p className="product-item">Orbit®</p>
        </div>
      </div>
      <main className="product-content--container">
        <div className="product-main--first">
          <div className="product-img--container flex">
            <div className="product-image--wrapper">
              <img
                className="product-food--img"
                src={girlLaughing}
                alt="food image"
              />
            </div>
            <div className="product-image--wrapper">
              <img
                className="product-food--img food-img--center"
                src={boyAndGirlLaughing}
                alt="food image"
              />
            </div>
            <div className="product-image--wrapper">
              <img
                className="product-food--img"
                src={iceCream}
                alt="food image"
              />
            </div>
          </div>
          <div className="product-wrapper">
            <h3 className="product-food--name">Burgers</h3>
            <div className="product-food--wrapper">
              <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div>
              <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div>
              <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img"/>
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div>
              <div className="product-food--container">
                <div className="product-text--wrapper">
                  <h4 className="product-food--title">
                    Royal Cheese Burger with extra Fries
                  </h4>
                  <p className="product-food--description">
                    1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium
                  </p>
                  <p className="product-food--price">₹ 120</p>
                </div>
                <div className="product-img--wrapper">
                  <img src={burger} alt="burger img" className="burger-img" />
                  <div className="plus-icon--wrapper">
                    <img src={plusIcon} alt="icon" className="plus-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-main--cart"></div>
      </main>
    </div>
  );
};

export default Products;
