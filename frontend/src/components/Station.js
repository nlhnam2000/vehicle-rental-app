import React from 'react'
import '../App.css'
import bicycle from '../images/bicycle.svg'
import axios from "axios"

class Station extends React.Component {
    constructor(props) {
        super(props)
        this.searchBox = React.createRef()
        this.state = {
            value: '',
            listStation: [],
            listFindStation: []
        }
        this.LoadStation = this.LoadStation.bind(this)
        this.renderStation = this.renderStation.bind(this)
        this.findStation = this.findStation.bind(this)
        this.renderFindStation = this.renderFindStation.bind(this)
    }
    LoadStation() {
        axios.get('http://localhost:8000/api/stations')
            .then(res => { this.setState({ listStation: res.data }); })
            .catch(e => { console.log(e) })
    }
    renderStation() {
        const station = this.state.listStation
        return station.map((item, i) => {
            return (<>
                <div key={i} className="station-name">
                    <div className="image-station"><img className="Icon-bicycle" src={bicycle} alt="bicycle" /></div>
                    <div className="name-station" style={{ paddingRight: '5px' }}>
                        <b>Nom</b>: {item.name_Station} <br />
                        <b>Address</b>: {item.address} <br />
                        <b>Available</b>: {item.listBike.filter(i => { return i.Available === true }).length
                            + item.listElecBike.filter(i => { return i.Available === true }).length
                            + item.listElecMoto.filter(i => { return i.Available === true }).length}
                    </div>
                </div>
                <hr />
            </>
            )
        })
    }
    UNSAFE_componentWillMount() {
        this.LoadStation()
    }
    renderFindStation() {
        const station = this.state.listFindStation
        return station.map((item, i) => {
            return (<>
                <div key={i} className="station-name">
                    <div className="image-station"><img className="Icon-bicycle" src={bicycle} alt="bicycle" /></div>
                    <div className="name-station"><b>Nom</b>: {item.name_Station} <br />
                        <b>Address</b>: {item.address} <br />
                        <b>Available</b>: {item.listBike.filter(i => { return i.Available === true }).length
                            + item.listElecBike.filter(i => { return i.Available === true }).length
                            + item.listElecMoto.filter(i => { return i.Available === true }).length}
                    </div>
                </div>
                <hr />
            </>
            )
        })
    }
    findStation(e) {
        var string_station = e.target.value.toLowerCase();
        var result = this.state.listStation.filter(function (el) {
            var station = el.name_Station.toLowerCase()
            return station.indexOf(string_station) !== -1
        })
        this.setState({ value: e.target.value, listFindStation: result })
    }

    render() {
        if (this.state.listFindStation.length === 0) {
            return (<>
                <div className="content-sidebar">
                    <div className="search">
                        <form>
                            <input className="searchBox-Trouver" type="text" placeholder={this.props.placeholder} onChange={this.findStation} value={this.state.value} />
                        </form>
                    </div>
                    <div className="content-Info-station">
                        {this.renderStation()}
                    </div>
                </div>
            </>)
        }
        if (this.state.listFindStation.length > 0) {
            return (<>
                <div className="content-sidebar">
                    <div className="search">
                        <form>
                            <input className="searchBox-Trouver" type="text" placeholder={this.props.placeholder} onChange={this.findStation} value={this.state.value} />
                        </form>
                    </div>
                    <div className="content-Info-station">
                        {this.renderFindStation()}
                    </div>
                </div>
            </>)
        }
    }
}
export default Station