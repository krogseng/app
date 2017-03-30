import React from 'react';
import { Link } from 'react-router-dom';

export default function UserWeekView({ match }) {
    return (
        <div>
            UserWeekView
            <button><Link to='/user'>Back</Link></button>
        </div>
    );
}