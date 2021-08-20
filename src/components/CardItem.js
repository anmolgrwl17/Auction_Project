import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <div className='bid-bar'>
            <ul className="bid-stats">
              <li>ABCD</li>
         <li className="time-left"><span className="tag sr-only">Time Left</span><span className="value"><span className="ticking under-ten under-hour">00:46</span></span></li>
         <li className="high-bid"><span className="tag">Bid</span><span className="value"><span className="bid-value"><span className="dollar">$</span>5,500</span></span></li>
      </ul>
            </div>
            <img
              className='cards__item__img'
              alt='Car Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__head'>{props.head}</h5>
            <p className='cards__item__text'>{props.text}</p>
            <p className='cards__item__city'>{props.city}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;