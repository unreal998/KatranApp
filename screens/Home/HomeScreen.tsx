import * as React from "react";
import {Button, ImageBackground, Image, Text, View} from "react-native";
import {style} from "./shHomeScreen";
import {SIGN_OUT, SIGN_UP} from "../../constants/CommonTexts";
import {Header} from "../../components/Header/Header";

export default class HomeScreen extends React.Component<any,any> {
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header text={`Hello ${navigation.getParam("userName")}`}/>
        };
    };
    // state = {
    //     isLoadingComplete: false,
    // };
    render(){
        const { navigation } = this.props;
        const reserves = navigation.getParam('reserves');
        const balance = navigation.getParam('balance');
        const curse = navigation.getParam('curse');
        const basket = navigation.getParam('basket');

        return(
            <View style={style.container}>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/reserved.png")}/>
                    <Text style={style.homeNavsText}>Reserves: {JSON.stringify(reserves)}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/wallet.png")}/>
                    <Text style={style.homeNavsText}>Balance: {JSON.stringify(balance)}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/exchange.png")}/>
                    <Text style={style.homeNavsText}>Curse: {JSON.stringify(curse)}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/basket.png")}/>
                    <Text style={style.homeNavsText}>Basket: {JSON.stringify(basket)}</Text>
                </View>
            </View>
        )
    }
}