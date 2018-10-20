import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import { Dropdown } from 'react-native-material-dropdown';
import styles from './SearchStyles';


const SearchBox = (props) => {
  return ( 
    <View style={styles.searchBox}>
      {!props.searching ?
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Leaving parking spot</Text>
          <InputGroup>
            <FontAwesome name='search' size={15} color='#FF5E3A'/>
            <Input  style={styles.inputSearch} placeholder='Enter your current location' />
          </InputGroup>
        </View>
      : <View style={styles.inputWrapper}>
          <Text style={styles.label}>Searching for parking</Text>
          <InputGroup>
            <FontAwesome name='search' size={15} color='#FF5E3A'/>
            <Input  style={styles.inputSearch} placeholder='Choose parking location' />
          </InputGroup>
        </View>
      }
    </View>
    
   );
}

export default SearchBox;