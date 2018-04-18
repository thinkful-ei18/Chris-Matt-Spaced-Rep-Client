import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';

export class Summary extends React.Component {
    render() {
        return (
            <div className="summary">
                <div className="summary-username">
                    Username: {this.props.username}
                </div>
                <div className="summary-name">Name: {this.props.name}</div>
                <div className="summary-email">Email: {this.props.email}</div>
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
    };
};

export default requiresLogin()(connect(mapStateToProps)(Summary));