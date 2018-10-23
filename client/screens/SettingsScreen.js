import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { Header,Left,Right,Icon } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";
import Mod from "react-native-modal";


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="cog" style={{fontSize: 24, color: '#4CA497'}}/>
    )
  };

  render() {
    return (
      <ScrollView style={styles.container}>
         <Header>
          <Left>
            <Icon style={{ justifyContent: 'center'}} name="menu" onPress={() => this.props.navigation.openDrawer()}/>
          </Left>
        </Header>
        <View style={style.animation}>
          <Mod isVisible={true}>
            <View style={{ height: '40%', backgroundColor: 'white'}}>
              <Text>I am the modal content!</Text>
            </View>
          </Mod>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
