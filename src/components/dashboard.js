import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchData} from '../actions/question';
import {updateQuestions} from '../actions/users';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isCorrect: 'nothing',
            spanish: null
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchData(this.props.id));
    }

    render() {
        let questions = this.props.question;
        let question;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].head) {
                question = questions[i];
            }
        }

        let displayResult;
        if (this.state.isCorrect === 'correct') {
            return (
            <div>
                <p>You are correct</p>
                <button
                    onClick={event => {
                        event.preventDefault();
                        this.setState({
                            isCorrect: 'nothing'
                        })
                    }}>
                    Next Question
                </button>
            </div>
            )
        } else if (this.state.isCorrect === 'incorrect') {
            return (
            <div>
                <p>You are incorrect</p>
                <button
                    onClick={event => {
                        event.preventDefault();
                        this.setState({
                            isCorrect: 'nothing'
                        })
                    }}>
                    Next Question
                </button>
            </div>
            )
        }
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
                    <h3>What is "{question.spanish}" in English?</h3>
                    <form onSubmit={event => {
                        event.preventDefault();
                        if (this.answer.value === question.english) {
                            this.props.dispatch(updateQuestions(this.props.id, this.answer.value, 1));
                            this.props.dispatch(fetchData(this.props.id));
                            this.setState({
                                isCorrect: 'correct'
                            })
                        } else {
                            this.props.dispatch(updateQuestions(this.props.id, this.answer.value, 0));
                            this.props.dispatch(fetchData(this.props.id));
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
        currentUser: state.auth,
        newUser: state.question,
        username: currentUser.username,
        name: currentUser.fullname,
        email: currentUser.email,
        id: currentUser.id,
        protectedData: state.protectedData.data,
        question: currentUser.questions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
