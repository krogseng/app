import React, {Component} from 'react';
//import { Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';
import fetcher from '../helpers/fetcher';

export default class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount() {
        console.log('this token',this.props.token);
        fetcher({ 
            path: '/user', 
            method: 'GET', 
            token: this.props.token 
        })
        .then(res => {

            return res.json();
        })
        .then(user => {
            this.setState({
                user
            });

        })
        .catch(err => 
            console.log(err)
        );
    }

    render() {
        return (
            <div>
                < UserHeader />
                <span>Today's weather: </span>
                <span>Location: </span>
                <span>{this.state.user.username} </span>
                < UserMoodsDay />
            </div>
        );
    }
}