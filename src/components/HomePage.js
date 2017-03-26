import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function HomePage(props) {
    return (
        <section className='container'>
            <div>
                <div className='title'>
                    <h3>your mood,</h3>  
                    <h1>                  
                        <a style={{color: '#8181FC'}}>H</a>                     
                        <a style={{color: '#6CB1BC'}}>U</a> 
                        <a style={{color: '#F2B451'}}>E</a>
                        <a style={{color: '#E55C5C'}}>D</a>
                    </h1>
                </div>
                <div className='container'>
                    <div className='row'> 
                        <div className="three columns">
                            <img src='/assets/blue1.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/green1.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/yellow1.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/red1.svg'/>
                        </div>
                    </div>
                    <div className='row'> 
                        <div className="three columns">
                            <img src='/assets/blue2.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/green2.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/yellow2.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/red2.svg'/>
                        </div>
                    </div>
                    <div className='row'> 
                        <div className="three columns">
                            <img src='/assets/blue3.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/green3.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/yellow3.svg'/>
                        </div>
                        <div className="three columns">
                            <img src='/assets/red3.svg'/>
                        </div>
                    </div>
                </div>
            </div>
            <h6>record your moods with color</h6>
        </section>
    );
}
