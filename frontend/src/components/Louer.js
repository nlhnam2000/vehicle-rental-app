import React from 'react'
import '../App.css'
import axios from 'axios'
import Select from 'react-select'

var promoClassname = ['promotion']

class Louer extends React.Component {
    constructor(props) {
        super(props)
        this.check = React.createRef()
        this.state = {
            placeholder: this.props.placeholder,
            listStation: [],
            selectedStation: null,
            selectedArriveStation: null,
            selectedTransport: null,
            isBikeSelected: false,
            isEBSelected: false,
            isEMSelected: false,
            statusUser: null,
            isGiveBack: null,
            cost: null,
            tempCost: null,
            point: null,
            money: null,
            isUseVoucher: false
        }
        this.LoadStation = this.LoadStation.bind(this)
        this.LoadStatusUser = this.LoadStatusUser.bind(this)
        this.renderStation = this.renderStation.bind(this)
        this.renderArriveStation = this.renderArriveStation.bind(this)
        this.getStation = this.getStation.bind(this)
        this.getArriveStation = this.getArriveStation.bind(this)
        this.renderContentLouer = this.renderContentLouer.bind(this)
        this.getTransport = this.getTransport.bind(this)
        this.submitLouer = this.submitLouer.bind(this)
        this.submitRevenir = this.submitRevenir.bind(this)
        this.submitPayer = this.submitPayer.bind(this)
    }
    optionsPromo = [{ label: '20%', value: 20 },
    { label: '30%', value: 30 },
    { label: '50%', value: 50 }]
    LoadStation() {
        axios.get('http://localhost:8000/api/stations')
            .then(res => { this.setState({ listStation: res.data }) })
            .catch(e => { console.log(e) })
    }
    LoadStatusUser() {
        axios.get('http://localhost:8000/api/users/' + localStorage.getItem('username'))
            .then(res => {
                this.setState({
                    statusUser: res.data.status, isGiveBack: res.data.isGiveBack,
                    cost: res.data.cost, tempCost: res.data.cost, point: res.data.pointReward,
                    money: res.data.money
                })
            })
            .catch(e => console.log(e))
    }
    componentDidMount() {
        this.LoadStatusUser()
        this.LoadStation()
        this.isRewardAvailable();
    }
    getStation(selectedStation) {
        this.setState({ selectedStation, isBikeSelected: false, isEBSelected: false, isEMSelected: false })
    }
    getTransport(e) {
        if (e === null) {
            this.setState({ isBikeSelected: false, isEBSelected: false, isEMSelected: false, selectedTransport: null })
        }
        if (e !== null) {
            if (e.name === 'bike') {
                this.setState({ isEBSelected: true, isEMSelected: true, selectedTransport: e.value })
            }
            if (e.name === 'ebike') {
                this.setState({ isBikeSelected: true, isEMSelected: true, selectedTransport: e.value })
            }
            if (e.name === 'emoto') {
                this.setState({ isEBSelected: true, isBikeSelected: true, selectedTransport: e.value })
            }
        }
    }
    renderStation() {
        const station = this.state.listStation
        var options = station.map((item) => {
            return ({ label: item.name_Station, value: item.name_Station })
        })
        return (<Select className='react-select-container'
            options={options}
            isClearable='true'
            isSearchable='true'
            placeholder='Choisir le station'
            classNamePrefix='react-select'
            onChange={this.getStation}
        />)
    }
    renderContentLouer() {
        const seStation = this.state.selectedStation.value
        let listB = [], listEB = [], listEM = []
        for (var station of this.state.listStation) {
            if (station.name_Station === seStation) {
                listB = station.listBike
                listEB = station.listElecBike
                listEM = station.listElecMoto
                break;
            }
        }
        var optionsBike = listB.filter(item => { return item.Available }).map(
            item => {
                return ({ label: item.ID_Bike, value: item.ID_Bike, name: 'bike' })
            })
        var optionsEBike = listEB.filter(item => { return item.Available }).map(
            item => {
                return ({ label: item.ID_EBike, value: item.ID_EBike, name: 'ebike' })
            })
        var optionsEMoto = listEM.filter(item => { return item.Available }).map(
            item => {
                return ({ label: item.ID_EMoto, value: item.ID_EMoto, name: 'emoto' })
            })
        return (<>
            <Select className='react-select-container'
                ref={this.check}
                options={optionsBike}
                isClearable='true'
                isSearchable='true'
                isDisabled={this.state.isBikeSelected}
                placeholder='Choisir le station'
                classNamePrefix='react-select'
                onChange={this.getTransport}
            />
            <Select className='react-select-container'
                options={optionsEBike}
                isClearable='true'
                isSearchable='true'
                isDisabled={this.state.isEBSelected}
                placeholder='Choisir le station'
                classNamePrefix='react-select'
                onChange={this.getTransport}
            />
            <Select className='react-select-container'
                options={optionsEMoto}
                isClearable='true'
                isSearchable='true'
                isDisabled={this.state.isEMSelected}
                placeholder='Choisir le station'
                classNamePrefix='react-select'
                onChange={this.getTransport}
            />
        </>)
    }
    submitLouer() {
        var username = localStorage.getItem('username')
        axios.post('http://localhost:8000/locations/Louer', { username: username, transport: this.state.selectedTransport, selectedStation: this.state.selectedStation.value })
            .then(res => { this.setState({ statusUser: res.data.status, isGiveBack: null }) })
            .catch(e => (console.log(e)))
    }
    submitRevenir() {
        if (this.state.selectedArriveStation === null) {
            this.setState({ isGiveBack: 'N' })
        }
        else {
            var username = localStorage.getItem('username')
            axios.post('http://localhost:8000/locations/Revenir', { username: username, stationArrive: this.state.selectedArriveStation.value })
                .then(res => this.setState({ isGiveBack: res.data.isGiveBack, cost: res.data.cost }))
                .catch(e => console.log(e))
        }
    }
    submitPayer() {
        if (this.state.money >= this.state.cost) {
        var username = localStorage.getItem('username')
        axios.post('http://localhost:8000/locations/Payer', { username: username, isUseVoucher: this.state.isUseVoucher})
            .then(res => {
                this.setState({
                    statusUser: res.data.status, isGiveBack: res.data.isGiveBack, cost: res.data.cost,
                    isBikeSelected: false, isEBSelected: false, isEMSelected: false, isUseVoucher: false, money: res.data.money
                })
            })
            .catch(e => (console.log(e)))
        }
        else
            alert('Vous n\'avez pas assez d\'argent! Rechargez, s\'il vous plait')
    }
    getArriveStation(selectedArriveStation) {
        this.setState({ selectedArriveStation })
    }
    renderArriveStation() {
        const station = this.state.listStation
        var options = station.map((item) => {
            return ({ label: item.name_Station, value: item.name_Station })
        })
        return (<Select className='react-select-container'
            options={options}
            isClearable='true'
            isSearchable='true'
            placeholder='Choisir le station'
            classNamePrefix='react-select'
            onChange={this.getArriveStation}
        />)
    }

    isRewardAvailable = () => {
        axios.get(`http://localhost:8000/api/users/${localStorage.getItem('username')}/`)
            .then(res => {
                if (res.data.pointReward < 20) {
                    promoClassname.push('noReward')
                }
                else {
                    promoClassname.pop();
                }
            })
            .catch(err => console.log(err))
    }

    submitPromotion = (event) => {
        var username = localStorage.getItem('username');
        this.setState( {isUseVoucher: true} )
        if (event) {
            axios.post('http://localhost:8000/locations/Reward', {
                username: username,
                name_Award: event.label
            })
                .then(res => {
                    this.setState({
                        cost: res.data.tempCost,
                    })
                })
                .catch(err => console.log(err))
        }
        if (event === null) {
            axios.post('http://localhost:8000/locations/Reward', {
                username: username,
                name_Award: '',
            })
                .then(res => {
                    this.setState({
                        cost: res.data.tempCost,
                    })
                })
                .catch(err => console.log(err))
        }
    }
    render() {
        console.log(this.state.statusUser)
        if (this.state.statusUser !== null) {
            if (!this.state.statusUser) {
                if (!this.state.selectedStation) {
                    return (<div className="content-sidebar">
                        <div className="search">
                            Choisir le station
                        {this.renderStation()}
                        </div>
                        <div className="content-louer">
                            Selecter le station pour louer
                </div>
                    </div>)
                }
                if (this.state.selectedStation) {
                    return (<div className="content-sidebar">
                        <div className="search">
                            Choisir le station
                        {this.renderStation()}
                        </div>
                        <div className="content-louer">
                            Choisir le Transport
                        {this.renderContentLouer()}
                        </div>
                        <button onClick={this.submitLouer}>Louer</button>
                    </div>)
                }
            }
            else {
                if (this.state.isGiveBack === null || this.state.isGiveBack === '') {
                    return (<div className="content-sidebar">
                        <div className="search">
                            <h3>Vous êtes en train de louer</h3>
                        </div>
                        <div className="content-louer">
                            Choisir le station pour revenir
                            {this.renderArriveStation()}
                            <button onClick={this.submitRevenir}>Revenir</button>
                        </div>
                    </div>)
                }
                if (this.state.isGiveBack === 'N') {
                    return (<div className="content-sidebar">
                        <div className="search">
                            <h3>Vous êtes en train de louer</h3>
                        </div>
                        <div className="content-louer">
                            Choisir le station pour revenir
                            {this.renderArriveStation()}
                            <h3>Entrez votre arrive station, s'il vous plait</h3>
                            <button onClick={this.submitRevenir}>Revenir</button>
                        </div>
                    </div>)
                }
                if (this.state.isGiveBack === 'Y') {
                    var optionAvailable = this.optionsPromo.filter(item => { return item.value <= this.state.point })
                    return (<div className="content-sidebar">
                        <div className="search">
                            <h3>Payer, s'il vous plait</h3>
                        </div>
                        <div className="content-louer">
                            <h3>Le prix: {this.state.cost} Vnđ</h3>
                            <button onClick={this.submitPayer}>Payer</button>
                            <div className={promoClassname.join(' ')}>
                                <Select options={optionAvailable}
                                    isClearable='true'
                                    isSearchable='true'
                                    placeholder='Choisir le promotion'
                                    classNamePrefix='react-select'
                                    onChange={this.submitPromotion.bind(this)}
                                />
                            </div>
                        </div>

                    </div>)
                }
            }
        }
        else {
            return (<div className="content-sidebar"><h1>Loading...</h1></div>)
        }
    }
}

export default Louer