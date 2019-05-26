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
import {Icon} from "native-base";

class HomeScreen extends React.Component<any,any> {
    constructor(props){
        super(props);
    }

    static navigationOptions =  {
        drawerIcon: (tint) => (
            <Icon name="home"/>
        ),
    };

    // state = {
    //     isLoadingComplete: false,
    // };


    componentWillMount(){

        // store.dispatch(authAction);
    }
    render(){

        return(
            <View style={style.containerWrapper}>
                <Header roomName="Home" navigation={this.props.navigation}/>
                <ScrollView style={style.scrollView}>
                    <Slider/>
                    <Button title={"Каталог"} onPress={()=> this.props.navigation.navigate('Catalogue')}/>
                    <Text>Last added</Text>
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
            </View>
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