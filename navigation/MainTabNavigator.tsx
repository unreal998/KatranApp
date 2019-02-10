import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import * as React from "react";
import CatalogueScreen from "../screens/Catalogue/CatalogueScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home'
};

const CatalogueStack = createStackNavigator({
    Links: CatalogueScreen,
});

CatalogueStack.navigationOptions = {
    tabBarLabel: 'Catalogue'
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings'
};

export default createBottomTabNavigator({
    HomeStack,
    CatalogueStack,
    SettingsStack,
});
