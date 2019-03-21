import { createStackNavigator, DrawerItems } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import OrdersScreen from "../screens/ReservesScreen/OrdersScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import * as React from "react";

import {SafeAreaView, ScrollView, Text} from "react-native";
import sideDrawerNavigator from "../components/sideNavigatior/sideDrawerNavigatior";
import CatalogueScreen from "../screens/Catalogue/CatalogueScreen";
import PromotionsScreen from "../screens/Promotions/PromotionsScreen";



const HomeStack = createStackNavigator({
    Home: HomeScreen,
});
const ReservesStack = createStackNavigator({
    Links: OrdersScreen,
});
const CatalogueStack = createStackNavigator({
    Catalogue: CatalogueScreen
});
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});
const PromotionStack = createStackNavigator({
    Promotions: PromotionsScreen
});

const DrawerNavigator =  createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Orders: {
        screen: ReservesStack
    },
    Catalogue: {
        screen: CatalogueStack
    },
    Settings: {
        screen: SettingsStack
    },
    Promotions: {
        screen: PromotionStack
    }
    },
    {
        drawerBackgroundColor: "#FFFFFF",
        contentComponent: sideDrawerNavigator,

    });

export default DrawerNavigator;