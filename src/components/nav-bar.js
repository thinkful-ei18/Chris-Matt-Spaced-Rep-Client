import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import LoginForm from './login-form';

import '../stylesheets/nav-bar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button 
              className="smoothScroll" 
              onClick={() => this.logOut()}>
                Logout
            </button>
        );
    }
    let userInfo;
    if (this.props.loggedIn) {
      userInfo = (
        <div className="dropdown">
          <button className="dropbtn">Hello, {this.props.currentUser.username}!</button>
          <div className="dropdown-content">
            <a>Link 1</a>
            <a 
              className="smoothScroll" 
              onClick={() => this.logOut()}>
                Logout
            </a>
          </div>
        </div>
      )
    }

    return (
      <div className="nav-bar">
          <header>
            <div className="navWrapper" id="home">
              <h2 className="companyName">Spanish Tutor</h2>
              <nav className="mainNav clearfix">
                {userInfo}                  
              </nav>
            </div>
          </header>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);