import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shHomeScreen";

export default class HomeScreen extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <Text>Home</Text>
            </View>
        )
    }
}