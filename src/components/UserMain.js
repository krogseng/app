import React from 'react';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';

export default function UserMain(props) {
    return (
        <div>
            < UserHeader />
            < UserMoodsDay />
            User main page, will need to be a class, have title component and body component
        </div>
    );
}