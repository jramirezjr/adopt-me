import React from 'react';
import './Body.scss';
import thumbnail from './friend-in-trouble.png';
import testimonial from './testimonial.jpg';
import girl from './girl.png';
import hug from './eric-ward-ISg37AI2A-s-unsplash.jpg';
import dogs from './2dogs.jpeg';

class Body extends React.Component{
    render(){
        
        
        return (
            <div className="body">
                <div className="volunteers">
                    <h3>VOLUNTEERS</h3>
                    <img src={girl}/>
                    <div className="description">
                    <p>Amazing people, doing the difference every single day.
                         Join us now and be part of a community that is changing the world.
                    </p>
                    <button>JOIN US</button>
                    </div>

                </div>

                <div className="testimonial">
                    <h3>TESTIMONIAL OF THE MONTH</h3>
                    <iframe  src="https://www.youtube.com/embed/kk57tfBUoJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>

                <div className="programs">
                    <ul>
                        <li>PROGRAMS</li>
                        <li>ASSOCIATED COMPANIES</li>
                    </ul>
                    <div className="post-container">
                    <div className="post">
                    <img src={thumbnail}/>
                    <div className="text-box">
                    <h5>BEHAVIOR PROGRAM</h5>
                    <p>Evaluation of each dog using specialists who determine the best training that will help your friend be a better family member.</p>
                    <button>READ MORE</button>
                    </div>
                    </div>
                    <div className="post">
                    <img src={dogs}/>
                    <div className="text-box">
                    <h5>MY NEXT FAMILY</h5>
                    <p>Are you looking for a new family member? Then, this program is for you. Don't buy, adopt her and let's give a home to these amazing friends.</p>
                    <button>READ MORE</button>
                    </div>
                    </div>
                    
                </div>
                </div>

                <div className="dogs">
                <img src={hug}/>
                </div>
            </div>
        );
    }
}

export default Body;