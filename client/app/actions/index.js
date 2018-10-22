export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
export const CHANGE_LOCATION = 'CHANGE_LOCATION';
import axios from 'axios';
import { Dimensions } from 'react-native';

import keys from '../../token.js'

//Import the sample data

export function currentLocation() {
  return dispatch => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const latDelta = 0.0222;
    const longDelta = ASPECT_RATIO * latDelta;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: latDelta,
            longitudeDelta: longDelta,
          }
        });
      },
      (error) => console.warn(error.message),
      { enableHighAccuracy: false, timeout: 10000 }
    );
  }
}

export function locateQuery(location) {
  return dispatch => {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    let address = url + location + `&key=${keys.mapKey}`;
    // axios.get(address)
    //   .then(res => {
    //     const latitude = res.data.results[0].geometry.location.lat;
    //     const longitude = res.data.results[0].geometry.location.lng;
    //     dispatch({
    //       type: CHANGE_LOCATION,
    //       payload: { latitude, longitude }
    //     });
    //   })
      // .catch(err => console.log('error'))
  }
}