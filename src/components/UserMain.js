import React, {Component} from 'react';
//import { Route } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';
//import fetcher from '../helpers/fetcher';

export default class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    // handleClick() {
    //     return (
            
    //     );
    // }

    render() {
        return (
            <div>
                < UserHeader />
                <span>Today's weather: </span>
                <span>Location: </span>
                < UserMoodsDay />
            </div>
        );
    }
}