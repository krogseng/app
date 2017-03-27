import React from 'react';
//import { Route } from 'react-router-dom';
import AllColors from './AllColors';
import UserHeader from './UserHeader';

export default function MoodSelector(props) {
    return (
        <section className='container'>
            < UserHeader />
            <form>
                < input type='text' placeholder='geolocation' />
                <div>Current Weather:</div>
                < div style={{textAlign: 'center', marginTop: '20px'}}>What's your {'timeframe'} mood?</div>
                < AllColors />
                <button className='button-primary'>Submit Mood</button>
                <button >Back</button>
            </form>
        </section>
    );
}