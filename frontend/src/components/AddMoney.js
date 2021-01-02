import React from 'react';
import '../App.css';
import bg from '../images/bg.svg'
import avatar from '../images/male_ava.png'
import axios from 'axios';

export default class AddMoney extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bankName: null,
            bankCode: null,
            prevMoney: null,
            money: null
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleAddMoney = async (event) => {
        event.preventDefault();
        const get = await axios.get(`http://localhost:8000/api/users/${localStorage.getItem('username')}/`)
            .then(res => {
                this.setState({ prevMoney: res.data.money })
            })
            .catch(err => alert(err))

        const put = await axios.put(`http://localhost:8000/api/users/${localStorage.getItem('username')}/`, {
            money: Number(this.state.prevMoney) + Number(this.state.money)
        })
            .then(res => {
                console.log(res.data);
                alert("Recharger avec succès !");
                this.props.history.push('/home');
            })
            .catch(err => { alert(err) })
    }

    render() {
        return (
            <div className="signin-section">
                <div className="container-fluid">
                    <div className="background-img">
                        <img src={bg} alt="" />
                    </div>
                    <div className="signin-content">
                        <form className="form-group" onSubmit={this.handleAddMoney.bind(this)}>
                            <img src={avatar} alt="" className="avatar" />
                            <h2 className="title text-uppercase text-center" style={{ color: "black", marginBottom: '20px' }}>Ajouter l'argent</h2>
                            <div className="input-div username">
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <h5>Le nom de banque:</h5>
                                    <input type="text" className="input form-control" style={{ width: '100%' }} name="bankName" onChange={this.handleInput.bind(this)} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>Code de carte: </h5>
                                    <input type="text" className="input form-control" style={{ width: '100%' }} name="bankCode" onChange={this.handleInput.bind(this)} />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="icon">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <h5>L'argent: </h5>
                                    <input type="text" className="input form-control" style={{ width: '100%' }} name="money" onChange={this.handleInput.bind(this)} />
                                </div>
                            </div>
                            <input type="submit" className="btn btn-success" value="OK" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}