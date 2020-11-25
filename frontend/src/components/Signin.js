import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'
import bg from '../images/bg.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = event => {
        this.setState({ username: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.username, this.state.password);
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
                        <form className="form-group" onSubmit={this.handleLogin}>
                            <img src={avatar} className="avatar" />
                            <h2 className="title text-uppercase text-center" style={{ color: "black", marginBottom: '20px' }}>Se connecter à votre compte</h2>
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
                                    <h5>Mot de pass</h5>
                                    <input type="password" className="input form-control" onChange={this.handlePassword} />
                                </div>
                            </div>
                            <Link to={"/"} style={{ textDecoration: 'none', textAlign: 'right' }}>
                                <h5 style={{ fontSize: 'smaller' }}>Oublier mot de pass ?</h5>
                            </Link>
                            <input type="submit" className="btn btn-success" value="Se connecter" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn); 
