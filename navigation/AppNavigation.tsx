import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from "./DrawerNavigator";
import AuthNavigation from "./AuthNavigation";

const AppNavigation = createSwitchNavigator({
    SignIn: AuthNavigation,
    MainApp: DrawerNavigator});

export default createAppContainer(AppNavigation);