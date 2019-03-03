import * as React from "react";
import {FlatList, Text, View} from "react-native";
import {style} from "./shReservesScreen";
import {Header} from "../../components/Header/Header";
import {inspect} from "util";

export default class ReservesScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header text= {`Reserves count: ${5}`}/>
        };
    };

    render(){
        return(
            <View style={style.container}>
                <FlatList
                    data={[
                        {
                            key: "1",
                            staffName: "name",
                            date: "15/02/2019",
                            count: "1",
                            prise: "20 usd",
                            sumTotal: "20 usd"
                        },
                        {
                            key: "2",
                            staffName: "name1",
                            date: "15/12/2019",
                            count: "5",
                            prise: "30 usd",
                            sumTotal: "60 usd"
                        },
                        {
                            key: "3",
                            staffName: "name",
                            date: "15/02/2019",
                            count: "3",
                            prise: "20 usd",
                            sumTotal: "20 usd"
                        },
                        {
                            key: "4",
                            staffName: "name",
                            date: "15/02/2019",
                            count: "2",
                            prise: "20 usd",
                            sumTotal: "20 usd"
                        },
                        {
                            key: "5",
                            staffName: "name",
                            date: "15/02/2019",
                            count: "1",
                            prise: "20 usd",
                            sumTotal: "20 usd"
                        },
                    ]}
                    renderItem={({item}) => <View>
                        <View style={style.table}>
                            <Text style={style.tableItems}>{item.key}</Text>
                            <Text style={style.tableItems}>{item.staffName}</Text>
                            <Text style={style.tableItems}>{item.date}</Text>
                            <Text style={style.tableItems}>{item.count}</Text>
                            <Text style={style.tableItems}>{item.prise}</Text>
                            <Text style={style.tableItems}>{item.sumTotal}</Text>
                        </View>
                    </View>}
                    keyExtractor={(item, index) => item.key}
                />
            </View>
        )
    }
}