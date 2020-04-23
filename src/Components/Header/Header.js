import React from 'react';
import logo from './logo.png';
import './Header.scss';

class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="site">
                <img src={logo} className="header-logo" alt="logo"/><h1>Adoptme.Org</h1>
                </div>

                <div className="links">
                <ul>
                <li><b>WHAT</b> we do</li>
                <li><b>WHO</b> we are</li>
                <li><b>EVENTS</b> adoption</li>
                </ul>
                </div>
            </div>
        );
    }
}

export default Header;