import React, { Component } from 'react';
import axios from 'axios';
import { Text,TextInput, KeyBoard } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import { Dropdown } from 'react-native-material-dropdown';
import styles from './SearchStyles';

class SearchBox extends Component {
  state = { 
    location: ''
   }

  componentWillMount () {
    // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }


  locateQuery = () => {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    let address = url + this.state.location + process.env.MAP_KEY;
    console.log(address);
  }

  render() {
    console.log(this.state.location); 
    return ( 
      <View style={styles.searchBox}>
        {!this.props.searching ?
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Leaving parking spot</Text>
            <InputGroup>
              <FontAwesome name='search' size={15} color='#FF5E3A'/>
              <Input 
                style={styles.inputSearch} 
                value={this.state.location}
                name='location'
                onChangeText={(location) => this.setState({ location })} 
                placeholder='Enter your current location'
                returnKeyType="search"
                />
            </InputGroup>
          </View>
        : <View style={styles.inputWrapper}>
            <Text style={styles.label}>Searching for parking</Text>
            <InputGroup>
              <FontAwesome name='search' size={15} color='#FF5E3A'/>
              <Input 
                style={styles.inputSearch} 
                value={this.state.location}
                name='location'
                onChangeText={(location) => this.setState({ location })} 
                placeholder='Choose parking location'
                returnKeyType="search"
                />
            </InputGroup>
          </View>
        }
      </View>
    )   
  }
}
 
export default SearchBox;