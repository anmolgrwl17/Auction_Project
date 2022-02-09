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
    <div>
      {auctions.map((auction) => (
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
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
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Auctions;