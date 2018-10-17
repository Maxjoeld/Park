import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator,createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import { DrawerItems } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogoutScreen from '../screens/LogoutScreen';

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

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{height:150,backgroundColor:'white', alignItems: 'center', 
    justifyContent:'center'}}>
      <Text>Hey</Text>
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
    activeTintColor: 'orange'
  }
});
