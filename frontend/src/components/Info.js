import React from 'react';
import axios from 'axios';

import avatar from '../images/male_ava.png';

export default class Info extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            cmnd: '',
            point: '',
            money: '',
            history: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users/')
            .then(res => {
                for (var i = 0; i < res.data.length; i++) {
                    if (res.data[i].username === localStorage.getItem('username')) {
                        this.setState({
                            username: res.data[i].username,
                            firstname: res.data[i].first_name,
                            lastname: res.data[i].last_name,
                            email: res.data[i].email,
                            cmnd: res.data[i].cmnd,
                            point: res.data[i].pointReward,
                            money: res.data[i].money,
                            history: res.data[i].history
                        })
                    }
                }
                // console.log(this.state);
                // console.log(this.state.username);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="user-info-section">
                <div className="container-fluid">
                    <div className="user-info-box">
                        <div className="user-info">
                            <div className="avatar">
                                <img src={avatar} alt="user avatar" />
                                <h4>{this.state.username}</h4>
                                <p><strong>{this.state.point}</strong> pts</p>
                            </div>
                            <div className="info">
                                <div className="area">
                                    <div className="field">
                                        <h4>Nom: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.firstname}</h4>
                                    </div>
                                </div>
                                <div className="area">
                                    <div className="field">
                                        <h4>Prénom: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.lastname}</h4>
                                    </div>
                                </div>
                                <div className="area">
                                    <div className="field">
                                        <h4>Email: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.email}</h4>
                                    </div>
                                </div>
                                <div className="area">
                                    <div className="field">
                                        <h4>ID: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.cmnd}</h4>
                                    </div>
                                </div>
                                <div className="area">
                                    <div className="field">
                                        <h4>Monnais: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.money}</h4>
                                    </div>
                                </div>
                                <div className="area">
                                    <div className="field">
                                        <h4>Histoire de traverser: </h4>
                                    </div>
                                    <div className="data">
                                        <h4>{this.state.history}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
