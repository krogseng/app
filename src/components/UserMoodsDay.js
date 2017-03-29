import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import UserViewBar from './UserViewBar';
import fetcher from '../helpers/fetcher';
import { formatDate } from '../helpers/formatDate';

export default class UserMoodsDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBlock: '',
            savedMoods: [],
            blocks: [],
            allMoods: [],
            src: '/assets/gray.svg',
            date: ''
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    //handler for mood selector goes here

    doFetchDate(date) {
        const token = localStorage.getItem('token');
        fetcher({
            path: `/user/moods?date=${date}`, 
            method: 'GET', 
            token
        })
        .then(res => {
            return res.json();
        })
        .then(moods => {
            const allMoods = [...this.state.blocks];

            moods.forEach((mood) => {
                allMoods[mood.block.blockNumber] = mood;
            })

            this.setState({
                ...this.state,
                savedMoods: moods,
                allMoods,
                date,
            });
            console.log('MOODS', this.state.savedMoods);
        })
        .catch(err => 
            console.log(err)
        );
    }

    handleDateSubmit(date) {
        if(date) {
            this.doFetchDate(date);
        }
    }

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
            let date = new Date();
            let month = '' + (date.getMonth() + 1);
            let day = '' + date.getDate();
            let year = date.getFullYear();
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            date = [year, month, day].join('-');

            this.doFetchDate(date);
            this.setState({
                ...this.state,
                date
            })
        });
    }

    render() {
        const formattedDate = formatDate(this.state.date);
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
                <h5>{formattedDate}</h5>
                <form onChange={(e) => {
                        e.preventDefault();
                        this.handleDateSubmit(this.refs.searchDate.value);
                    }}>
                    <input type='date'ref='searchDate' required/><span style={{fontSize: 24}}>*</span>
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