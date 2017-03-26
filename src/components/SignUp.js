import React from 'react';
import fetcher from '../helpers/fetcher';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    doFetch(username, password, email) {
        fetcher({
            path: '/auth/signup',
            method: 'POST',
            body: {
                username,
                password,
                email,
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
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        if (!username || !password || !email) {
            alert('must enter all fields');
            return;
        }

        this.doFetch(username, password, email);
        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome!</h3>
                <div className='twelve columns'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='username' placeholder='username' className='four columns offset-by-four'/>   
                    <br/>
                    <input type='email' ref='email' placeholder='email' className='four columns offset-by-four'/>
                    <br/>
                    <input type='password' ref='password' placeholder='password' className='four columns offset-by-four'/>
                    <br/>
                    <button type='submit' className='four columns offset-by-four button-primary'>Sign Up</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
