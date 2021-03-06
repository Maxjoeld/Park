import React from 'react';
import { Header, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native';


const HomeHeader = (props) => {
  return ( 
    <Header>
      <Left>
        <Icon name="menu" onPress={() => props.navigation.openDrawer()}/>
      </Left>
      <Body>
        <Text style={{ fontFamily: 'HelveticaNeue-Thin',fontSize: 30}}>Park</Text>
      </Body>
      <Right>
      </Right>
    </Header>
   );
}
 
export default HomeHeader;