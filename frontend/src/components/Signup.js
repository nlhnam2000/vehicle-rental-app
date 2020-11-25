import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'
import bg from '../images/bg.svg'
import { Link } from 'react-router-dom'
import * as actions from '../store/actions/auth'
import { connect } from 'react-redux'


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePass1 = this.handlePass1.bind(this);
        this.handlePass2 = this.handlePass2.bind(this);

        this.state = {
            username: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    handleUsername = event => {
        this.setState({ username: event.target.value });
    }

    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePass1 = event => {
        this.setState({ password1: event.target.value });
    }

    handlePass2 = event => {
        this.setState({ password2: event.target.value });
    }

    handleSignup = event => {
        event.preventDefault();
        this.props.onAuth(this.state.username, this.state.email, this.state.password1, this.state.password2);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="signin-section">
                <div className="container-fluid">
                    <div className="background-img">
                        <img src={bg} />
                    </div>
                    <div className="signin-content">
                        <form className="form-group" onSubmit={this.handleSignup}>
                            <img src={avatar} className="avatar" />
                            <h2 className="title text-uppercase text-center" style={{ color: "black", marginBottom: '20px' }}>Register votre compte</h2>
                            <div className="input-div username">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>Username</h5>
                                    <input type="text" className="input form-control" onChange={this.handleUsername} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Email</h5>
                                    <input type="email" className="input form-control" onChange={this.handleEmail} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Mot de pass</h5>
                                    <input type="password" className="input form-control" onChange={this.handlePass1} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Vérifier mot de pass</h5>
                                    <input type="password" className="input form-control" onChange={this.handlePass2} />
                                </div>
                            </div>
                            <input type="submit" className="btn btn-success" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp); 