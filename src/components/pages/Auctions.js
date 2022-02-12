import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Cards.css";
import CardItem from "../CardItem";

function Auctions() {
  const [auctions, setauctions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/auction/")
      .then((res) => {
        console.log(res);
        setauctions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="cards">
      {auctions.map((auction, index) => (
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <li className="auctionLi" key={index}>
                <CardItem
                  src={auction.main_photo}
                  head={auction.title}
                  text={auction.sub_title}
                  tag="No Reserve"
                  city={auction.location}
                  label="Bid Price"
                  timeLeft=" 1 Day "
                  bidPrice={auction.current_bid}
                  path="/CarPage"
                />
              </li>
              {/* <CardItem
              src="images/Jaguar_F-Type.jpg"
              head="2017 Jaguar F-Type Convertible"
              text="~31,400 Miles, Supercharged V6, Unmodified"
              city="Lucknow, UP"
              path="/services"
            />
            <CardItem
              src="images/BMW_M6.jpg"
              head="2014 BMW M6 Gran Coupe"
              text="560-hp Turbo V8, No Major Modifications, Mostly California-Kept"
              tag="No Reserve"
              city="Lucknow, UP"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/BMW_540i.jpg"
              head="2020 BMW 540i"
              text="~7,700 Miles, 1 Owner, Unmodified, California-Kept"
              city="Lucknow, UP"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/Mercedes_C63.jpg"
              head="2014 Mercedes-Benz C63 AMG"
              text="1 Owner, ~7,300 Miles, Naturally-Aspirated V8 Power, Mars Red Exterior, Unmodified"
              city="Lucknow, UP"
              label="Adventure"
              path="/products"
            />
           <CardItem
              src="images/Tesla_ModelX.jpg"
              head="2016 Tesla Model X P90D"
              text="1 Owner, ~9,900 Miles, Nevada-Kept, Highly Optioned"
              city="Lucknow, UP"
              label="Adrenaline"
              path="/sign-up"
            /> */}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Auctions;
