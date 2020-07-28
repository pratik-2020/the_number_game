import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
    render(){
        return(
            <div className="container">
                <div className="header">
                    <h1>Guess the Number</h1>
                </div>
            </div>
        );
    }
}

export default Header;