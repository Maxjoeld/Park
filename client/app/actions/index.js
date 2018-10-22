export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';

import { Dimensions } from 'react-native';
//Import the sample data

export function currentLocation() {
  return dispatch => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const latDelta = 0.0222;
    const longDelta = ASPECT_RATIO * latDelta;
    navigator.geolocation.getCurrentPosition(
      (position) => {
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