import React, { useState } from 'react';

import Hourse from '../assets/horse.png';

const HeroSection = () => {


    return (
        <section className="about-section">


            
            <div className="container">

                <div className="about-grid">

                    <div className="about-image">

                        <img src={Hourse} alt="Horse Portrait" />

                    </div>

                    <div className="about-content">
                        
                      <div className="about-line">
  <h4 className="sub-title">Hi, This is Arvind</h4>
  <h2 className="main-title">
    WE KEEP YOUR PETS <br /> HAPPY ALL TIME
  </h2>
  
</div>
 <p className="description">
    The new generation took the responsibility of introducing new products in the broader world market.
        The new generation took the responsibility of introducing new products in the broader world market.


  </p>


                        <div className="tab-content">
                            
                        <div className="tabs">
                            <button
                                className='tab-btn'
                               
                            >
                                MISSION AND VISION
                            </button>
                            <button
                                className='tab-btn'
                                style={{backgroundColor:'white'}}
                                
                            
                            >
                                ACHIEVEMENTS
                            </button>
                        </div>
                             <p>Our company is an export oriented company with most of its sales being contributed to 12 countries including UK, Germany, Italy, Sweden, Denmark, Ireland etc. We aim to enhance customer satisfaction by sustaining to superior quality and our mission covers the entire globe.</p>

                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
