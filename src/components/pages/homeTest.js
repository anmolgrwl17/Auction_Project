import React, { Component, useEffect, useState } from 'react';
import "../Cards.css";
import CardItem from "../CardItem";
import Auctions from './Auctions';

class homeTest extends Component {

    render() {
        return (
          <Auctions auction={this.state.apiResponse} />
        )
      }

    state = {
        auctions: []
      }

      componentDidMount() {
        fetch('http://localhost:7000/api/auction')
        .then(res => res.json())
        .then((data) => {
          this.setState({ auctions: data })
        })
        .catch(console.log)
      }
    }

export default homeTest;


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