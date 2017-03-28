import React from 'react';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import UserMain from './UserMain';
import AllUsers from './AllUsers';
import MoodSelector from './MoodSelector';
import { Route } from 'react-router-dom';

export default function MainBody({ handleSignIn, isSignedIn, token }) {
    console.log('MB', token);
    return (
        <main>
            < Route exact path='/' component={ HomePage } />
            < Route path='/signup' render={props => (<SignUp {...props} handleSignIn={handleSignIn}/>)} />
            < Route path='/signin' render={props => (<SignIn {...props} handleSignIn={handleSignIn}/>)}/>
            < Route path='/user' render={props => (<UserMain {...props} isSignedIn={isSignedIn} token={token}/>)}/>
            < Route path='/allusers' component={ AllUsers } />
            < Route path='/moods' render={props => (<MoodSelector {...props} isSignedIn={isSignedIn} token={token}/>)} />
        </main>
    );
}

//user should be a protected route
//move moods to UserMain 