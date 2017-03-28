import React from 'react';

export default function UserHeader(props) {
    //logic to determine how date should be displayed (day vs week vs month)
    console.log(props);

    
    return (
        <section className='container title'>
            <div>
                <h3>{props.user.username}</h3>
                <h5>Date</h5>
            </div>
        </section>
    );
}