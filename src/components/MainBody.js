import React from 'react';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserMain from './UserMain';
import AllUsers from './AllUsers';
import MoodSelector from './MoodSelector';
import { Route } from 'react-router-dom';

export default function MainBody({ handleSignIn }) {

    return (
        <main>
            < Route exact path='/' component={ HomePage } />
            < Route path='/signup' render={props => (<SignUp {...props} handleSignIn={handleSignIn}/>)} />
            < Route path='/signin' render={props => (<SignIn {...props} handleSignIn={handleSignIn}/>)}/>
            < Route path='/user' component={ UserMain }/>
            < Route path='/allusers' component={ AllUsers } />
            < Route path='/moods' component={ MoodSelector } />
        </main>
    );
}