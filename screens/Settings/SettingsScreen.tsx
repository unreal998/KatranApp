import * as React from "react";
import {Button, Image, Picker, Text, TextInput, TextInputComponent, View} from "react-native";
import {style} from "./shSettingsScreen";
import Header from "../../components/Header/Header";
import {SIGN_OUT} from "../../constants/CommonTexts";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Icon} from "native-base";
import {auth} from "../../firebase/initFirebase";

const radio_props = [
    {label: 'Male', value: 0},
    {label: 'Female', value: 1}
];


export default class SettingsScreen extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.signOut = this.signOut.bind(this);
    }
    static navigationOptions =  {
        drawerIcon: (tint) => (
            <Icon name="build"/>
        ),
    };

    signOut() {
        auth.signOut().then(
            this.props.navigation.navigate('LogIn')
        );
    }

    render(){
        return(
            <View style={style.container}>
                <Header roomName="Settings" navigation={this.props.navigation}/>
                <View style={style.labelWrapper}>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>Name</Text>
                        <TextInput style={style.labelContent}>Maks</TextInput>
                    </View>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>E-mail</Text>
                        <TextInput style={style.labelContent}>unreal9981@gmail.com</TextInput>
                    </View>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>Phone</Text>
                        <TextInput style={style.labelContent}>+380973373022</TextInput>
                    </View>
                </View>
                <View style={style.labelWrapper}>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>Birthday</Text>
                        <TextInput style={style.labelContent}>29/08/1998</TextInput>
                    </View>
                </View>
                <View style={style.labelWrapper}>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>Gender</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>
                </View>
                <Button title={SIGN_OUT} onPress={this.signOut}/>
            </View>
        )
    }
}