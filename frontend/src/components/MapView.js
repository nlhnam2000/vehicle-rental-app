import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';
import Sidebar from './Sidebar'
import user from '../assets/user'
import UserMarker from './UserMarker'
import axios from 'axios'

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 10.766599399999999,
        lng: 106.69510640000001
      },
      zoom: 15,
      stationList: []
    }
  }

  // 10.76652912005816, 106.69510414232758

  componentDidMount() {
    // const marker = user.venues.map(user => {
    //   user.geometry[0] = 2;
    //   user.geometry[1] = 1;
    //   console.log(user);
    // })
    this.getUserPosition();
    const marker = user.venues.map(user => { // render current locaton of user
      user.geometry[0] = this.state.currentLocation.lat;
      user.geometry[1] = this.state.currentLocation.lng;
      console.log(user);
    })
    axios.get('http://localhost:8000/api/stations/') // render all stations from database
      .then(res => {
        this.setState({ stationList: res.data });
        console.log(this.state.stationList);
      })
      .catch(err => alert(err))
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      let locationCopy = JSON.parse(JSON.stringify(this.state.currentLocation));
      locationCopy.lat = position.coords.latitude;
      locationCopy.lng = position.coords.longitude;
      this.setState({
        currentLocation: locationCopy
      })
      // console.log(position.coords.latitude + ' ' + position.coords.longitude);
      console.log('Location: ' + this.state.currentLocation.lat + ' ' + this.state.currentLocation.lng);
    })
  }

  render() {
    // const { currentLocation, zoom } = this.state;

    return (
      <div className="mapView">
        <Sidebar />
        <div className="mapID">
          <MapContainer center={this.state.currentLocation} zoom={this.state.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Markers venues={this.state.stationList} />
            <UserMarker venues={user.venues} />
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default MapView;
