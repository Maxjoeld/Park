import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";

import styles from './SearchStyles'

const SearchBox = () => {
  return ( 
    <View style={styles.searchBox}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Search for Parking</Text>
        <InputGroup>
          <FontAwesome name='search' size={15} color='#FF5E3A'/>
          <Input  style={styles.inputSearch} placeholder='Choose parking location' />
        </InputGroup>
      </View>
    </View>
   );
}
 
export default SearchBox;