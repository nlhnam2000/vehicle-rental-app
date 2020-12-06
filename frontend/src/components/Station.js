import React from 'react'
import '../App.css'
import bicycle from '../images/bicycle.svg'
import axios from "axios"
class Station extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listStation: [],
        }
    }
    LoadStation() {
        axios.get('http://localhost:8000/api/stations')
            .then(res => { this.setState({ listStation: res.data }); console.log(res.data) })
            .catch(e => { console.log(e) })
    }
    renderStation() {
        const station = this.state.listStation
        return station.map((item, i) => {
            return (<>
                <div key={i} className="station-name">
                    <div className="image-station"><img className="Icon-bicycle" src={bicycle} alt="bicycle" /></div>
                    <div className="name-station"><b>Nom</b>: {item.name_Station} <br />
                        <b>Address</b>: {item.address} <br />
                        <b>Available</b>: {item.listBike.length}
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
    render() {
        return (<>
            <div className="content-sidebar">
                <div className="search">
                    <form ref={this.form}>
                        <input className="searchBox-Trouver" type="text" placeholder={this.props.placeholder} />
                    </form>
                </div>
                <div className="content-Info-station">
                    {this.renderStation()}
                </div>
            </div>
        </>)
    }
}
export default Station