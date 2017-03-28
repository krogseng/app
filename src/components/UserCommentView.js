import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCommentView({ match }) {
    return (
        <div>
            UserCommentView
            <button><Link to='/user'>Back</Link></button>
        </div>
    );
}