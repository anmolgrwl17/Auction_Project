import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/CarVideo.mp4' autoPlay loop muted />
      <h1>Say Hello to your next Awesome Vehicle!</h1>
      <p>Hasslefree Auction of Bank seized, salvage, used vehicles at your doorstep!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
          WHAT IS AUCTION <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;