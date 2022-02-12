import React, { Component, useEffect, useState } from "react";
import "../Cards.css";
import CardItem from "../CardItem";
import Auctions from "./Auctions";

class homeTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:7000/api/auction")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="cards">
        <h1>Auction</h1>{" "}
        {items.map((auction) => (
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
}

export default homeTest;

// class homeTest extends Component {

//     render() {
//         return (
//           <Auctions auction={this.state.apiResponse} />
//         )
//       }

//     state = {
//         auctions: []
//       }

//       componentDidMount() {
//         fetch('http://localhost:7000/api/auction')
//         .then(res => res.json())
//         .then((data) => {
//           this.setState({ auctions: data })
//         })
//         .catch(console.log)
//       }
//     }

//     constructor(props) {
//         super(props);
//         this.state = { apiResponse: "" };
//     }

//     callAPI() {
//         fetch("http://localhost:7000/api/auction")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
//     }

//     componentWillMount() {
//         this.callAPI();
//     }

// render() {
//     return (
//         <>
//     <div className="cards__container">
//         <div className="cards__wrapper">
//             <ul className="cards__items">
//                 <CardItem
//                 src="images/BMW_M4.jpg"
//                 head={this.state.apiResponse[0]['id']}
//                 text="6-Speed Manual, Texas-Kept, Unmodified"
//                 tag="No Reserve"
//                 city="Lucknow, UP"
//                 label="Bid Price"
//                 timeLeft=" 1 Day "
//                 bidPrice=" ₹ 17,00,000"
//                 path="/CarPage"
//                 />
//                 </ul>
//                 </div>
//                 </div>
//                 <p>{this.state.apiResponse}</p>
//                 </>
//             );
// }
// }
