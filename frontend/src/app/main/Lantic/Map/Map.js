import React from "react"
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyle = {
  width: '100%',
  height: '100%'
}

function MapContainer(props){
  return(
    <Map
      google={props.google}
      zoom={14}
      style={mapStyle}
      initialCenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCSeC2PBiu-WmuRC3XU8dQdt6_zor4x_vk"
})(MapContainer)
