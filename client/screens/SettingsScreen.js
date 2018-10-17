import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header,Left,Right,Icon } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="cog" style={{fontSize: 24, color: 'orange'}}/>
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
        <Text>Settings</Text>
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
