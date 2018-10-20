import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const latDelta = 0.0922;
const lonDelta = ASPECT_RATIO * latDelta;


export function currentLocation() {
  return navigator.geolocation.getCurrentPosition((position) => {
          return {
            coords: 
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: latDelta,
                longitudeDelta: lonDelta,
              }
          },
          (error) => console.warn(error.message),
          { enableHighAccuracy: false, timeout: 10000 }
        }); 
}