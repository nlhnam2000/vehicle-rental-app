import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'
import bg from '../images/bg.svg'
import {Link} from 'react-router-dom'


class SignIn extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="signin-section">
                <div className="container-fluid">
                    <div className="background-img">
                        <img src={bg} />
                    </div>
                    <div className="signin-content">
                        <form className="form-group">
                            <img src={avatar} className="avatar" />
                            <h2 className="title text-uppercase text-center" style={{color: "black", marginBottom: '20px'}}>Se connecter à votre compte</h2>
                            <div className="input-div username">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>Username</h5>
                                    <input type="text" className="input form-control"/>
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Mot de pass</h5>
                                    <input type="password" className="input form-control"/>
                                </div>
                            </div>
                            <Link to={"/"} style={{textDecoration: 'none', textAlign: 'right'}}>
                                <h5 style={{fontSize: 'smaller'}}>Oublier mot de pass ?</h5>
                            </Link>
                            <input type="submit" className="btn btn-success" value="Se connecter" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn; 
