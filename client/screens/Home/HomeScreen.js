import React from 'react';
import { connect } from 'react-redux';
import { Modal, View, Text} from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import { Button } from 'native-base';
import Mod from "react-native-modal";

import FooterComp from './footer'
import SearchBox from './Searchbox';
import HomeHeader from './homeHeader';
import Map from './map';
import { currentLocation, locateQuery } from '../../app/actions';
import styles from './homeStyles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="home" style={{fontSize: 24, color: '#FF5E3A'}}/>
    )
  };
  
  state = {
    loadData: false,
    searching: false,
    radius: 450,
    loadCarAnimation: false,
    visible: false,
  };

  componentDidMount() {
    this.props.currentLocation()
  }

  toggleState = (state, value) => {
    switch (state) {
      case 'foundUser':
        return this.setState({ visible: false })
      case 'searching':
        return this.setState({ searching: !this.state.searching })
      case 'radius':
        return this.setState({radius: value});
    }
  }

  loaderSearchAnim = () => {
    this.setState({
      loadCarAnimation: true
    });
    setTimeout(() => this.setState({ 
      loadData: true, 
      loadCarAnimation: false,
    }), 1000);
    setTimeout(() => this.setState({ visible: true }), 1500);
  }
  render() {
    const { visible, searching, radius, loadData,loadCarAnimation } = this.state;
    const { coords } = this.props;
    return (
      <View style={styles.container}>
        <HomeHeader navigation={this.props.navigation}/>
        {loadCarAnimation ? 
          <Modal animationType="fade">
            <View style={styles.animation}>
              <FontAwesome name='car' size={30} color='#FF5E3A'/>
            </View>
          </Modal>
        : null}
        {/* {foundUser ? */}
        <Mod isVisible={visible}>
          <View style={styles.animation}>
            <View style={{ width: '100%',height: '40%', backgroundColor: 'white', opacity:0.9}}>
              <Text>Found a user 5 minutes away !</Text>
              <Text>Would you like to notify the user</Text>
              <Button success onPress={() => this.toggleState('foundUser')}>
                <Text>Yes</Text>
              </Button>
              <Button style={{ width: 50}}success onPress={() => this.toggleState('foundUser')}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </Mod>
        : null}
        {coords ? <Map coords={coords} radius={radius} loadData={loadData}/> : null }
        <SearchBox searching={searching} locate={this.props.locateQuery}/>
        <FooterComp
          searching={searching} 
          toggleState={this.toggleState} 
          radius={radius} 
          loaderSearchAnim={this.loaderSearchAnim}
        />
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

