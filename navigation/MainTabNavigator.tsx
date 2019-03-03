import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import * as React from "react";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import ReservesScreen from "../screens/ReservesScreen/ReservesScreen";

const HomeStack = createStackNavigator({
    Home: HomeScreen,

});

const barOptions = {
    style:{

    },
    labelStyle: {

    },
    tabStyle: {

    }
};

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarOptions: barOptions
};

const ReservesStack = createStackNavigator({
    Links: ReservesScreen,
});

ReservesStack.navigationOptions = {
    tabBarLabel: 'Reserves',
    tabBarOptions: barOptions
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarOptions: barOptions
};

export default createBottomTabNavigator({
    HomeStack,
    ReservesStack,
    SettingsStack,
});
