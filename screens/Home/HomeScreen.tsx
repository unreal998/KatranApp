import * as React from "react";
import {connect} from "react-redux";
import {Button, ImageBackground, Image, Text, View, ScrollView} from "react-native";
import {style} from "./shHomeScreen";
import {Header} from "../../components/Header/Header";
import store from "../../store";
import {authAction} from "../../actions/authAction";
import {AUTH_ACTION} from "../../constants/ActionTypes";
import {bindActionCreators} from "redux";

class HomeScreen extends React.Component<any,any> {
    constructor(props){
        super(props)
    }
    static navigationOptions = ({navigation}) => {
        return {
            header: props => <Header/>,
            drawerIcon: (
                <Image source={require("../../assets/images/wallet.png")}/>
            )
        };
    };

    // state = {
    //     isLoadingComplete: false,
    // };
    componentWillMount(){
        store.dispatch(authAction);
    }
    render(){

        return(
            <ScrollView style={style.scrollView}>
                <Text>Популярные товары</Text>
                <View style={style.container}>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text style={style.goodName}>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>

                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text >Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                    <View style={style.goodContainer}>
                        <Image style={{width: 70, height: 120}} source={require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg")}/>
                        <Text>Xiaomi Mi Band 3 Black</Text>
                        <View style={style.goodMenu}>
                            <Text>790 $</Text>
                            <Image style={{width: 20, height: 20}} source={require("../../assets/images/menuDots.png")}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
  return{
      getDataFromStore: ()=> dispatch({type: AUTH_ACTION})
  }

};

const mapStateToProps = function (state) {
    return {
        // basket: state.basket,
        // curse: state.curse,
        // balance: state.balance,
        // reserves: state.reserves,
        // userName: state.userName
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);