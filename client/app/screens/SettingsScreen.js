import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header,Left,Right,Icon } from 'native-base';
import { View, InputGroup, Input } from 'native-base';

import { FontAwesome } from "react-native-vector-icons";
import Mod from "react-native-modal";


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="cog" style={{fontSize: 24, color: '#0E9'}}/>
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
        <InputGroup >
          <FontAwesome name='search' style={{ paddingTop: 13}} size={15} color='#FF5E3A'/>
          <Input
            // style={styles.inputSearch} 
            // value={this.state.firstName}
            placeholder='First Name'
            onSubmitEditing={() => this.submit}
            // returnKeyType="search"
            />
            <Input
            // style={styles.inputSearch} 
            // value={this.state.lastName}
            placeholder='Last Name'
            onSubmitEditing={() => this.submit}
            returnKeyType="search"
            />
             <Input
            // style={styles.inputSearch} 
            // value={this.state.email}
            name='location'
            placeholder='Email'
            onSubmitEditing={() => this.submit}
            returnKeyType="search"
            />
        </InputGroup>
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
