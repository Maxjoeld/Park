import React from 'react';
import axios from 'axios';

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
import { Header,Left,Right, Body, Icon } from 'native-base';
import { MapView } from "expo";
import { MonoText } from '../components/StyledText';
import { Dimensions } from 'react-native';
import SearchBox from './Searchbox';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="home" style={{fontSize: 24, color: 'orange'}}/>
    )
  };

  state = {
    isLoading: true,
    markers: [],
    coords: { latitude: 0,longitude: 0, latitudeDelta: 0,longitudeDelta: 0 },
    searching: true,
  };

  componentDidMount() {
    this.currentLocation()
  }

  currentLocation = () => {
    const { width, height } = Dimensions.get('window');
    const ASPECT_RATIO = width / height;
    const latDelta = 0.0922;
    const longDelta = ASPECT_RATIO * latDelta;
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ 
        coords: 
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: latDelta,
            longitudeDelta: longDelta,
          }
      }),
      (error) => console.warn(error.message),
      { enableHighAccuracy: false, timeout: 10000 }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
          <Body>
            <View style={{ display: 'flex', flexDirection: 'row'}}>
              <FontAwesome name='car' size={15} color='#FF5E3A'/>
              <Text style={{ marginLeft: 2 }}>Searching</Text>
            </View>
          </Body>
          <Right />
        </Header>
      {this.state.coords ? 
      <MapView
        style={{ flex: 1 }}
        provider="google"
        region={this.state.coords}
      >
      <MapView.Marker
        // key={index}
        coordinate={this.state.coords}
        title='This is your home'
        description={'This is home'}
        pinColor="green"
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
      <SearchBox />
        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
