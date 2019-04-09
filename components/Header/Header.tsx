import * as React from "react";
import {Button, Image, Text, TextInput,  View} from "react-native";
import {style} from "./shHeader";
import store from "../../store";
import { SearchBar } from 'react-native-elements';


export default class  Header extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <View style={style.header}>
                <Image style={{width: 20, height: 20}} source={require("../../assets/images/menu.png")}/>
                <Text style={style.roomName}>{this.props.roomName}</Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={{width: 100}}
                    inputContainerStyle={{width: 100}}
                />
                <Image style={{width: 20, height: 20}} source={require("../../assets/images/shopping-cart.png")}/>
            </View>
        )
    }
};