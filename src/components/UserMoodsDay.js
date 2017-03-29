import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import UserViewBar from './UserViewBar';
import fetcher from '../helpers/fetcher';

export default class UserMoodsDay extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            chosenBlock: '',
            savedMoods: [],
            blocks: [],
            allMoods: [],
            src: '/assets/gray.svg',

        };
    }
    //state will have selected colors

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    //handler for mood selector goes here
    componentDidMount() {
        const token = localStorage.getItem('token');
        fetcher({
            path: '/block', 
            method: 'GET', 
        })
        .then(res => {
            return res.json();
        })
        .then(blocks => {
            this.setState({
                ...this.state,
                blocks ,
                allMoods: blocks,
            });
        })
        .then (() => {
            fetcher({
                path: `/user/moods?date=2017-03-29`, 
                method: 'GET', 
                token
            })
            .then(res => {
                return res.json();
            })
            .then(moods => {
                const allMoods = [...this.state.allMoods];

                moods.forEach((mood) => {
                    allMoods[mood.block.blockNumber] = mood;
                })

                this.setState({
                    ...this.state,
                    savedMoods: moods,
                    allMoods,
                });
                console.log('MOODS', moods);
            })
            .catch(err => 
                console.log(err)
            );
        });
    }

    render() {
        if(!this.state.allMoods) {
            return <div>loading</div>
        }
        const { match } = this.props;
        let rowOne = [];
        let rowTwo = [];
        let rowThree = [];
        this.state.allMoods.forEach((block, i) => {
            if(i < 3) {
                rowOne.push(block);
            } else if ( i >=3 && i < 6 ) {
                rowTwo.push(block);
            } else if ( i > 8) {
                return;
            } else {
                rowThree.push(block);
            }
        });
        let allRows = [];
        allRows.push(rowOne, rowTwo, rowThree);
        return (
            <div className='container'>
                <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(this.refs.searchDate.value)
                        this.props.handleDateSubmit(this.refs.searchDate.value);
                        console.log('check date',this.state)
                    }}>
                    <input type='date'ref='searchDate' required/><span style={{fontSize: 24}}>*</span>
                    <button>Find</button>
                </form>
                {allRows.map((row, i)=> {
                    return (<div className='row' key={i}>
                        {row.map((block, i) => {
                            return (
                                <div className="four columns" key={block._id}>
                                    <Link to={`${match.url}/moods`}>
                                        {block.timeFrame &&
                                            (<input 
                                                onClick={(e) => {console.log(block._id, block.timeFrame)}}
                                                type='image'
                                                key={i}
                                                ref={block.blockNumber}
                                                src={this.state.src}
                                                alt={`${block.timeFrame}`}
                                            />)
                                        }
                                        {block.color &&
                                            (<input 
                                                onClick={(e) => {console.log(block.color)}}
                                                type='image'
                                                key={i}
                                                ref={block.block.blockNumber}
                                                src={block.color.path}
                                                alt={`${block.block.timeFrame}`}
                                            />)
                                        }
                                    </Link>
                                </div>
                            )
                        })}
                    </div>)
                    })
                }
                <UserViewBar />
            </div>
        );
    }
}