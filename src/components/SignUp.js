import React from 'react';
import fetcher from '../helpers/fetcher';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    doFetch(state) {
        fetcher({
            path: '/signup',
            method: 'POST',
            body: state,
        })
        .then(res => {
            return res.json();
        })
        .then(token => {
            console.log(token);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        const email = this.refs.email.value;
        const password = this.refs.password.value;

        this.setState({
            password,
            username,
            email,
        });
        this.doFetch(this.state);
        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome!</h3>
                <div className= 'twelve columns'>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' ref='username' placeholder='username' className= 'four columns offset-by-four'/>   
                    <br/>
                    <input type='email' ref='email' placeholder='email' className= 'four columns offset-by-four'/>
                    <br/>
                    <input type='text' ref='password' placeholder='password' className= 'four columns offset-by-four'/>
                    <br/>
                    <button type='submit' className= 'four columns offset-by-four button-primary'>Sign Up</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
