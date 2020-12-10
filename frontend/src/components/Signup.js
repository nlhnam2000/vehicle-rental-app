import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'
import bg from '../images/bg.svg'
import * as actions from '../store/actions/auth'
import { connect } from 'react-redux'
import axios from 'axios'

String.prototype.isNumber = function () { return /^\d+$/.test(this); }

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        // this.handleUsername = this.handleUsername.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handlePass1 = this.handlePass1.bind(this);
        // this.handlePass2 = this.handlePass2.bind(this);

        this.handleInput = this.handleInput.bind(this);
        this.handleVerify = this.handleVerify.bind(this);

        this.state = {
            nom: '',
            prenom: '',
            username: '',
            email: '',
            cmnd: '',
            // bank: '',
            password1: '',
            password2: '',
            verify: true
        }

    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleVerify = async (event) => {
        const setting = await this.setState({ [event.target.name]: event.target.value })
        if ((this.state.password2 !== this.state.password1)) {
            this.setState({ verify: false })
            // console.log(this.state.password1);
            // console.log(this.state.password2);
            // console.log(this.state.verify);
        }
        else {
            this.setState({ verify: true })
            // console.log(this.state.password1);
            // console.log(this.state.password2);
            // console.log(this.state.verify);
        }
    }

    handleSignup = (event) => {
        event.preventDefault();
        if (this.state.verify) {
            this.props.onAuth(this.state.username, this.state.email, this.state.password1, this.state.password2);

            axios.post('http://localhost:8000/api/users/', {
                first_name: this.state.prenom,
                last_name: this.state.nom,
                username: this.state.username,
                email: this.state.email,
                cmnd: this.state.cmnd,
            })
                .then(res => { console.log(res.data) })
                .catch(err => { console.log(err) })
            this.props.history.push('/home');
        }
        else {
            alert("Invalid password");
        }
    }

    render() {
        return (
            <div className="signin-section">
                <div className="container-fluid">
                    <div className="background-img">
                        <img src={bg} />
                    </div>
                    <div className="signup-content">
                        <form className="form-group" onSubmit={this.handleSignup}>
                            <img src={avatar} className="avatar" />
                            <h2 className="title text-uppercase text-center" style={{ color: "black", marginBottom: '20px' }}>Register votre compte</h2>
                            <div className="form-section">
                                <div className="input-div name">
                                    <div className="icon">
                                        <i className="fa fa-info-circle"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Nom et prénom</h5>
                                        <div>
                                            <input type="text" className="input form-control" name="prenom" placeholder="Votre prénom" onChange={this.handleInput} />
                                            <input type="text" className="input form-control" name="nom" placeholder="Votre nom" onChange={this.handleInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-div username">
                                    <div className="icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Username</h5>
                                        <input type="text" className="input form-control" name="username" placeholder="Votre username" onChange={this.handleInput} />
                                    </div>
                                </div>
                                <div className="input-div email">
                                    <div className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Email</h5>
                                        <input type="email" className="input form-control" name="email" placeholder="Votre email" onChange={this.handleInput} />
                                    </div>
                                </div>
                                <div className="input-div cmnd">
                                    <div className="icon">
                                        <i className="fa fa-id-card"></i>
                                    </div>
                                    <div className="div">
                                        <h5>ID</h5>
                                        <input type="text" className="input form-control" name="cmnd" placeholder="Votre ID" onChange={this.handleInput} />
                                    </div>
                                </div>
                                {/* <div className="input-div bank">
                                    <div className="icon">
                                        <i className="fa fa-university"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Compte de banque</h5>
                                        <input type="text" className="input form-control" name="bank" placeholder="Votre compte de banque" onChange={this.handleInput} />
                                    </div>
                                </div> */}
                                <div className="input-div pass">
                                    <div className="icon">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <h5>Mot de pass</h5>
                                        <div>
                                            <input type="password" className="input form-control" name="password1" placeholder="Mot de pass" onChange={this.handleInput} />
                                            {
                                                this.state.verify ?
                                                    <input type="password" className="input form-control" name="password2" placeholder="Le vérifier" onChange={this.handleVerify} />
                                                    :
                                                    <input type="password" className="input form-control" name="password2" placeholder="Le vérifier" onChange={this.handleVerify} style={{ border: '3px solid red' }} />
                                            }

                                        </div>
                                        <div className="note">
                                            <ul>
                                                <li>N'utilisez pas les mots de pass communs</li>
                                                <li>N'utilisez pas une chaine de tous numéros</li>
                                                <li>Le longueur minimum est de 8</li>
                                            </ul>
                                        </div>
                                    </div>
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
