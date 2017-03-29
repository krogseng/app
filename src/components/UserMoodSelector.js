import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../helpers/fetcher';

export default class UserMoodSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitMoodRedirect: false,
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    doFetchMoodPost(zipcode, mood) {
        const token = localStorage.getItem('token');

        return fetcher({
            path: '/user/moods/add',
            method: 'POST',
            body: {
                // block,
                // date,
                zipcode,
                mood,
            },
            token,
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            if(json.error) {
                console.log('error', json.error);
                return;
            }
            return mood;
        });
    }

    render() {
        return (
            <section className='container'>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        const zipcode = this.refs.zipcode.value;
                        const mood = this.refs.mood.value;

                        this.doFetchMoodPost(zipcode, mood)
                            .then((token) => {
                                this.props.handleMoodSubmit(token);
                                this.setState({
                                    submitMoodRedirect: true,
                                });
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        e.target.reset();
                    }}>
                    <input type='text' placeholder='zip code'/>
                    <div style={{textAlign: 'center', marginTop: '20px'}}>What's your {'timeframe'} mood?</div>
                    <div className='container'>
                        <div className='row'>
                            <div className="three columns">
                                <input
                                    type='image'
                                    ref='first' onClick={(e)=> {
                                        e.preventDefault();
                                        console.log(this.refs.first.value)
                                    }}
                                    src='/assets/blue1.svg'
                                    alt='sad, dark blue'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/green1.svg'
                                    alt='relaxed, dark green'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/yellow1.svg'
                                    alt='happy, dark yellow'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/red1.svg'
                                    alt='angry, dark red'
                                    />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="three columns">
                                <img
                                    src='/assets/blue2.svg'
                                    alt='stressed, medium blue'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/green2.svg'
                                    alt='tired, medium green'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/yellow2.svg'
                                    alt='excited, medium yellow'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/red2.svg'
                                    alt='fearful, medium red'
                                    />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="three columns">
                                <img
                                    src='/assets/blue3.svg'
                                    alt='frustrated, light blue'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/green3.svg'
                                    alt='bored, light green'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/yellow3.svg'
                                    alt='content, light yellow'
                                    />
                            </div>
                            <div className="three columns">
                                <img
                                    src='/assets/red3.svg'
                                    alt='anxious, light red'
                                    />
                            </div>
                        </div>
                    </div>
                    <button className='button-primary'>Submit Mood</button>
                    <button><Link to='/user'>Back</Link></button>
                </form>
            </section>
        );
    }
}