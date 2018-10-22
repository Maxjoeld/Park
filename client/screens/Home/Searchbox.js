import React, { Component } from 'react';
import axios from 'axios';
import { Text,TextInput, KeyBoard } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import keys from '../../token.js'
import styles from './SearchStyles';

class SearchBox extends Component {
  state = { 
    location: ''
   }

  render() {
    const { location } = this.state; 
    return ( 
      <View style={styles.searchBox}>
        {!this.props.searching ?
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Leaving parking spot</Text>
            <InputGroup >
              <FontAwesome name='search' style={{ paddingTop: 13}} size={15} color='#FF5E3A'/>
              <Input
                style={styles.inputSearch} 
                value={this.state.location}
                name='location'
                onChangeText={(location) => this.setState({ location })}
                value={'Current Location'}
                placeholder='Enter your current location'
                onSubmitEditing={() => this.props.locate(location)}
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
                onSubmitEditing={() => this.props.locate(location)}
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