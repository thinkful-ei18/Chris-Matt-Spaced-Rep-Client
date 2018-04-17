import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isCorrect: 'nothing'
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        let word;
        if (this.props.question) {
            word = this.props.question[0].spanish;
        }

        let displayResult;
        if (this.state.isCorrect === 'correct') {
            return (
            <div>
                <p>You are correct</p>
            </div>
            )
        } else if (this.state.isCorrect === 'incorrect') {
            return (
            <div>
                <p>You are incorrect</p>
            </div>
            )
        }
        console.log(this.state.isCorrect);
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-email">Email: {this.props.email}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
                <div className="dashboard-question">
                    <h3>What is "{word}" in English?</h3>
                    <form onSubmit={event => {
                        event.preventDefault();
                        if (this.answer.value === this.props.question[0].english) {
                            this.setState({
                                isCorrect: 'correct'
                            })
                        } else {
                            this.setState({
                                isCorrect: 'incorrect'
                            })
                        }
                    }}>
                        <label htmlFor="answer">English Translation</label>
                        <input 
                            placeholder="Your Answer"
                            name="answer"
                            ref={input => this.answer = input}
                        />
                        <button>Submit</button>
                    </form>
                    {displayResult}
                </div>
            </div>
        );
    }
  }

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: currentUser.fullname,
        email: currentUser.email,
        protectedData: state.protectedData.data,
        question: currentUser.questions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
