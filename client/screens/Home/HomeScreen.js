import React from 'react';
import { connect } from 'react-redux';
import {  Modal, View, Dimensions} from 'react-native';
// import Modal from 'react-native-modalbox';
import { FontAwesome } from "react-native-vector-icons";

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
    const { searching, radius, loadData } = this.state;
    const { coords } = this.props;
    return (
      <View style={styles.container}>
        <HomeHeader />
        {this.state.loadAnim ? 
          <Modal animationType="fade">
            <View style={styles.animation}>
              <FontAwesome name='car' size={30} color='#FF5E3A'/>
            </View>
          </Modal>
        : null}
        {coords ? <Map coords={coords} radius={radius} loadData={loadData}/> : null }
        <SearchBox searching={searching} locate={this.props.locateQuery}/>
        <FooterComp
          searching={searching} 
          toggleState={this.toggleState} 
          radius={radius} 
          changeRadius={this.changeRadius} 
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

