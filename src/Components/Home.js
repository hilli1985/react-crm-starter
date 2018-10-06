import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
            <h1>Use the navigator above to use our COOL app.</h1>
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>   
    )}
}   
export default Home
    