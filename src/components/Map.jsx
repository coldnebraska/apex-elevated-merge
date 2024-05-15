import GoogleMapReact from "google-map-react"

import { Icon } from "@iconify/react"

export default function Map() {
    const location = {
        address: 'Apex Auto Shield',
        lat: 30.570820,
        lng: -97.847160
    }

    const LocationPin = ({ text }) => (
        <div className="pin">
            <Icon icon='map:postal-code' style={{ color:'black', fontSize: '20px' }} />
            <p>{text}</p>
        </div>
    )

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDSXC8B2FzRXl_0z_wYSSicJ0wCEjdc7q8' }}
                center={location}
                zoom={14.5}>
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}