import React from 'react';
import { connect } from 'react-redux';
import { Modal, View } from 'react-native';
import { FontAwesome } from "react-native-vector-icons";

import Footer from './template/footer'
import SearchBox from './searchbox';
import HomeHeader from './template/homeHeader';
import Map from './map/map';
import SuccessModal from './modal-anim/successModal';
import CarAnimation from './modal-anim/carAnimation';
import DriverDetail from './driverDetail';
import { currentLocation, locateQuery, locateDistance } from '../../actions';
import styles from './styles/homeStyles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="home" style={{fontSize: 24, color: '#0E9'}}/>
    ),
    tabBarOptions: { activeTintColor:'red'}
  };
  
  state = {
    loadData: false,
    searching: false,
    radius: 450,
    loadCarAnimation: false,
    visible: false,
    loadDetail: false,
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
      case 'loadDetail':
        return this.setState({ loadDetail: true })
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
    const { loadDetail, visible, searching, radius, loadData,loadCarAnimation } = this.state;
    const { coords, locateDistance, locateQuery } = this.props;
    return (
      <View style={styles.container}>
        <HomeHeader navigation={this.props.navigation}/>
        {loadCarAnimation ? 
          <CarAnimation /> 
        : null }
        {this.loadDetail ?
          <DriverDetail />
        :null }
        <SuccessModal 
          visible={visible} 
          toggleState={this.toggleState}
          locateDistance={locateDistance}
        />
        {coords ? 
          <Map coords={coords} 
            radius={radius} 
            loadData={loadData}
          /> 
        : null }
        <SearchBox 
          searching={searching} 
          locate={locateQuery}
        />
        <Footer
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

export default connect(mapStateToProps, { currentLocation, locateQuery, locateDistance })(HomeScreen);

