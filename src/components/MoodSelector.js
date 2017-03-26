import React from 'react';
import { Route } from 'react-router-dom';

export default function MoodSelector(props) {
    return (
        <section>
            <div>choose your mood:</div>
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
        </section>
    );
}