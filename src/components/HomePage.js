import React from 'react';
import AllColors from './AllColors';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                < AllColors />
            </div>
            <h6>record your moods with color</h6>
        </section>
    );
}
