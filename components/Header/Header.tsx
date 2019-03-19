import * as React from "react";
import {Button, Image, Text, TextInput,  View} from "react-native";
import {style} from "./shHeader";
import store from "../../store";


export const Header = props => {
  return (
      <View style={style.header}>
          <Image style={{width: 20, height: 20}} source={require("../../assets/images/menu.png")}/>
          <View style={style.searchContainer}>
              <Image style={{width: 20, height: 20}} source={require("../../assets/images/search.png")}/>
              <TextInput style={style.searchHolder} placeholder={"Search"}/>
          </View>
          <Image style={{width: 20, height: 20}} source={require("../../assets/images/shopping-cart.png")}/>
      </View>
  )
};