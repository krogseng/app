import React from 'react';
import HomePage from './HomePage';
import SignIn from './SignIn';
import UserMain from './UserMain';
import AllUsers from './AllUsers';
import { Route } from 'react-router-dom';

export default function MainBody(props) {
    return (
        <main>
            < Route exact path='/' component={ HomePage } />
            < Route path='/signin' component={ SignIn }/>
            < Route path='/user' component={ UserMain }/>
            < Route path='/allusers' component={ AllUsers } />
        </main>
    );
}