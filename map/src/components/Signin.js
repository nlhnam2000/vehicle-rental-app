import React from 'react'
import '../App.css'
import avatar from '../images/male_ava.png'
import bg from '../images/bg.svg'

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
                <div className="container-fluid">
                    <div className="background-img">
                        <img src={bg} />
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn; 
