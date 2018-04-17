import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchData} from '../actions/question';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(fetchData(this.props.id));
    }

    
    render() {
        console.log('ID', this.props.id);
        // console.log(this.props.dispatch(fetchProtectedData()));
        let word;
        if (this.props.question) {
            word = this.props.question.spanish;
            // console.log(test);
        };
        
        // console.log({this.props.question});

        // test printed at null
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(currentUser.id);
    return {
        id: currentUser.id,
        username: state.auth.currentUser.username,
        name: currentUser.fullname,
        email: currentUser.email,
        protectedData: state.protectedData.data,
        question: state.question
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
