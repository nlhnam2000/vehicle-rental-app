import React from 'react'
import '../App.css'
import gps from '../images/gps.svg'
import bicycle from '../images/bicycle.svg'
import axios from "axios"
class NearestStation extends React.Component {
    constructor(props) {
        super(props)
        this.searchBox = React.createRef()
        this.form = React.createRef()
        this.state = {
            longitude: null,
            latitude: null,
            position: null,
            placeholder : this.props.placeholder
        }
        this.getPosition = this.getPosition.bind(this)
        this.setPosition = this.setPosition.bind(this)
        this.findNearestStation = this.findNearestStation.bind(this)
        this.renderStation = this.renderStation.bind(this)
    }
    getPosition() {
        this.searchBox.current.value = null
        this.setState({placeholder: 'En trouvant votre position...Attendez-vous svl'})
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            this.setState({ longitude: position.coords.longitude })
            this.setState({ latitude: position.coords.latitude })
            this.searchBox.current.value = position.coords.latitude.toString() + " + " + position.coords.longitude.toString()
        },null,{enableHighAccuracy: true})
    }
    setPosition(e) {
        console.log(e.target.value)
        this.searchBox.current.value = e.target.value
        let temp = this.searchBox.current.value.split('+')
        this.setState({ latitude: temp[0] })
        this.setState({ longitude: temp[1] })
    }
    findNearestStation() {
        if  (this.state.latitude && this.state.longitude) {
            axios.get('http://localhost:8000/locations/Trouver?longitude=' + this.state.longitude + '&latitude=' + this.state.latitude)
                .then(res => { this.setState({ position: res.data }); console.log(res.data) })
                .catch(e => { console.log(e) })
        }
        else
            alert("Entrez votre position en forme: [latitude] + [longitude]")
    }
    renderStation() {
        const station = this.state.position
        return (<>
            <div className="station-name">
                <div className="image-station"><img className="Icon-bicycle" src={bicycle} alt="bicycle" /></div>
                <div className="name-station"><b>Nom</b>: {station.result.name_Station} <br />
                    <b>Address</b>: {station.result.address} <br />
                    <b>Distance</b>: {station.distance} km
                </div>
            </div>
            <hr />
        </>
        )
    }
    render() {
        if (!this.state.position) {
            return (<>
                <div className="content-sidebar">
                    <div className="search">
                        <form ref={this.form} className="formGPS">
                            <input className="searchBox" type="text" placeholder={this.state.placeholder} ref={this.searchBox} onChange={this.setPosition}/>
                            <img className="Icon-gps" src={gps} alt='gps' onClick={this.getPosition} />
                        </form>
                        <button className="content-nearest-button" onClick={this.findNearestStation}>Trouver</button>
                    </div>
                </div>
            </>)
        }
        return (<>
            <div className="content-sidebar">
                <div className="search">
                    <form ref={this.form} className="formGPS">
                        <input className="searchBox" type="text" placeholder={this.props.placeholder} ref={this.searchBox} onChange={this.setPosition}/>
                        <img className="Icon-gps" src={gps} alt='gps' onClick={this.getPosition} />
                    </form>
                    <button className="content-nearest-button" onClick={this.findNearestStation}>Trouver</button>
                </div>
                <div className="content-nearest-station">
                    {this.renderStation()}
                </div>
            </div>
        </>)
    }
}

export default NearestStation