import * as React from "react";
import {Text, View} from "react-native";
import {style} from "./shSettingsScreen";
import {Header} from "../../components/Header/Header";

export default class SettingsScreen extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header roomName= {`Settings`}/>
        };
    };
    render(){
        return(
            <View style={style.container}>
                <Text>Settings</Text>
            </View>
        )
    }
}