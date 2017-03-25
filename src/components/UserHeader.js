import React from 'react';

export default function UserHeader(props) {
    return (
        <section className='container title'>
            <div>
                <h1>USERNAME</h1>
                <h5>Date</h5>
                <span>Today's weather: </span>
                <span>Location: </span>
            </div>
        </section>
    );
}