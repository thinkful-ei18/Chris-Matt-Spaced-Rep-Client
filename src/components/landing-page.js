import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

import '../stylesheets/landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <LoginForm />
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            <div className="login-form instruction-set" >
                <h2 className="login-header">Instructions</h2>
                <h3 className="instructions-header" >General Instructions:</h3>
                <p className="instructions" >
                    Welcome to Spanish Tutor, your source for adaptive learning! 
                    <br/><br/>
                    If you don't have an account, please click on the "Register" button to access the form.
                    <br/><br/>
                    Spanish Tutor is a quiz app designed to adapt to your learning needs.  This means that questions you get right more often will be asked later.  The questions you tend to get wrong will be asked again sooner.
                </p>
                <h3 className="instructions-header" >How questions are stored:</h3>
                <p className="instructions" >
                    The questions are stored in the database as a singly linked list.  Each question is initialized for a new user with an "m" value of 1.  If a question is answered correctly, "m" is multiplied by 2 and is moved 2*m down the singly linked-list.  
                    <br/><br/>
                </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
