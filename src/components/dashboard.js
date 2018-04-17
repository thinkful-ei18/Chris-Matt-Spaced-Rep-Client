import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';

export class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isCorrect: false
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  checkAnswer(answer) {
    if (answer === 'cat') {
      this.setState({
        isCorrect: true
      })
    }
  }

  render() {
    if (this.state.isCorrect) {
      return (
        <div className="isCorrect">
          <button>
            Next Question
          </button>
        </div>
      )
    }
    return (
      <div className="dashboard">
        <p>Gato</p>
        <form
          onSubmit={event => {
          event.preventDefault();
          this.checkAnswer(this.answer.value);
        }}>
          <input 
            name="answer" 
            placeholder="Your Answer"
            ref={input => this.answer = input}
          />
          <button>
            Submit
          </button>
        </form>
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
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
