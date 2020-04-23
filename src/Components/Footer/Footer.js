import React from 'react';
import logo from '../Header/logo.png';
import './Footer.scss';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <div className="footer-info">
                    <div className="site">
                <img src={logo} className="footer-logo" alt="logo"/>
                <h1>Adoptme.org</h1>
                </div>
                <p className="address">Main St #1234<br/>Amazing City 56789</p>
                <p className="unsplash">Some images were taken from unsplash.com</p>
                
                </div>

                <div className="footer-links">
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

export default Footer;