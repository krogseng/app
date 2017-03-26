import React, { Component } from 'react';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
