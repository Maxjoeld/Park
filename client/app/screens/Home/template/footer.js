import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Footer, Button } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import Text from '../../MyText';

import { MKSlider } from 'react-native-material-kit';
import styles from '../styles/homeStyles';

class FooterComp extends Component {
  state = {  }
  render() { 
    return ( 
      <Footer style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <FontAwesome name='car' size={15} color='#4CA497'/>
          {this.props.searching ?
            <Text onPress={() => this.props.toggleState('searching')} style={{ marginLeft: 2 }}>Searching</Text>  
          : <Text onPress={() => this.props.toggleState('searching')} style={{ marginLeft: 2 }}>Leaving</Text>     
          }
        </View>
        <View style={styles.slideView}>
          <Text style={styles.slideText}>Radius:{Math.round(this.props.radius)}</Text>
          <MKSlider
            ref="sliderWithValue"
            min={10}
            max={4000}
            value={(this.props.radius)}
            style={styles.slider}
            onChange={(value) => this.props.toggleState('radius', value)}
            />
        </View>
        <View >
          <Button style={{backgroundColor: '#4CA497'}}
            onPress={() => this.props.loaderSearchAnim('show')}
          >
            <Text style={{ color: 'white', paddingLeft:10, paddingRight: 10}}>Search</Text>
          </Button>
        </View>
      </Footer>
     );
  }
}
 
export default FooterComp;
