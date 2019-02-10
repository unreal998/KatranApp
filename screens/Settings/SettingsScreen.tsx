import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shSettingsScreen";

export default class SettingsScreen extends React.Component {
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