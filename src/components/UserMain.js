import React, {Component, PropTypes} from 'react';
import { Route, Switch } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';
import UserMoodSelector from './UserMoodSelector';
import UserCommentView from './UserCommentView';
import UserWeekView from './UserWeekView';
import UserMonthView from './UserMonthView';
import fetcher from '../helpers/fetcher';

export default class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            colors: [],
            blocks: [],
            date: '',
            view: 'day',
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    //promise all
    componentDidMount() {
        const token = localStorage.getItem('token');        
        fetcher({ 
            path: '/user', 
            method: 'GET', 
            token: token 
        })
        .then(res => {
            return res.json();
        })
        .then(user => {
            this.setState({
                user
            })
        })
        .catch(err => 
            console.log(err)
        );
     


        fetcher({
            path: '/color', 
            method: 'GET', 
        })
        .then(res => {
            return res.json();
        })
        .then(colors => {
            this.setState({
                ...this.state,
                colors 
            });
        })
        .catch(err => 
            console.log(err)
        );

    }

    handleDateSubmit(date) {
        if(date) {
            this.setState({
                ...this.state,
                date,
            })
        }
    }

    render() {
        const { match } = this.props;
        const user = this.state.user;
        return (
            <div>
                <UserHeader user={ user } />
                <Switch>
                    < Route exact path={`${match.url}`} render={props => (
                        <UserMoodsDay {...props} 
                            user={ user } 
                            blocks={this.state.blocks}
                            handleDateSubmit={this.handleDateSubmit}
                        />
                    )} />
                    < Route path={`${match.url}/moods`} render={props => (<UserMoodSelector {...props} />)} />
                    < Route path={`${match.url}/comments`} component={ UserCommentView }/>
                    < Route path={`${match.url}/week`} component={ UserWeekView }/>
                    < Route path={`${match.url}/month`} component={ UserMonthView }/>
                </Switch>
            </div>
        );
    }
}
                // <span>Today's weather: </span>
                // <span>Location: </span>