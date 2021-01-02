import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';
import Sidebar from './Sidebar'

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 10.766599399999999,
        lng: 106.69510640000001
      },
      zoom: 15,
    }
  }

  // 10.76652912005816, 106.69510414232758

  // UNSAFE_componentWillMount() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     let locationCopy = JSON.parse(JSON.stringify(this.state.currentLocation));
  //     locationCopy.lat = position.coords.latitude;
  //     locationCopy.lng = position.coords.longitude;
  //     this.setState({
  //       currentLocation: locationCopy
  //     })
  //     // console.log(position.coords.latitude + ' ' + position.coords.longitude);
  //     console.log(this.state.currentLocation.lat + ' ' + this.state.currentLocation.lng);
  //   })
  // }

  render() {

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

    const { currentLocation, zoom } = this.state;

    return (
      <div className="mapView">
        <Sidebar />
        <div className="mapID">
          <MapContainer center={currentLocation} zoom={zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Markers venues={data.venues} />
          </MapContainer>
        </div>
      </div>
    );
  }
}

export default MapView;
