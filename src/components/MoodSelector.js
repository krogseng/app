import React from 'react';
//import { Route } from 'react-router-dom';
import AllColors from './AllColors';
import UserHeader from './UserHeader';

export default function MoodSelector(props) {
    return (
        <section>
            < UserHeader />
            < div>choose your mood:</div>
            < AllColors />
        </section>
    );
}