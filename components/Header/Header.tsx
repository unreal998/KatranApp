import * as React from "react";
import {Button, Image, Text, TextInput,  View} from "react-native";
import {style} from "./shHeader";
import store from "../../store";
import {SearchBar} from 'react-native-elements';
import {Icon} from "native-base";


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
                <Icon name="home" style={{color:"white"}} onPress={() => {this.props.navigation.openDrawer()}}/>
                <Text style={style.roomName}>{this.props.roomName}</Text>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={{width: 200, height: 50, backgroundColor: "#1e5799"}}
                    inputContainerStyle={{width: 180, height: 30, backgroundColor: "#3670b3"}}
                />
                <Icon name="cart" style={{color:"white"}} onPress={() => {this.props.navigation.openDrawer()}}/>
            </View>
        )
    }
};