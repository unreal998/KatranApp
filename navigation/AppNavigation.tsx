import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from "./DrawerNavigator";
import LogInScreen from "../screens/LogIn/LogInScreen";

const AppNavigation = createSwitchNavigator({
    SignIn: {screen: LogInScreen},
    MainApp: DrawerNavigator});

export default createAppContainer(AppNavigation);