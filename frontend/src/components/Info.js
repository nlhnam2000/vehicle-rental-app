import React from 'react';
import axios from 'axios';

import avatar from '../images/male_ava.png';
import { Button, Modal } from 'react-bootstrap'

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
            history: [],
            showModal: false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/users/${localStorage.getItem('username')}`)
            .then(res => {
                this.setState({
                    username: res.data.username,
                    firstname: res.data.first_name,
                    lastname: res.data.last_name,
                    email: res.data.email,
                    cmnd: res.data.cmnd,
                    point: res.data.pointReward,
                    money: res.data.money,
                    history: res.data.history
                })
                // console.log(this.state);
                // console.log(this.state.username);
            })
            .catch(err => console.log(err))
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    openModal() {
        this.setState({ showModal: true })
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
                                <Button onClick={this.openModal.bind(this)}>Voir histoire</Button>
                                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Votre histoire</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body style={{ overflow: 'scroll', height: '600px', }}>
                                        {
                                            this.state.history.map((item, index) => (
                                                <div style={{ borderBottom: '1px solid black' }}>
                                                    <p><strong>Temp de départ</strong>: {item.timeDepart}</p>
                                                    <p><strong>Temp d'arrivage</strong>: {item.timeArrive}</p>
                                                    <p><strong>Station de départ</strong>: {item.stationDepart}</p>
                                                    <p><strong>Station d'arrivage</strong>: {item.stationArrive} </p>
                                                    <p><strong>Prix</strong>: {item.cost} </p>
                                                </div>

                                            ))
                                        }
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={this.closeModal.bind(this)}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
