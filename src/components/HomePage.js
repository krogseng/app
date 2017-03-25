import React from 'react';

export default function HomePage(props) {
    return (
        <section>
            <div className='container'>
                <div className='title'>
                    <h2>YOUR MOOD,</h2>  
                    <h1>                  
                        <a>H</a>                     
                        <a>U</a> 
                        <a>E</a>
                        <a>D</a>
                    </h1>
                    <h6>record your moods in color</h6>
                </div>
                <div className='sixteen columns'>
                    <div >
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                    </div>
                    <div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                    </div>
                    <div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                        <div className="three columns square"> 1</div>
                    </div>
                </div>
            </div>
        </section>
    );
}