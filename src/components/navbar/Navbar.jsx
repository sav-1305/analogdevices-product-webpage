import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/analog.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wsensor">About</a></p>
  <p><a href="#company">Analog Devices</a></p>
  <p><a href="#features">Features</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sensor__navbar">
      <div className="sensor__navbar-links">
        <div className="sensor__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="sensor__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="sensor__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="sensor__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} /> }

          {toggleMenu && (
            <div className="sensor__navbar-menu_container scale-up-center">
              <div className="sensor__navbar-menu_container-links"></div>
                <Menu />
                <div className="sensor__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign Up</button>
                </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar
