import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import '../stylesheets/nav-bar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let navigation = (
      <div className="loginNav">
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </div>
    );
    if (this.props.loggedIn) {
      navigation = (
        <div className="dropdown">
          <button className="dropbtn">Hello, {this.props.currentUser.username}!</button>
          <div className="dropdown-content">
            <Link to="/summary">User Info</Link>
            <Link to="/instructions">Instructions</Link>
            <a className="logout" onClick={() => this.logOut()}>
              Logout
            </a>
          </div>
        </div>
      )
    }

    return (
      <div className="nav-bar">
        <nav role="navigation" >
          <header>
            <div className="navWrapper">
              <h2 className="companyName"><Link to="/">Spanish Tutor</Link></h2>
              <nav className="mainNav clearfix">
                {navigation}                  
              </nav>
            </div>
          </header>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);