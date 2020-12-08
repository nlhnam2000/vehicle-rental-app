import React from 'react'
import '../App.css'
import axios from 'axios'
import Select from 'react-select'
class Louer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            placeholder: this.props.placeholder,
            listStation: [],
            selectedStation: null
        }
        this.LoadStation = this.LoadStation.bind(this)
        this.renderStation = this.renderStation.bind(this)
        this.getStation = this.getStation.bind(this)
        this.renderContentLouer = this.renderContentLouer.bind(this)
    }
    LoadStation() {
        axios.get('http://localhost:8000/api/stations')
            .then(res => { this.setState({ listStation: res.data })})
            .catch(e => { console.log(e) })
    }
    UNSAFE_componentWillMount() {
        this.LoadStation()
    }
    getStation(selectedStation) {
        this.setState({ selectedStation })
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
    renderContentLouer(){
        const seStation = this.state.selectedStation.value
        let listB = []
        for (var station of this.state.listStation){
            if(station.name_Station === seStation)
            {
                listB = station.listBike
                break;
            }
        }
        var options = listB.map((item) => {
            return ({ label: item, value: item })
        })
        return (<Select className='react-select-container'
            options={options}
            isClearable='true'
            isSearchable='true'
            placeholder='Choisir le station'
            classNamePrefix='react-select'
            //onChange={this.getStation}
        />)
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
            </div>)
        }
    }
}

export default Louer