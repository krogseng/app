import React, {Component, PropTypes} from 'react';
import { Route, Switch } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserMoodsDay from './UserMoodsDay';
import UserMoodSelector from './UserMoodSelector';
import UserCommentView from './UserCommentView';
import UserWeekView from './UserWeekView';
import UserMonthView from './UserMonthView';
import fetcher from '../helpers/fetcher';
import { currentDateToString } from '../helpers/formatDate';

export default class UserMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            date: '',
            chosenBlock: {},
        };
        this.handleDateSubmit = this.handleDateSubmit.bind(this);
        this.handleBlockSelect = this.handleBlockSelect.bind(this);
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
    }

    //TODO promise all
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
            const date = currentDateToString();
            this.setState({
                ...this.state,
                user,
                date
            })
        })
        .catch(err => 
            console.log(err)
        );

    }

    handleBlockSelect(chosenBlock) {
        this.setState({
            ...this.state,
            chosenBlock
        })
    }

    handleDateSubmit(date) {
        if(date) {
            this.doFetchDate(date);
        }
    }

    render() {
        console.log('state',this.state)
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
                            date={this.state.date}
                            handleBlockSelect={this.handleBlockSelect}
                        />
                    )} />
                    < Route path={`${match.url}/moods`} render={props => (
                        <UserMoodSelector {...props} />)} 
                            date={this.state.date}
                            chosenBlock={this.state.chosenBlock}
                        />
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