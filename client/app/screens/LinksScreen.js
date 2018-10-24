import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header,Left,Right,Icon } from 'native-base';
import { FontAwesome } from "react-native-vector-icons";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: (tintColor) => (
      <FontAwesome name="user" style={{fontSize: 24, color: '#4CA497'}}/>
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
        <Text>Profile</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
