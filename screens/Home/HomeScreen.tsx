import * as React from "react";
import {Button, ImageBackground, Text, View} from "react-native";
import {style} from "./shHomeScreen";
import {SIGN_UP} from "../../constants/CommonTexts";

export default class HomeScreen extends React.Component<any,any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        return(
            <View style={style.container}>
                <Text>Home</Text>
                <View>
                    <Text>Reserves</Text>
                </View>
                <View>
                    <Text>Balance</Text>
                </View>
                <View>
                    <Text>Curse</Text>
                </View>
                <View>
                    <Text>Basket</Text>
                </View>
                <View>
                    <Button title={SIGN_UP} onPress={() => this.props.navigation.navigate('SignIn')} />
                </View>
            </View>
        )
    }
}