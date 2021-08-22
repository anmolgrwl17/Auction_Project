import React from 'react';
import { Link } from 'react-router-dom';

function Tag(tag) {
    const tagPresent = tag;
    if (tagPresent == 'No Reserve') {
        return 'cards__item__tag';
    }
    return 'cards__item__tag__none';
}

function DayPrice(bidPrice,timeLeft) {
    const price = bidPrice;
    const day = timeLeft;
    return '' + day+" Bid: "+price;
}

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={DayPrice(props.bidPrice,props.timeLeft)}>

            <img
              className='cards__item__img'
              alt='Car Image'
              src={props.src}
            />
          </figure>
          
          <div className= 'bid-bar-mini'>
            <div className= 'bar-bg'>
              <div className='bid-bar'>
                <div className="bid-stats">
                  <div><i class="far fa-clock"> :</i>{props.timeLeft}</div>
                  <div>&nbsp;&nbsp;Bid : <i class="fas fa-rupee-sign">{props.bidPrice}</i></div>
                </div>
              </div>
            </div>
          </div>

          <div className='cards__item__info'>
            <h5 className='cards__item__head'>{props.head}</h5>
            <p className='cards__item__text'>{props.text}</p>
            <div className='cards__item__cityAndTag'>
            <p className='cards__item__city'>{props.city}</p>
            <p className={Tag(props.tag)}>{props.tag}</p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;