import React, { Component } from 'react'; 
import {
  Text, View
} from 'react-native';
import styles from './driverStyles';

class DriverDetail extends Component {
  state = {  }
  render() { 
    return ( 
      <View style={styles.searchBox}>
        <Text>DriverDetail page</Text>
        <View>
          <Text>
            Driver 
          </Text>
          <Text>
            Driver rating
          </Text>
        </View>
      </View>
     );
  }
}
 
export default DriverDetail;