import React from 'react';
import { Text } from 'react-native';
import { View, InputGroup, Input } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import { Dropdown } from 'react-native-material-dropdown';
import styles from './SearchStyles';


const SearchBox = () => {
  return ( 
    <View style={styles.searchBox}>
      {/* <View style={{ display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
        <FontAwesome name='car' size={15} color='#FF5E3A'/>
        <Text style={{ marginLeft: 5 }}>Searching</Text>
      </View> */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Searching for parking</Text>
        <InputGroup>
          <FontAwesome name='search' size={15} color='#FF5E3A'/>
          <Input  style={styles.inputSearch} placeholder='Choose parking location' />
        </InputGroup>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Leaving parking spot</Text>
        <InputGroup>
          <FontAwesome name='search' size={15} color='#FF5E3A'/>
          <Input  style={styles.inputSearch} placeholder='Choose parking location' />
        </InputGroup>
      </View>
    </View>
    
   );
}
 
export default SearchBox;