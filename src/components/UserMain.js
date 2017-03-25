import React from 'react';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';

export default function UserMain(props) {
    return (
        <div>
            < UserHeader />
            < UserMoodsDay />
        </div>
    );
}