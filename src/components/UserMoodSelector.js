import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../helpers/fetcher';

export default class UserMoodSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitMoodRedirect: false,
            colors: [],
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    componentDidMount() {
        fetcher({
            path: '/color', 
            method: 'GET', 
        })
        .then(res => {
            return res.json();
        })
        .then(colors => {
            this.setState({
                ...this.state,
                colors 
            });
        })
        .catch(err => 
            console.log(err)
        );
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
        // if(this.state.submitMoodRedirect) {
        //     //redirect to main user page
        // }
        let colorRowOne = [];
        let colorRowTwo = [];
        let colorRowThree = [];
        this.state.colors.forEach((block, i) => {
            if(i < 4) {
                colorRowOne.push(block);
            } else if ( i >=4 && i < 8 ) {
                colorRowTwo.push(block);
            } else if ( i > 11) {
                return;
            } else {
                colorRowThree.push(block);
            }
        });
        let allColorRows = [];
        allColorRows.push(colorRowOne, colorRowTwo, colorRowThree);

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
                    <input type='text' placeholder='zip code' required/><span style={{fontSize: 24}}>*</span>
                    <br/>
                    <input type='text' placeholder='comment'/>

                    <div style={{textAlign: 'center', marginTop: '20px'}}>What's your {'timeframe'} mood?</div>
                    <div className='container'>
                    {allColorRows.map((row, i) => {
                        return (<div className='row' key={i}>
                            {row.map((color, i) => {
                                return (
                                    <div className="three columns" key={color._id}>
                                        <input
                                            type='image'
                                            key={color.index}
                                            ref={color.mood} 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                console.log(color.index, color.path, color.mood)
                                            } }
                                            src={color.path}
                                            alt={color.mood}
                                            />
                                    </div>
                                );
                            })}
                        </div>)
                    })}
                    </div>
                    <button className='button-primary'>Submit Mood</button>
                    <button><Link to='/user'>Back</Link></button>
                </form>
            </section>
        );
    }
}