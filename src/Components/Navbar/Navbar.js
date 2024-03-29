import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/Hola9logo.jpg";
import Home from "../Body/Home/Home";
import Footer from "../Footer/Footer";
import { FaSearch, FaHome, FaTags } from 'react-icons/fa';

const Navbar = () => {
  const [active, setactive] = useState("Home");

  return (
    <>
      <header className="navbar">
        <img src={logo} alt="Hola9" className="logo" />
        <span className="nav-search-input">
          <i className="fas fa-search" />
          <input type="search" />
        </span>
        <span className="nav-titles">
          <span
            style={{ color: active === "Home" && "rgb(9, 72, 74)" , fontWeight : active === 'Home' && '600'}}
            onClick={() => setactive("Home")}
            className="Home"
          >
            Home{" "}
          </span>
          <span
            style={{ color: active === "Offers" && "rgb(9, 72, 74)" , fontWeight : active === 'Offers' && '600' }}
            onClick={() => setactive("Offers")}
            className="Offers"
          >
            Offers
          </span>
          <span style={{ color: "red" }}> Tirupati </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
            alt="profile"
            style={{ border: active === "Profile" && "0.2px solid rgb(9, 72, 74)"}}
            onClick={() => setactive("Profile")}
          />
        </span>
        <span className="nav-search">
          <span className="nav-search-input-M">
            <i className="fas fa-search" />
            <input type="search" />
          </span>
          <span style={{ color: "red" }}> Tirupati </span>
        </span>
      </header>

      {/* ------------------------------------------------ Nav Icon For Footer ----------------------------------------- */}

      <footer className="nav-footer">
        <FaHome
        style={{ color: active === "Home" && "rgb(9, 72, 74)" ,}}
          onClick={() => setactive("Home")}
          className="Home icons"
        />
        <FaTags
          onClick={() => setactive("Offers")}
          style={{ color: active === "Offers" && "rgb(9, 72, 74)" }}
          className="Offers icons"
        />
        <FaSearch
          style={{ color: active === "Search" && "rgb(9, 72, 74)"}}
          onClick={() => setactive("Search")}
          className="Search icons"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90HxBHJqRkvtgM9Z7RyR3bLV2mlG01SzkgB51gGui1Hewzt6sjpD3FrceNug5R-8nGPA&usqp=CAU"
          alt="profile"
          style={{ border: active === "Profile" && "0.2px solid rgb(9, 72, 74)", padding:'1px'}}
          onClick={() => setactive("Profile")}
        />
      </footer>

      {active === "Home" ? <Home /> : null}
      {active === "Offers" ? "sdfsdf" : null}
      {active === "Search" ? "sdfsdf" : null}

      <Footer />
    </>
  );
};

export default Navbar;
