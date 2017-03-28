import React from 'react';
import { Link } from 'react-router-dom';
import AllColors from './AllColors';
//import UserHeader from './UserHeader';

export default function UserMoodSelector({ match }) {
    return (
        <section className='container'>
            <form>
                < input type='text' placeholder='zip code' />
                <div>Current Weather:</div>
                < div style={{textAlign: 'center', marginTop: '20px'}}>What's your {'timeframe'} mood?</div>
                < AllColors />
                <button className='button-primary'>Submit Mood</button>
                <button><Link to='/user'>Back</Link></button>
            </form>
        </section>
    );
}