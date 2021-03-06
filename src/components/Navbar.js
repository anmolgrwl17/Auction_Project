import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../images/AuctionMoleFinal.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
  
    <div className='navbarLeft'>
      <div className='navbar-container'>
        
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><img className="logo" src='../images/AuctionMoleGold.png'/></Link>
        
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <div className="dropdown-nav">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Auctions</Link>
              <div className="dropdown-nav-content">
                <li><a>Live Auction</a></li>
                <li><a>Past Results</a></li>
              </div>
            </div>
          </li>
          
          <li className='nav-item'>
            <button className="dropbtn">Sell a Car</button>
          </li>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>What's Auction</Link>
          </li>

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Daily Email</Link>
          </li>


            <div className="search_wrap search_wrap_3 nav-item">
              <div className="search_box">
                <input type="text" className="input" placeholder="What are you looking for?" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1"/>
                <div className="btn btn_common">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          

            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link>
            {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
            </ul>
          

      </div>
      </div>
    
  );
}

export default Navbar;