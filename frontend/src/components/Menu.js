import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class Menu extends React.Component {

    render() {
        return (
            <div>
                <header className="header-bar">
                    <nav className="navbar navbar-expand-md sticky-top navbar-light">
                        <Link to={'/'} className="navbar-branch">
                            <h3 className="mb-0 site-logo">KD Transport</h3>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav m-auto">
                                {
                                    this.props.isAuthenticated ?
                                        <li className="nav-item">
                                            <Link to={'/home'} className="nav-link active">Carte</Link>
                                        </li>
                                        :
                                        <div></div>
                                }

                                <li className="nav-item">
                                    <Link to={'/award'} className="nav-link">Prix</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/about'} className="nav-link">À Propos de Nous</Link>
                                </li>
                                {
                                    this.props.isAuthenticated ?

                                        <div style={{ width: '0%' }}></div>
                                        :
                                        <li className="nav-item">
                                            <Link to={'/signin'} className="nav-link">Se Connecter</Link>
                                        </li>
                                }
                            </ul>

                            {
                                this.props.isAuthenticated ?
                                    <div className="navbar-nav ml-auto" style={{ marginRight: '100px' }}>
                                        <div className="btn-group">
                                            <button className="btn btn-success " data-toggle="dropdown">
                                                {localStorage.getItem('username')}
                                            </button>
                                            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></button>
                                            <div className="dropdown-menu">
                                                <Link to={'/user/info/'} className="dropdown-item">
                                                    Info
                                                </Link>
                                                <Link onClick={this.props.logout} className="dropdown-item" to={'/'}>
                                                    Se déconnecter
                                                </Link>
                                                <Link className="add-money dropdown-item" to={'/user/addmoney/'}>
                                                    Recharger
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div style={{ width: '0%' }}></div>
                            }

                        </div>
                    </nav>
                </header>
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