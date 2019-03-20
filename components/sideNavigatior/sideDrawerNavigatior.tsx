import * as React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import styles from "./shSideDrawerNavigation";
import { DrawerItems, SafeAreaView } from 'react-navigation';


const sideDrawerNavigator  = props => (
    <ScrollView>
        <Image source={require("../../assets/images/logo.png")}/>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
export default sideDrawerNavigator;