import React from 'react';
import { Link } from 'react-router-dom';

export default function UserViewBar({ match }) {
    console.log(match);
    return (
        <div>
            <div>
                <button><Link to={`user/comments`}>Comment View</Link></button>
                <button><Link to={`user/week`}>Week View</Link></button>
                <button><Link to={`user/month`}>Month View</Link></button>
            </div>
        </div>
    );
}
