import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import UserViewBar from './UserViewBar';
import fetcher from '../helpers/fetcher';

export default class UserMoodsDay extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            chosenBlock: '',
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const token = localStorage.getItem('token');        
        fetcher({ 
            path: '/block', 
            method: 'GET', 
            token: token 
        })
        .then(res => {
            return res.json();
        })
        .then(blocks => {
            this.setState({
                ...this.state,
                blocks 
            });
        })
        .catch(err => 
            console.log(err)
        );
    }

    render() {
        const { match } = this.props;
        let rowOne = [];
        let rowTwo = [];
        let rowThree = [];
        this.state.blocks.forEach((block, i) => {
            if(i < 3) {
                rowOne.push(block);
            } else if ( i >=3 && i < 6 ) {
                rowTwo.push(block);
            } else if ( 1 > 8) {
                return;
            } else {
                rowThree.push(block);
            }
        });
        let allRows = [];
        allRows.push(rowOne, rowTwo, rowThree);
        return (
            <div className='container'>
                {allRows.map(row => {
                    return (<div className='row'>
                        {row.map(block => {
                            return (
                                <div className="four columns">
                                    <Link to={`${match.url}/moods`}>
                                        <input 
                                            onClick={(e) => {console.log(block._id, block.timeFrame)}}
                                            key={block._id}
                                            type='image'
                                            ref={block.blockNumber}
                                            src='/assets/gray.svg'
                                            alt={`blank mood ${block.timeFrame}`}
                                            />
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