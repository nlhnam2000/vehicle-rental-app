import React from 'react';
import { Popup } from 'react-leaflet';

const UserPopup = (props) => {
    // console.log(name);

    return (<Popup>
        <div className='poup-text'>Vous êtes ici !</div>
    </Popup>);
};

export default UserPopup;