import L from 'leaflet';
import icon from '../images/venue_location_icon.svg'
// import icon from '../images/red_marker.png'
export const UserLocationIcon = new L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(35, 35),
    className: 'leaflet-venue-icon'
});