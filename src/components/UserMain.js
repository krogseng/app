import React, {Component} from 'react';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';
import fetcher from '../helpers/fetcher';

export default class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    //fetcher for user id?

    render() {
        return (
            <div>
                < UserHeader />
                < UserMoodsDay />
            </div>
        );
    }
}