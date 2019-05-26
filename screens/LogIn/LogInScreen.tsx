import * as React from "react";
import {Button, ImageBackground, ImageBackgroundComponent, TextInput, View} from "react-native";
import {style} from "./shLogInScreen";
import {LOGIN, PASSWORD, SIGN_UP} from "../../constants/CommonTexts";
import {auth} from "../../firebase/initFirebase";
import {error} from "util";


export default class LogInScreen extends React.Component<any,any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.authorization = this.authorization.bind(this);
    }
    authorization() {
        if (this.state.email === '' || this.state.password === '') {
            alert('empty field');
            return;
        }
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(
            cred => {
                alert(cred.user.email);
                this.props.navigation.navigate('MainApp');
            }
        )
        .catch(error => alert(error))
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.logInForm}>
                    <ImageBackground style={style.bgImage} source={require("../../assets/images/logo.png")}>
                        <TextInput placeholder={LOGIN} onChangeText={email => this.setState({email})} style={style.textInput}/>
                        <TextInput secureTextEntry={false} placeholder={PASSWORD} onChangeText={password => this.setState({password})} style={style.textInput}/>
                        <View style={style.authButtons}>
                            <Button title={LOGIN} onPress={() => this.authorization()} />
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