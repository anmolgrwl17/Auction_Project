import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>

      <div className='top-bar'>

<div className='dropdown-left'>
<div className="dropdown">
        <span>Auction Type</span>
        <div class="dropdown-content">
          <li><a href="https://www.google.com" tabindex="0" role="menuitem" className="dropdown-item">All</a></li>
          <li><a href="https://www.google.com" data-filter="1" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Bank Seized</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Salvage</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Used</a></li>
        </div>
      </div>

      <div className="dropdown">
        <span>Year</span>
        <div class="dropdown-content">
<div className="year-options">
  <fieldset className="form-group">
  <select className="form-control year-style" name="start_year">
    <option value="1981" selected="selected">1981</option>
    <option value="1982">1982</option><option value="1983">1983</option>
    <option value="1984">1984</option><option value="1985">1985</option>
    <option value="1986">1986</option><option value="1987">1987</option>
    <option value="1988">1988</option><option value="1989">1989</option>
    <option value="1990">1990</option><option value="1991">1991</option>
    <option value="1992">1992</option><option value="1993">1993</option>
    <option value="1994">1994</option><option value="1995">1995</option>
    <option value="1996">1996</option><option value="1997">1997</option>
    <option value="1998">1998</option><option value="1999">1999</option>
    <option value="2000">2000</option><option value="2001">2001</option>
    <option value="2002">2002</option><option value="2003">2003</option>
    <option value="2004">2004</option><option value="2005">2005</option>
    <option value="2006">2006</option><option value="2007">2007</option>
    <option value="2008">2008</option><option value="2009">2009</option>
    <option value="2010">2010</option><option value="2011">2011</option>
    <option value="2012">2012</option><option value="2013">2013</option>
    <option value="2014">2014</option><option value="2015">2015</option>
    <option value="2016">2016</option><option value="2017">2017</option>
    <option value="2018">2018</option><option value="2019">2019</option>
    <option value="2020">2020</option><option value="2021">2021</option>
    <option value="2022">2022</option></select>
    </fieldset>
    <br></br>
    <span>&nbsp;To&nbsp;</span>
    <br></br>
    <fieldset className="form-group ">
      <select className="form-control year-style" name="end_year">
        <option value="1981">1981</option><option value="1982">1982</option>
        <option value="1983">1983</option><option value="1984">1984</option>
        <option value="1985">1985</option><option value="1986">1986</option>
        <option value="1987">1987</option><option value="1988">1988</option>
        <option value="1989">1989</option><option value="1990">1990</option>
        <option value="1991">1991</option><option value="1992">1992</option>
        <option value="1993">1993</option><option value="1994">1994</option>
        <option value="1995">1995</option><option value="1996">1996</option>
        <option value="1997">1997</option><option value="1998">1998</option>
        <option value="1999">1999</option><option value="2000">2000</option>
        <option value="2001">2001</option><option value="2002">2002</option>
        <option value="2003">2003</option><option value="2004">2004</option>
        <option value="2005">2005</option><option value="2006">2006</option>
        <option value="2007">2007</option><option value="2008">2008</option>
        <option value="2009">2009</option><option value="2010">2010</option>
        <option value="2011">2011</option><option value="2012">2012</option>
        <option value="2013">2013</option><option value="2014">2014</option>
        <option value="2015">2015</option><option value="2016">2016</option>
        <option value="2017">2017</option><option value="2018">2018</option>
        <option value="2019">2019</option><option value="2020">2020</option>
        <option value="2021">2021</option><option value="2022" selected="selected">2022</option>
        </select>
        </fieldset>
        </div>
        </div>
      </div>

      <div className="dropdown">
        <span>Transmission</span>
        <div className="dropdown-content">
          <li><a href="https://www.google.com" tabindex="0" role="menuitem" className="dropdown-item">All</a></li>
          <li><a href="https://www.google.com" data-filter="1" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Automatic</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Manual</a></li>
        </div>
      </div>


      <div className="dropdown">
        <span>Body Style</span>
        <div className="dropdown-content">
          <li><a href="https://www.google.com" tabindex="0" role="menuitem" className="dropdown-item">All</a></li>
          <li><a href="https://www.google.com" data-filter="1" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Coupe</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Convertible</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Hatchback</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Sedan</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">SUV/Crossover</a></li>
          <li><a href="https://www.google.com" data-filter="2" tabindex="0" role="menuitem" className="btn btn-link  dropdown-item">Truck</a></li>
        </div>
      </div>
      </div>

      <div className='sort-right'>
        <ul className="select-ul filter-sorts-wrapper">
          <li><a className="li-item" href="">Ending Soon</a></li>
          <li><a className="li-item" href="">Newly Listed</a></li>
          <li><a className="li-item" href="">No Reserve</a></li>
          <li><a className="li-item" href="">Lowest Milage</a></li>
        </ul>
      </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/BMW_M4.jpg'
              head= '2017 BMW M4 Coupe'
              text='6-Speed Manual, Texas-Kept, Unmodified'
              tag='No Reserve'
              city = 'Lucknow, UP'
              label= 'Bid Price'
              timeLeft= ' 1 Day '
              bidPrice= ' ₹ 17,00,000'
              path='/CarPage'
            />
            <CardItem
              src='images/Jaguar_F-Type.jpg'
              head= '2017 Jaguar F-Type Convertible'
              text='~31,400 Miles, Supercharged V6, Unmodified'
              city = 'Lucknow, UP'
              path='/services'
            />
              <CardItem
              src='images/BMW_M6.jpg'
              head= '2014 BMW M6 Gran Coupe'
              text='560-hp Turbo V8, No Major Modifications, Mostly California-Kept'
              tag='No Reserve'
              city = 'Lucknow, UP'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/BMW_540i.jpg'
              head= '2020 BMW 540i'
              text='~7,700 Miles, 1 Owner, Unmodified, California-Kept'
              city = 'Lucknow, UP'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/Mercedes_C63.jpg'
              head= '2014 Mercedes-Benz C63 AMG'
              text='1 Owner, ~7,300 Miles, Naturally-Aspirated V8 Power, Mars Red Exterior, Unmodified'
              city = 'Lucknow, UP'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/Tesla_ModelX.jpg'
              head= '2016 Tesla Model X P90D'
              text='1 Owner, ~9,900 Miles, Nevada-Kept, Highly Optioned'
              city = 'Lucknow, UP'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Cards;