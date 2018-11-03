import React, { Component } from 'react';
import logo from '../crm.svg';
import '../App.css';



class Home extends Component {
    render() {
        return (
            <div>
            <header className="App-header">
            <div className="container-home">

            <img src={logo} className="App-logo" alt="logo" />
            <div className="credit">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </div>
            </header>
            </div>   
    )}
}   
export default Home
    