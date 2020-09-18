//const { ContextReplacementPlugin } = require("webpack");
import React, { Component } from 'react';

// Code SimpleComponent Here

class SimpleComponent extends Component {
    state = { mood: 'happy' }

    render() { 
    return ( <div onClick={this.handleClick}>{this.state.mood}</div> );
    }

    handleClick = () =>  this.setState({mood: 'sad'})
}
 
export default SimpleComponent;