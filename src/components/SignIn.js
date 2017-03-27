import React from 'react';
import fetcher from '../helpers/fetcher';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
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
            return json.token;
        });
    }


    render() {
        return (
            <div className='container'>
                <h3 style={{textAlign: 'center'}}>Welcome back!</h3>
                <div className='twelve columns'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const username = this.refs.username.value;
                        const password = this.refs.password.value;

                        if (!username || !password) {
                            alert('must enter all fields');
                            return;
                        }
                        this.doFetch(username, password)
                            .then(() => {
                                this.props.handleSignIn();
                            })
                            .catch(err => {
                                console.log(err);
                            });
                        event.target.reset();
                    }}>
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
