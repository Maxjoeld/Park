import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import { Footer, Header, Left, Right, Body, Icon } from 'native-base';
import { MapView } from "expo";
import { MonoText } from '../components/StyledText';
import { Dimensions } from 'react-native';
var width = Dimensions.get("window").width; 
import SearchBox from './Searchbox';
import { MKSlider } from 'react-native-material-kit';
import { currentLocation, locateQuery } from '../app/actions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="home" style={{fontSize: 24, color: '#FF5E3A'}}/>
    )
  };

  state = {

    isLoading: true,
    markers: [],
    searching: false,
    radius: 300,
  };

  componentDidMount() {
    this.props.currentLocation()
  }

  toggleState = () => {
    this.setState({
      searching: !this.state.searching
    })
  }

  changeRadius(value) {
    this.setState({radius: value});
  }


  render() {
    const { searching } = this.state;
    const { coords } = this.props;
    console.log(this.state.radius);
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Body>
          
          </Body>
          <Right>
          </Right>
        </Header>
      {this.props.coords ?
      <MapView
        style={{ flex: 1 }}
        provider="google"
        region={this.props.coords}
      >
      <MapView.Marker
        // key={index}
        coordinate={this.props.coords}
        title='Home'
        // description={'This is home'}
        pinColor="green"
      />
      <MapView.Circle
        center = { this.props.coords }
        radius = { this.state.radius }
        strokeWidth = { 1 }
        strokeColor = { '#1a66ff' }
        fillColor = { 'rgba(230,238,255,0.5)' }
        // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
        />
      {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          const coords = {
              latitude: marker.latitude,
              longitude: marker.longitude,
          };

          const metadata = `Status: ${marker.statusValue}`;

          return (
              <MapView.Marker
                 key={index}
                 coordinate={coords}
                 title={marker.stationName}
                 description={metadata}
                 pinColor="green"
              />
          );
        })}
      </MapView>
      :null }
      <SearchBox searching={searching} locate={this.props.locateQuery} />
        <Footer style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          {/* <Text>Hey</Text> */}
          <View style={{ display: 'flex', flexDirection: 'row'}}>
            <FontAwesome name='car' size={15} color='#FF5E3A'/>
            {searching ?
              <Text onPress={() => this.toggleState()} style={{ marginLeft: 2 }}>Searching</Text>  
            : <Text onPress={() => this.toggleState()} style={{ marginLeft: 2 }}>Leaving</Text>     
            }
          </View>
          <View style={styles.slideView}>
            <Text style={styles.slideText}>Radius:{Math.round(this.state.radius)}</Text>
            <MKSlider
                 ref="sliderWithValue"
                 min={10}
                 max={4000}
                 value={(this.state.radius)}
                 style={styles.slider}
                 onChange={(value) => this.changeRadius(value)}
                 />
          </View>
        </Footer>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    coords: state.locationReducer.coords,
  };
};

export default connect(mapStateToProps, { currentLocation, locateQuery })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  slideView: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.8,
  },
  slider: {
    width: 130,
    opacity:0.8,
    height: 30,
  },
  slideText: {
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    opacity:0.8,
  },
});
