import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MainTabNavigator from "./MainTabNavigator";


export default createDrawerNavigator({
    MainApp: {screen: MainTabNavigator}
})