import * as React from 'react';
import {Provider} from 'react-redux';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import AppNavigation from "./navigation/AppNavigation";
import addNavigationHelpers from "react-navigation";
import store from "./store";
import {connect} from "react-redux";
import {commonReduser} from "./reducers/commonReduser";

const style = StyleSheet.create({
    container: {
        flex: 1,
    }
});


export default () => (
    <Provider store={store}>
        <View style={style.container}>
            <StatusBar hidden={true}/>
            <AppNavigation/>
        </View>
    </Provider>
)


