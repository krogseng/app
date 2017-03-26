import React, { Component } from 'react';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Footer from './Footer';
import fetcher from '../helpers/fetcher';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            token: null,
        };
        this.hydrateAuth = this.hydrateAuth.bind(this);
    }


    hydrateAuth() {
        const token = localStorage.getItem('token');
        fetcher({
            path: '/auth/verify',
            method: 'GET',
            token: token,
        })
        .then(res => res.json())
        .then(json => {
            if(json.valid) {
                this.setState({
                    isSignedIn: true,
                    token: token,
                });
            }
        });

    }

    //fetch for colors
    render() {
        return (
            < Router >
                < div className='app'>
                    < Route path='/' component={ NavBar } />
                    < MainBody />
                    < Route path='/' component={ Footer }/>
                </div>
            </ Router >
        );
    }
}

export default App;
