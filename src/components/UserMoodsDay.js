import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function UserMoodsDay(props) {
    return (
        <div className='container'>
            <div className='sixteen columns'>
                <div >
                    <Link to='/moods'>
                        <div className="three offset-by-one columns square">1</div>
                    </Link>
                    <div className="three offset-by-one columns square"> 1</div>
                    <div className="three offset-by-one columns square"> 1</div>
                </div>
                <div>
                    <div className="three offset-by-one columns square"> 2</div>
                    <div className="three offset-by-one columns square"> 2</div>
                    <div className="three offset-by-one columns square"> 2</div>
                </div>
                <div>
                    <div className="three offset-by-one columns square"> 3</div>
                    <div className="three offset-by-one columns square"> 3</div>
                    <div className="three offset-by-one columns square"> 3</div>
                </div>
            </div>
        </div>
    );
}