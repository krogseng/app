import React, { Component } from 'react';
//import fetcher from '../helpers/fetcher';

export default class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //store all user info
        };
    }

    render() {
        return (
            <div>
                <select >
                    <option>date</option>
                </select>
                <select >
                    <option>city</option>
                </select>
                <select >
                    <option>state</option>
                </select>     
                <select >
                    <option>temperature</option>
                </select>                 
                <select >
                    <option>weather</option>
                </select>  
                All Users Page
            </div>
        );
    }
}