import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import UserViewBar from './UserViewBar';
import fetcher from '../helpers/fetcher';

export default class UserMoodsDay extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            chosenBlock: '',
            src: [
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg',
                '/assets/gray.svg'
                ]
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    render() {
        const { match } = this.props;
        let rowOne = [];
        let rowTwo = [];
        let rowThree = [];
        this.props.blocks.forEach((block, i) => {
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
                    }}>
                    <input type='date'ref='searchDate'/>
                    <button>Find</button>
                </form>
                {allRows.map((row, i)=> {
                    return (<div className='row' key={i}>
                        {row.map((block, i) => {
                            return (
                                <div className="four columns" key={block._id}>
                                    <Link to={`${match.url}/moods`}>
                                        <input 
                                            onClick={(e) => {console.log(block._id, block.timeFrame)}}
                                            type='image'
                                            key={i}
                                            ref={block.blockNumber}
                                            src={this.state.src[i]}
                                            alt={`${block.timeFrame}`}
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