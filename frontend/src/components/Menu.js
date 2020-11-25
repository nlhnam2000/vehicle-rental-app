import React, { useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../store/actions/auth'


const navbarText = {
    color: 'black',
    display: 'inline-block',
    textAlign: 'center',
    opacity: '1',
    float: 'right'
}

class Menu extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md">
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mr-auto list-unstyled">
                            <Link to={'/'}>
                                <li className="nav-link active" style={navbarText}>Acceuil</li>
                            </Link>
                            <Link to={'/home'}>
                                <li className="nav-link" style={navbarText}>Map</li>
                            </Link>
                            <Link to={'/'}>
                                <li className="nav-link" style={navbarText}>Link</li>
                            </Link>
                            <Link to={'/'}>
                                <li className="nav-link" style={navbarText}>Link</li>
                            </Link>
                            <Link to={'/'}>
                                <li className="nav-link" style={navbarText}>Link</li>
                            </Link>
                        </ul>
                        <div className="userButton">

                            {
                                this.props.isAuthenticated ?

                                    <Link to={"/"} className="btn btn-success" onClick={this.props.logout}>
                                        Logout
                                    </Link>
                                    :
                                    <div>
                                        <Link to={'/signin'} className="btn btn-success">
                                            Sign in
                                        </Link>
                                        <Link to={'/signup'} className="btn btn-success">
                                            Sign up
                                        </Link>
                                    </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Menu); 