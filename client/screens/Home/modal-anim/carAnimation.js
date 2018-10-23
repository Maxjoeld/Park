import React from 'react';
import { Modal, View } from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import styles from '../styles/homeStyles';

const CarAnimation = () => {
  return ( 
    <Modal animationType="fade">
      <View style={styles.animation}>
        <FontAwesome name='car' size={30} color='#FF5E3A'/>
      </View>
    </Modal>
   );
}
 
export default CarAnimation;