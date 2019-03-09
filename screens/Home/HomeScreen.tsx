import * as React from "react";
import {connect} from "react-redux";
import {Button, ImageBackground, Image, Text, View} from "react-native";
import {style} from "./shHomeScreen";
import {SIGN_OUT, SIGN_UP} from "../../constants/CommonTexts";
import {Header} from "../../components/Header/Header";
import store from "../../store";
import {authAction} from "../../actions/authAction";
import {AUTH_ACTION} from "../../constants/ActionTypes";
import {bindActionCreators} from "redux";

export default class HomeScreen extends React.Component<any,any> {
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header text={`Hello ${navigation.getParam("userName")}`}/>
        };
    };

    // state = {
    //     isLoadingComplete: false,
    // };
    componentWillMount(){
        store.dispatch(authAction);
    }
    render(){
        // const { navigation } = this.props;
        // const reserves = navigation.getParam('reserves');
        // const balance = navigation.getParam('balance');
        // const curse = navigation.getParam('curse');
        // const basket = navigation.getParam('basket');

        return(
            <View style={style.container}>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/reserved.png")}/>
                    <Text style={style.homeNavsText}>Reserves: {this.props.reserves}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/wallet.png")}/>
                    <Text style={style.homeNavsText}>Balance: {this.props.balance}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/exchange.png")}/>
                    <Text style={style.homeNavsText}>Curse: {this.props.curse}</Text>
                </View>
                <View style={style.navBar}>
                    <Image style={{width: 40, height: 40}} source={require("../../assets/images/basket.png")}/>
                    <Text style={style.homeNavsText}>Basket: {this.props.basket}</Text>
                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
  return{
      getDataFromStore: ()=> dispatch({type: AUTH_ACTION})
  }

};

const mapStateToProps = function (state):IUserDetails {
    return {
        basket: state.basket,
        curse: state.curse,
        balance: state.balance,
        reserves: state.reserves,
        userName: state.userName
    }
};

connect(mapStateToProps, mapDispatchToProps)(HomeScreen);