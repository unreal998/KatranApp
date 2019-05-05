import * as React from "react";
import {Image, Text, View} from "react-native";
import {style} from "../Promotions/shPromotionScreen";
import Header from "../../components/Header/Header";
import {Icon} from "native-base";

export default class PromotionsScreen extends React.Component<any, any> {
    // state = {
    //     isLoadingComplete: false,
    // };
    static navigationOptions =  {
        drawerIcon: (tint) => (
            <Icon name="home"/>
        ),
    };

    render() {
        return(
            <View style={style.container}>
                <Header roomName="Promotions" navigation={this.props.navigation}/>
                <Text>Settings</Text>
            </View>
        )
    }
}