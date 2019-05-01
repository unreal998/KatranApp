import * as React from "react";
import {connect} from "react-redux";
import {Button, ImageBackground, Image, Text, View, ScrollView, FlatList} from "react-native";
import {style} from "./shHomeScreen";
import Header from "../../components/Header/Header";
import store from "../../store";
import {authAction} from "../../actions/authAction";
import {AUTH_ACTION} from "../../constants/ActionTypes";
import {bindActionCreators} from "redux";
import {Slider} from "../../components/Slider/slider";

class HomeScreen extends React.Component<any,any> {
    constructor(props){
        super(props)
        this.moveRight = this.moveRight.bind(this);
    }

    static navigationOptions = ({navigation}) => {
        return {
            header: props => <Header roomName="Home"/>,
            drawerIcon: (
                <Image source={require("../../assets/images/wallet.png")}/>
            )
        };
    };

    // state = {
    //     isLoadingComplete: false,
    // };

    moveRight(){
        document.getElementById("sliderComponent")
    }

    componentWillMount(){
        store.dispatch(authAction);
    }
    render(){

        return(
            <ScrollView style={style.scrollView}>
                <Slider/>
                <Button title={"Каталог"} onPress={()=> this.props.navigation.navigate('Catalogue')}/>
                <Text>Популярные товары</Text>
                <View style={style.container}>
                        <FlatList
                            data={
                                [
                                {
                                    key: "1",
                                    staffName: "xiaomi_mi_band_3",
                                    imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                    date: "15/02/2019",
                                    prise: "20 usd",
                                },
                                {
                                    key: "2",
                                    staffName: "xiaomi_mi_band_3",
                                    imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                    date: "15/12/2019",
                                    prise: "30 usd",
                                },
                                {
                                    key: "3",
                                    staffName: "xiaomi_mi_band_3",
                                    imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                    date: "15/02/2019",
                                    prise: "20 usd",
                                },
                                {
                                    key: "4",
                                    staffName: "xiaomi_mi_band_3",
                                    imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                    date: "15/02/2019",
                                    prise: "20 usd",
                                },
                                {
                                    key: "5",
                                    staffName: "xiaomi_mi_band_3",
                                    imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                    date: "15/02/2019",
                                    prise: "20 usd",

                                },
                            ]}
                            renderItem={({item}) =>
                                <View style={style.goodContainer}>
                                    <Image style={{width: 70, height: 120}} source={item.imgUrl}/>
                                    <Text>{item.staffName}</Text>
                                    <View style={style.goodMenu}>
                                        <Text>{item.prise}</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => item.key}
                        />
                    <FlatList
                        data={[
                            {
                                key: "1",
                                staffName: "xiaomi_mi_band_3",
                                imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                date: "15/02/2019",
                                prise: "20 usd",
                            },
                            {
                                key: "2",
                                staffName: "xiaomi_mi_band_3",
                                imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                date: "15/12/2019",
                                prise: "30 usd",
                            },
                            {
                                key: "3",
                                staffName: "xiaomi_mi_band_3",
                                imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                date: "15/02/2019",
                                prise: "20 usd",
                            },
                            {
                                key: "4",
                                staffName: "xiaomi_mi_band_3",
                                imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                date: "15/02/2019",
                                prise: "20 usd",
                            },
                            {
                                key: "5",
                                staffName: "xiaomi_mi_band_3",
                                imgUrl: require("../../assets/images/catalogs/xiaomi_mi_band_3.jpg"),
                                date: "15/02/2019",
                                prise: "20 usd",

                            },
                        ]}
                        renderItem={({item}) =>
                            <View style={style.goodContainer}>
                                <Image style={{width: 70, height: 120}} source={item.imgUrl}/>
                                <Text>{item.staffName}</Text>
                                <View style={style.goodMenu}>
                                    <Text>{item.prise}</Text>
                                </View>
                            </View>
                        }
                        keyExtractor={(item, index) => item.key}
                    />
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);