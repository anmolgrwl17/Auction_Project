import React, { Component } from 'react';

class homeTest extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:7000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

render() {
    return (
    <h1>{this.state.apiResponse}</h1>
    );
}
}

export default homeTest;