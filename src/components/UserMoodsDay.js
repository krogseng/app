import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function UserMoodsDay(props) {
    return (
        <div className='container'>
            <div className='row'> 
                <div className="four columns">
                    <Link to ='/moods'>
                        <img src='/assets/gray.svg'/>
                    </Link>
                </div>
                <div className="four columns">
                    <Link to ='/moods'>
                        <img src='/assets/gray.svg'/>
                    </Link>
                </div>
                <div className="four columns">
                    <Link to ='/moods'>
                        <img src='/assets/gray.svg'/>
                    </Link>
                </div>
            </div>
            <div className='row'> 
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
            </div>
            <div className='row'> 
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
                <div className="four columns">
                    <img src='/assets/gray.svg'/>
                </div>
            </div>
        </div>
    );
}