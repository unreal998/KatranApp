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
import Header from "../components/Header/Header";
import {Icon} from "native-base";




const DrawerNavigator =  createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Orders: {
        screen: OrdersScreen
    },
    Catalogue: {
        screen: CatalogueScreen
    },
    Settings: {
        screen: SettingsScreen,
    },
    Promotions: {
        screen: PromotionsScreen
    }
    },
    {
        drawerBackgroundColor: "#FFFFFF",
        contentComponent: sideDrawerNavigator,
        contentOptions: {
            activeTintColor: 'orange'
        }
    });

export default DrawerNavigator;