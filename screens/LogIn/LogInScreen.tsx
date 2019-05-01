import * as React from "react";
import {Button, ImageBackground, ImageBackgroundComponent, TextInput, View} from "react-native";
import {style} from "./shLogInScreen";
import {LOGIN, PASSWORD, SIGN_UP} from "../../constants/CommonTexts";


export default class LogInScreen extends React.Component<any,any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <View style={style.logInForm}>
                    <ImageBackground style={style.bgImage} source={require("../../assets/images/logo.png")}>
                        <TextInput placeholder={LOGIN} style={style.textInput}/>
                        <TextInput secureTextEntry={false} placeholder={PASSWORD} style={style.textInput}/>
                        <View style={style.authButtons}>
                            <Button title={LOGIN} onPress={() => this.props.navigation.navigate('MainApp')} />
                        </View>
                        <View style={style.authButtons}>
                            <Button title={SIGN_UP} onPress={() => this.props.navigation.navigate('SignUp')} />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}