import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMonthView({ match }) {
    return (
        <div>
            UserMonthView
            <button><Link to='/user'>Back</Link></button>
        </div>
    );
}