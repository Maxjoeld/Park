import React from 'react';
import { MapView } from "expo";
import locations from './randomAddress';

const Map = (props) => {
  return ( 
    <MapView
      style={{ flex: 1 }}
      provider="google"
      region={props.coords}
    >
      <MapView.Marker
        // key={index}
        coordinate={props.coords}
        title='Home'
        pinColor="green"
      />
      <MapView.Circle
        center = { props.coords }
        radius = { props.radius }
        strokeWidth = { 1 }
        strokeColor = { '#4CA497' }
        fillColor = { 'rgba(230,238,255,0.5)' }
        // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
        />
      {props.loadData ? locations.map((marker, index) => {
          const coords = {
              latitude: marker.latitude,
              longitude: marker.longitude,
          };
          return (
            <MapView.Marker
               key={index}
               coordinate={coords}
               image={require('../../../assets/images/car.png')}
               title={marker.stationName}
               pinColor="#4CA497"
            />
          );
      }) : null}
    </MapView>
  )
};
export default Map;