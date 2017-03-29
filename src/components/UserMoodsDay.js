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
            console.log(this.state)
        //, () => {fetcher()} insert as callback
        })
        .catch(err => 
            console.log(err)
        );
    }

    render() {
        const { match } = this.props;
        return (
            <div className='container'>
                    <div className='row'>
                        <div className="four columns" >
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    ref='0'
                                    src='/assets/gray.svg'
                                    alt='blank mood early morning'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    ref='1'
                                    src='/assets/gray.svg'
                                    alt='blank mood mid morning'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    ref='2'
                                    src='/assets/gray.svg'
                                    alt='blank mood late morning'
                                    />
                            </Link>
                        </div>

                    </div>

                    <div className='row'>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood early afternoon'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood mid afternoon'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood late afternoon'
                                    />
                            </Link>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood early evening'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood mid evening'
                                    />
                            </Link>
                        </div>
                        <div className="four columns">
                            <Link to={`${match.url}/moods`}>
                                <input type='image'
                                    src='/assets/gray.svg'
                                    alt='blank mood late evening'
                                    />
                            </Link>
                        </div>
                    </div>
                    <UserViewBar />
            </div>
        );
    }
}