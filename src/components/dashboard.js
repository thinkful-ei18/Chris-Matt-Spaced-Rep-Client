import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchData} from '../actions/question';
import {updateQuestions} from '../actions/users';

import '../stylesheets/dashboard.css';

export class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isCorrect: 'nothing'
        }
    }
    
    componentDidMount() {
        this.props.dispatch(fetchData(this.props.id));
    }

    render() {
        let questions = this.props.questions;
        let question;
        let answer;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].head) {
                question = (
                    <h3>
                        What is "{questions[i].spanish}" in English?
                    </h3>
                );
                answer = questions[i].english;
            }
        }

        if (this.state.isCorrect === 'correct') {
            return (
            <div className="dashboard-result">
                <p>You are correct</p>
                <button
                    onClick={event => {
                        event.preventDefault();
                        this.props.dispatch(fetchData(this.props.id));
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
            <div className="dashboard-result">
                <p>You are incorrect</p>
                <button
                    onClick={event => {
                        event.preventDefault();
                        this.props.dispatch(fetchData(this.props.id));
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
                <div className="dashboard-question">
                {question}
                    <form onSubmit={event => {
                        event.preventDefault();
                        let userAnswer = this.answer.value.toLowerCase();
                        if (userAnswer === answer) {
                            this.props.dispatch(updateQuestions(this.props.id, userAnswer, 1));
                            this.setState({
                                isCorrect: 'correct'
                            })
                        } else {
                            this.props.dispatch(updateQuestions(this.props.id, userAnswer, 0));
                            this.setState({
                                isCorrect: 'incorrect'
                            })
                        }
                        this.answer.value = '';
                    }}>
                        <label htmlFor="answer">English Translation:</label>
                        <input 
                            placeholder="Your Answer"
                            name="answer"
                            ref={input => this.answer = input}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
  }

const mapStateToProps = state => {
    const questions = state.question
    return {
        id: state.auth.currentUser.id,
        questions: questions.questions,
        correct: questions.correct,
        incorrect: questions.incorrect
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
