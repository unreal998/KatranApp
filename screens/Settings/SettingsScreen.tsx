import * as React from "react";
import {Button, Image, Picker, Text, TextInput, TextInputComponent, View} from "react-native";
import {style} from "./shSettingsScreen";
import Header from "../../components/Header/Header";
import {SIGN_OUT} from "../../constants/CommonTexts";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Icon} from "native-base";

const radio_props = [
    {label: 'Мужской', value: 0},
    {label: 'Женский', value: 1}
];


export default class SettingsScreen extends React.Component<any, any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    static navigationOptions =  {
        drawerIcon: (tint) => (
            <Icon name="home"/>
        ),
    };

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
                        <Text style={style.labelName}>Дата рождения</Text>
                        <TextInput style={style.labelContent}>29/08/1998</TextInput>
                    </View>
                </View>
                <View style={style.labelWrapper}>
                    <View style={style.labelContainer}>
                        <Text style={style.labelName}>Пол</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({value:value})}}
                        />
                    </View>
                </View>
                <Button title={SIGN_OUT} onPress={()=> this.props.navigation.navigate('LogIn')}/>
            </View>
        )
    }
}