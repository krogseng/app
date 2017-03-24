import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/signin'>signin</Link></li>
                <li><Link to='/allusers'>all users</Link></li>
                <li><Link to='/user'>user</Link></li>
            </ul>
        </nav>
    );
}