import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'

// const background = {
//     opacity: '0.9'
// }

class SignIn extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div className="signin-section">
                <div className="signin-box">
                    <div className="welcome">
                        <h1 className="text-center text-uppercase">Sign in</h1>
                    </div>
                    <div className="side">
                        <div className="left-side">
                            <img src={avatar} />
                        </div>
                        <div className="right-side">
                            <form method="POST">
                                <div className="input-username">
                                    <div className="icon">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="info">
                                        <h5>Username</h5>
                                        <input type="text" className="input" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn; 
