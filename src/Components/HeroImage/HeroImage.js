import React from 'react';
import './HeroImage.scss';
import dogs from './dogs.jpg';

class HeroImage extends React.Component {
    render(){
        return (
            <div className="hero-image">
                <div className="text-container">
                    <div className="text">
                <h1>This is your new family!</h1>
                <button>ADOPT NOW</button>
                </div>
                </div>
            </div>
        );
    }
}

export default HeroImage;