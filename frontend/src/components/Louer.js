import React from 'react'
import '../App.css'
import axios from 'axios'
import Select from 'react-select'
class Louer extends React.Component {
    constructor(props) {
        super(props)
        this.check = React.createRef()
        this.state = {
            placeholder: this.props.placeholder,
            listStation: [],
            selectedStation: null,
            isBikeSelected: false,
            isEBSelected: false,
            isEMSelected: false
        }
        this.LoadStation = this.LoadStation.bind(this)
        this.renderStation = this.renderStation.bind(this)
        this.getStation = this.getStation.bind(this)
        this.renderContentLouer = this.renderContentLouer.bind(this)
        this.getTransport = this.getTransport.bind(this)
    }
    LoadStation() {
        axios.get('http://localhost:8000/api/stations')
            .then(res => { this.setState({ listStation: res.data }) })
            .catch(e => { console.log(e) })
    }
    UNSAFE_componentWillMount() {
        this.LoadStation()
    }
    getStation(selectedStation) {
        if(this.state.selectedStation === null)
            this.setState({ selectedStation, isBikeSelected: false, isEBSelected: false, isEMSelected: false })
        if(this.state.selectedStation !== null){
            this.setState({ selectedStation, isBikeSelected: false, isEBSelected: false, isEMSelected: false })
            this.check.current.value = null
        }
    }
    getTransport(e) {
        console.log(e)
        if (e === null) {
            this.setState({ isBikeSelected: false, isEBSelected: false, isEMSelected: false })
        }
        if (e !== null) {
            if (e.name === 'bike') {
                this.setState({ isEBSelected: true, isEMSelected: true })
            }
            if (e.name === 'ebike') {
                this.setState({ isBikeSelected: true, isEMSelected: true })
            }
            if (e.name === 'emoto') {
                this.setState({ isEBSelected: true, isBikeSelected: true })
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
        var optionsBike = listB.map((item) => {
            return ({ label: item, value: item, name: 'bike' })
        })
        var optionsEBike = listEB.map((item) => {
            return ({ label: item, value: item, name: 'ebike' })
        })
        var optionsEMoto = listEM.map((item) => {
            return ({ label: item, value: item, name: 'emoto' })
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
    render() {
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
                <button>Louer</button>
            </div>)
        }
    }
}

export default Louer