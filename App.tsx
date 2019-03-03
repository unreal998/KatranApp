import * as React from 'react';
import {Provider} from 'react-redux';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import AppNavigation from "./navigation/AppNavigation";
import store from "./store";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0"
    }
});
export default class App extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <Provider store={store}>
            <View style={style.container}>
               <StatusBar hidden={true}/>
               <AppNavigation/>
            </View>
            </Provider>
        )
    }
}


