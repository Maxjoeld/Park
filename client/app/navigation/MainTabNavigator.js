import React from 'react';
import { ImageBackground } from 'react-native';
import { createDrawerNavigator,createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { DrawerItems } from 'react-navigation';

// import TabBarIcon from '../components/TabBarsIcon';
import HomeScreen from '../screens/Home/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogoutScreen from '../screens/LogoutScreen';
// import bg from './Park-blr.jpg';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, {
  headerMode: 'none',
});
// HomeStack.navigationOptions = {
//   tabBarLabel: 'Homee',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

const styles = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.05,
  height: '100%',
  width:'100%',
  backgroundColor: 'green'
  // resizeMode: "stretch"
}; 
{/* <ImageBackground source={require('./Parkbg.jpg')} style={{width: '100%', height: '100%', opacity: 0.8}}> */}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{height:150,backgroundColor:'white', alignItems: 'center', 
    justifyContent:'center'}}>
      <Text style={{ fontFamily: 'HelveticaNeue-Thin',fontSize: 50}}>Park</Text>
    </View>
    <ScrollView>
        <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const { width } = Dimensions.get('window');
export default createDrawerNavigator({
  Home: HomeScreen,
  Profile:LinksScreen,
  Settings:SettingsScreen,
  Logout:LogoutScreen
}, {
  contentComponent: CustomDrawerComponent,
  // drawerWidth: width,
  contentOptions: {
    activeTintColor: '#0E9',
    inactiveTintColor: 'black'
  }
});
