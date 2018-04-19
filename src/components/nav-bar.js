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
            <button className="smoothScroll" onClick={() => this.logOut()}>Log out</button>
        );
    }
    // return (
    //     <div className="header-bar">
    //         {logOutButton}
    //     </div>
    // );

    return (
      <div className="nav-bar">
          <header>
            <div className="navWrapper" id="home">
              <div className=" clearfix">
                <h2 className="companyName">Spanish Tutor</h2>
                <nav className="mainNav clearfix">
                  <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#work" className="smoothScroll">Work</a></li>
                    <li><a href="#about" className="smoothScroll">About</a></li>
                    <li><a>{logOutButton}</a></li>                    
                    {/* <li><a href="#contact" className="smoothScroll">Contact</a></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);