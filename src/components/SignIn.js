import React from 'react';
import fetcher from '../helpers/fetcher';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    doFetch(username, password) {
        fetcher({
            path: '/auth/signin',
            method: 'POST',
            body: {
                username,
                password,
            },
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            if(json.error) {
                console.log(json.error);
                return;
            }
            localStorage.setItem('token', json.token);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        const password = this.refs.password.value;

        if (!username || !password) {
            alert('must enter all fields');
            return;
        }

        this.doFetch(username, password);
        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome back!</h3>
                <div className='twelve columns'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='username' placeholder='username' className='four columns offset-by-four'/>   
                    <br/>
                    <input type='password' ref='password' placeholder='password' className='four columns offset-by-four'/>
                    <br/>
                    <button type='submit' className='four columns offset-by-four button-primary'>Sign In</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
