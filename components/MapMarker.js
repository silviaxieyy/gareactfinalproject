import React, { useEffect} from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'


const MapMarker = () => {


  return (
    <div className='flex justify-center items-center h-24 flex-grow'>
      <div id="map" className='w-full h-screen'>
        <MapContainer 
          center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default MapMarker