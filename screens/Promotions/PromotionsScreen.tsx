import * as React from "react";
import {Text, View} from "react-native";
import {style} from "../Promotions/shPromotionScreen";
import Header from "../../components/Header/Header";

export default class PromotionsScreen extends React.Component {
    // state = {
    //     isLoadingComplete: false,
    // };
    static navigationOptions = ({navigation}) => {
        return{
            header: props => <Header roomName= {`Promotions`}/>
        };
    };
    render(){
        return(
            <View style={style.container}>
                <Text>Settings</Text>
            </View>
        )
    }
}