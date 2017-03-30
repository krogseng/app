import React from 'react';
import { Link } from 'react-router-dom';

export default function UserCommentView(props) {
    console.log(props.allMoods[0].comment);
    const dayMoods = props.allMoods;

    return (
        <div className='container'>
            {dayMoods.map((mood, i) => {
                if(mood.userId) {
                    return (
                        <div key={i} className='row'>
                            <div className='two columns'>
                                <span>{mood.block.timeFrame}</span>
                            </div>
                            <div className='two columns'>
                                <img src={mood.color.path}/>
                            </div>
                            <span>{mood.comment}</span>
                        </div>
                    );
                } else {
                    console.log(mood);
                    return (
                        <div key={i} className='row'>
                            <div className='two columns'>
                                <span className='text-center'>{mood.timeFrame}</span>
                            </div>
                            <div className='two columns'>
                                <img src={props.src} />
                            </div>
                            <span style={{color: 'lightGray'}}>no mood logged</span>
                        </div>
                    );  
                }
            })}
            <button><Link to='/user'>Back</Link></button>
        </div>
    );
}