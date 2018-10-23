import React from 'react';
import { View } from 'react-native';
import { FontAwesome } from "react-native-vector-icons";
import Modal from "react-native-modal";

import styles from '../styles/homeStyles';
import Text from '../../MyText';

const SuccessModal = (props) => {
  return ( 
  <Modal isVisible={props.visible}>
    <View style={styles.animation}>
      <View style={styles.modalBox}>
        <View style={{ flexDirection: 'row', marginTop:10, alignItems: 'center'}}>
          <FontAwesome style={{ marginLeft: 10 }} name='check-circle' size={50} color='#4CA497' />
          <Text style={{ fontFamily: 'HelveticaNeue-Medium',fontSize: 18, marginLeft: 20}}>Found a user 5 minutes away</Text>
        </View>
        <View style={{ marginTop: 20, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{ fontSize: 16, marginBottom: 1 }}>Would you like to notify the user</Text>
        </View>
        <View style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end', marginTop: 20}}>
          <Text style={{ color:'grey', width: 80}}success onPress={() => props.toggleState('foundUser')}>
            <Text>Cancel</Text>
          </Text>
          <Text style={{ width: 80}} onPress={() => props.toggleState('foundUser')}>
            <Text>Ok</Text>
          </Text>
        </View>
      </View>
    </View>
  </Modal>
   );
}
 
export default SuccessModal;