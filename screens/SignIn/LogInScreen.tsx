import * as React from "react";
import {Button, ImageBackgroundComponent, Text, View} from "react-native";
import {style} from "./shSignInScreen";


export default class SignInScreen extends React.Component<any,any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <View style={style.logInForm}>

                    <Button title="Login" onPress={() => this.props.navigation.navigate('MainApp')} />
                    <Button title="SignUp" onPress={() => this.props.navigation.navigate('MainApp')} />
                </View>

            </View>
        )
    }
}