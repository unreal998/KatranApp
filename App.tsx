import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppNavigation from "./navigation/AppNavigation";
export default class App extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
               <AppNavigation/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0"
    }
});
