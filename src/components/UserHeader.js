import React from 'react';

export default function UserHeader(props) {
    // logic to determine how date should be displayed (day vs week vs month)
    // let selectedDate;
    // console.log('props',this.props);
    // if(this.props) {
    //     selectedDate = this.props.date;
    // } else {
    //     selectedDate = 'Choose date:';
    // }
    return (
        <section className='container title'>
            <div>
                <h3>{props.user.username}</h3>
                <h5>selectedDate</h5>
            </div>
        </section>
    );
}