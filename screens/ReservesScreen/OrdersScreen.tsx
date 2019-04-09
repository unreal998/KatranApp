import * as React from "react";
import {FlatList, Image, Text, View} from "react-native";
import {style} from "./shOrdersScreen";
import Header from "../../components/Header/Header";
import {inspect} from "util";

export default class OrdersScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header roomName= {`Orders`}/>
        };
    };

    render(){
        return(
            <View style={style.container}>
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
                    renderItem={({item}) => <View>
                        <View style={style.table}>
                            <View style={style.globInfo}>
                                <Text style={style.tableGlobalInfo}>{item.key}</Text>
                                <Text style={style.tableGlobalInfo}>{item.date}</Text>
                            </View>
                            <Text style={style.tableItems}>{item.staffName}</Text>
                            <Image style={{width: 50, height: 90, marginLeft: 8}} source={item.imgUrl}/>
                            <View style={style.globInfo}>
                                <Text style={style.priseText}>Total prise</Text>
                                <Text style={style.priseText}>{item.prise}</Text>
                            </View>
                        </View>
                    </View>}
                    keyExtractor={(item, index) => item.key}
                />
            </View>
        )
    }
}