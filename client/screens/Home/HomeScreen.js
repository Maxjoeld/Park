import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Modal, View, Alert} from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import { Footer, Header, Left, Right, Body, Icon, Button } from 'native-base';
import { MapView } from "expo";
import { Dimensions } from 'react-native';
import SearchBox from './Searchbox';
import { MKSlider } from 'react-native-material-kit';
import { currentLocation, locateQuery } from '../../app/actions';
var width = Dimensions.get("window").width; 
import locations from './randomAddress';


class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="home" style={{fontSize: 24, color: '#FF5E3A'}}/>
    )
  };

  state = {
    loadData: false,
    markers: [],
    searching: false,
    radius: 450,
    loadAnim: false,
  };

  componentDidMount() {
    this.props.currentLocation()
  }

  toggleState = () => {
    this.setState({
      searching: !this.state.searching
    })
  }

  changeRadius = (value) => {
    this.setState({radius: value});
  }

  loaderSearchAnim = () => {
    this.setState({
      loadAnim: true
    });
    setTimeout(() => this.setState({ loadData: true, loadAnim: false }), 1000);
  }
  render() {
    const { searching } = this.state;
    const { coords } = this.props;
    console.log(locations);
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Body>
            <Text style={{ fontFamily: 'HelveticaNeue-Thin',fontSize: 30}}>Park</Text>
          </Body>
          <Right>
          </Right>
        </Header>
        {this.state.loadAnim ? 
          <Modal
           animationType="fade"
          //  transparent={false}
          >
            <View style={styles.animation}>
              {/* <Text style={{fontSize: 40}}></Text> */}
              <FontAwesome name='car' size={30} color='#FF5E3A'/>
            </View>
          </Modal>
        : null}
      {coords ?
      <MapView
        style={{ flex: 1 }}
        provider="google"
        region={coords}
      >
      <MapView.Marker
        // key={index}
        coordinate={coords}
        title='Home'
        // description={'This is home'}
        pinColor="green"
      />
      <MapView.Circle
        center = { coords }
        radius = { this.state.radius }
        strokeWidth = { 1 }
        strokeColor = { '#1a66ff' }
        fillColor = { 'rgba(230,238,255,0.5)' }
        // onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
        />
      {this.state.loadData ? locations.map((marker, index) => {
          const coords = {
              latitude: marker.latitude,
              longitude: marker.longitude,
          };
          return (
              <MapView.Marker
                 key={index}
                 coordinate={coords}
                 image={require('./car.png')}
                 title={marker.stationName}
                 pinColor="green"
              />
          );
        }) : null}
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
          <View >
            <Button info
              onPress={() => this.loaderSearchAnim('show')}
            >
              <Text style={{ color: 'white', paddingLeft:10, paddingRight: 10}}>Search</Text>
            </Button>
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
  animation: {
    position: 'absolute',
    top: 60,
    zIndex: 10,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
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
