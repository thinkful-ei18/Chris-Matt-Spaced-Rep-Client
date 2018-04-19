import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchData} from '../actions/question';

import '../stylesheets/summary.css';

export class Summary extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchData(this.props.id));
    }

    render() {

        console.log(this.props.correct)
        return (
            <div className="summary">
                <h2>User Information</h2>
                <p className="summary-username">
                    Username: {this.props.username}
                </p>
                <p className="summary-name">
                    Name: {this.props.name}
                </p>
                <p className="summary-email">
                    Email: {this.props.email}
                </p>
                <p>
                    Amount of correct Answers: {this.props.correct}
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        id: state.auth.currentUser.id,
        username: state.auth.currentUser.username,
        name: currentUser.fullname,
        email: currentUser.email,
        correct: state.question.correct,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Summary));