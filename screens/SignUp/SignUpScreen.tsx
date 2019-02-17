import * as React from "react";
import {Button, ImageBackground, ImageBackgroundComponent, Text, TextInput, View} from "react-native";
import {style} from "./shSignUpScreen";
import {PASSWORD, REGISTRATION, REPEAT_PASSWORD} from "../../constants/CommonTexts";



export default class SignUpScreen extends React.Component<any,any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <View style={style.signUpForm}>
                    <ImageBackground style={style.bgImage} source={require("../../assets/images/logo.png")}>
                    <TextInput placeholder="E-MAIL" style={style.textInput}/>
                    <TextInput secureTextEntry={false} placeholder={PASSWORD} style={style.textInput}/>
                    <TextInput  secureTextEntry={false} placeholder={REPEAT_PASSWORD} style={style.textInput}/>
                    <View style={style.authButtons}>
                        <Button title={REGISTRATION} onPress={() => this.props.navigation.navigate('LogIn')} />
                    </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}