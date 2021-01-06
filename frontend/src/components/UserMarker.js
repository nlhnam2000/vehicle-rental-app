import React, { Fragment } from 'react'
import { Marker } from 'react-leaflet';
import { UserLocationIcon } from './UserLocationIcon';
import UserPopup from './UserPopup';

const UserMarker = (props) => {
    const { venues } = props;

    const marker = venues.map((venue, index) => (
        <Marker key={index} position={venue.geometry} icon={UserLocationIcon} >
            <UserPopup data={venue} />
        </Marker>
    ));

    return <Fragment>{marker}</Fragment>
}

export default UserMarker