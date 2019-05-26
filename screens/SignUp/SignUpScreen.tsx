import * as React from "react";
import {
    AlertAndroid,
    AlertIOS,
    Button,
    ImageBackground,
    ImageBackgroundComponent,
    Text,
    TextInput,
    View
} from "react-native";
import {style} from "./shSignUpScreen";
import {PASSWORD, REGISTRATION, REPEAT_PASSWORD} from "../../constants/CommonTexts";
import {auth, database} from "../../firebase/initFirebase";
import {initialState} from "../../reducers/commonReduser";



export default class SignUpScreen extends React.Component<any,any> {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatedPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // state = {
    //     isLoadingComplete: false,
    // };
    handleSubmit() {
        if (this.state.password !== this.state.repeatedPassword)  {
            alert(`incorrect repeat pass`);
            return
        }
        if (this.state.email === '') {
            alert(`incorrect mail`);
            return
        }
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then( cred  => {
            cred.additionalUserInfo.profile = initialState;
            alert(`user ${this.state.email} created`);
            database.ref().child('usersData').child(cred.user.uid).set({
                    Email: cred.user.email,
                    birthday: " ",
                    phoneNumber: " ",
                    gender: "male",
                    userName: " "
            }).then(
                this.props.navigation.navigate('LogIn')
            )
            .catch(error => alert(error))
        })
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.signUpForm}>
                    <ImageBackground style={style.bgImage} source={require("../../assets/images/logo.png")}>
                    <TextInput placeholder="E-MAIL" style={style.textInput} onChangeText={ email => {this.setState({email})}}/>
                    <TextInput secureTextEntry={false} placeholder={PASSWORD} onChangeText={password => {this.setState({password})}} style={style.textInput}/>
                    <TextInput  secureTextEntry={false} placeholder={REPEAT_PASSWORD} onChangeText={repeatedPassword => {this.setState({repeatedPassword})}} style={style.textInput}/>
                    <View style={style.authButtons}>
                        <Button title={REGISTRATION} onPress={() => this.handleSubmit()} />
                    </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}