import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMoodsDay(props) {
    return (
        <div className='container'>
            <div className='row'> 
                <div className="four columns">
                    <Link to='/moods'>
                        <img 
                            src='/assets/gray.svg'
                            alt='blank mood early morning'
                        />
                    </Link>
                </div>
                <div className="four columns">
                    <Link to='/moods'>
                        <img 
                            src='/assets/gray.svg'
                            alt='blank mood mid morning'
                        />
                    </Link>
                </div>
                <div className="four columns">
                    <Link to='/moods'>
                        <img 
                            src='/assets/gray.svg'
                            alt='blank mood late morning'
                        />
                    </Link>
                </div>
            </div>
            <div className='row'> 
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood early afternoon'
                    />
                </div>
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood mid afternoon'
                    />
                </div>
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood late afternoon'
                    />
                </div>
            </div>
            <div className='row'> 
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood early evening'
                    />
                </div>
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood mid evening'
                    />
                </div>
                <div className="four columns">
                    <img 
                        src='/assets/gray.svg'
                        alt='blank mood late evening'
                    />
                </div>
            </div>
        </div>
    );
}