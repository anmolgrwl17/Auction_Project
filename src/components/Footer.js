import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div id="autos-reviews">
        <div className="container-fluid">
          <div className="review-wrap">
            <div className="section why">
              <h6>Why AuctionMole?</h6>
              <ul className='footerStats'>
                <li><strong><span>5,500</span></strong><br /><span>Auctions completed</span></li>
                <li><strong><span>$100M+</span></strong><br /><span>Value of cars sold</span></li>
                <li><strong><span>85%+</span></strong><br /><span>Sell-through rate</span></li>
                <li><strong><span>200k+</span></strong><br /><span>Registered members</span></li>
              </ul>
            </div>
            <div className="section stories">
              <h6>Success Stories</h6>
              <div className="review"><span className="user">
                <span className="reviewer-pic review1"></span>Jason M.</span>
                <span className="listing">2012 Audi S5 - $21,000</span>
                <span className="blurb">“I just think the whole experience was great. The buyer of my car and I will likely exchange Christmas cards this year!”</span>
              </div>
            </div>
            <div className="section daily">
              <h6>Get the Daily Email</h6>
              <form method="post" className="" autocomplete="off" novalidate="">
                <div className="d-flex flex-column flex-sm-row">
                  <fieldset className="form-group mb-0">
                    <label className="placeholder-shown" for="email">Email address</label>
                    <input className="form-control" id="footer-email" name="email" data-lpignore="true" type="email" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="" />
                  </fieldset>
                  <button className="btn btn-primary ">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-container'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
            <img src='../images/AuctionMoleGold.png' />
          </Link>
          <p class="aboutText">AuctionMole - Find your right price. Hit the mole at your right price. Happy Bidding!</p>
        </div>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Videos</h2>
              <Link to='/'>Submit Video</Link>
              <Link to='/'>Ambassadors</Link>
              <Link to='/'>Agency</Link>
              <Link to='/'>Influencer</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
          <small class='website-rights'>© Copyright 2022 AuctionMole LLC</small>
        </section>
      </div>
    </>
  );
}

export default Footer;
